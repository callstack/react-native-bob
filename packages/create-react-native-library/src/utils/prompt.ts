import prompts, { type Answers } from 'prompts';

type Choice = {
  title: string;
  value: string;
  description?: string;
};

export type Question<T extends string> = Omit<
  prompts.PromptObject<T>,
  'validate' | 'name' | 'choices'
> & {
  name: T;
  validate?: (value: string) => boolean | string;
  choices?:
    | Choice[]
    | ((prev: unknown, values: Partial<Answers<T>>) => Choice[]);
};

/**
 * Wrapper around `prompts` with additional features:
 *
 * - Improved type-safety
 * - Read answers from passed arguments
 * - Skip questions with a single choice
 * - Exit on canceling the prompt
 */
export async function prompt<T extends string>(
  questions: Question<T>[] | Question<T>,
  argv?: Answers<T>,
  options?: prompts.Options
) {
  const singleChoiceAnswers = {};
  const promptQuestions: Question<T>[] = [];

  if (Array.isArray(questions)) {
    for (const question of questions) {
      let promptQuestion = question;

      // Skip questions which are passed as parameter and pass validation
      const argValue = argv?.[question.name];

      if (argValue && question.validate?.(argValue) !== false) {
        continue;
      }

      const { type, choices } = question;

      // Don't prompt questions with a single choice
      if (
        type === 'select' &&
        Array.isArray(question.choices) &&
        question.choices.length === 1
      ) {
        const onlyChoice = question.choices[0];

        if (onlyChoice?.value) {
          // @ts-expect-error assume the passed value is correct
          singleChoiceAnswers[question.name] = onlyChoice.value;
        }

        continue;
      }

      // Don't prompt dynamic questions with a single choice
      if (type === 'select' && typeof choices === 'function') {
        promptQuestion = {
          ...question,
          type: (prev, values) => {
            const dynamicChoices = choices(prev, { ...argv, ...values });

            if (dynamicChoices && dynamicChoices.length === 1) {
              const onlyChoice = dynamicChoices[0];

              if (onlyChoice?.value) {
                // @ts-expect-error assume the passed value is correct
                singleChoiceAnswers[question.name] = onlyChoice.value;
              }

              return null;
            }

            return type;
          },
        };
      }

      promptQuestions.push(promptQuestion);
    }
  } else {
    promptQuestions.push(questions);
  }

  let promptAnswers;

  // TODO: negate
  if (!process.stdin.isTTY) {
    const missingQuestions = promptQuestions.reduce<string[]>(
      (acc, question) => {
        let type = question.type;

        if (typeof question.type === 'function') {
          // @ts-expect-error assume the passed value is correct
          type = question.type(null, argv as Answers<T>, null);
        }

        if (type != null) {
          acc.push(
            question.name
              .replace(/([A-Z]+)/g, '-$1')
              .replace(/^-/, '')
              .toLowerCase()
          );
        }

        return acc;
      },
      []
    );

    if (missingQuestions.length) {
      console.log('Missing arguments:', missingQuestions.join(', '));

      process.exit(1);
    }
  } else {
    promptAnswers = await prompts(promptQuestions, {
      onCancel() {
        // Exit the CLI on cancel
        process.exit(1);
      },
      ...options,
    });
  }

  return {
    ...argv,
    ...singleChoiceAnswers,
    ...promptAnswers,
  };
}
