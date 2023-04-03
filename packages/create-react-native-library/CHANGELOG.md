# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.28.0](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.27.3...create-react-native-library@0.28.0) (2023-02-26)

### Bug Fixes

* failure noinspection version for 0.69.4 ([#362](https://github.com/callstack/react-native-builder-bob/issues/362)) ([c203294](https://github.com/callstack/react-native-builder-bob/commit/c203294fc8a40cdee07ba9379860fec6d8f5eb1d)) - by @Sunbreak

### Features

* backport android of new arch project ([da5335e](https://github.com/callstack/react-native-builder-bob/commit/da5335e65e9b6763e372d6422d8582097d11a9f1)) - by @Sunbreak
* backport C++ files of new arch view ([8e42ae9](https://github.com/callstack/react-native-builder-bob/commit/8e42ae91e55469cc782224ffce7cf32b3903a7b5)) - by @Sunbreak
* backport Java/Kotlin files of new arch view ([bf2408a](https://github.com/callstack/react-native-builder-bob/commit/bf2408a16e4e79c7692cf0781aa532e8d26e7450)) - by @Sunbreak
* make year dynamic ([#354](https://github.com/callstack/react-native-builder-bob/issues/354)) ([8795a94](https://github.com/callstack/react-native-builder-bob/commit/8795a94b102068bc50d876b04022b0389ff0a1e3)) - by @dcangulo

## [0.27.3](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.27.2...create-react-native-library@0.27.3) (2022-12-04)

**Note:** Version bump only for package create-react-native-library

## [0.27.2](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.27.1...create-react-native-library@0.27.2) (2022-12-02)

### Bug Fixes

* add support for react native 0.71 ([fc87440](https://github.com/callstack/react-native-builder-bob/commit/fc8744092501ba00fd11bdb69e1ecb46fbb63c0f))
* don't use deprecated package for lefthook ([de5b484](https://github.com/callstack/react-native-builder-bob/commit/de5b484b270ef2237161dc210f4d982aaba6637f))
* fetch correct version of packages for web support ([628df24](https://github.com/callstack/react-native-builder-bob/commit/628df24f3e2f7e21a98fb08a0f7322de326d6b91))
* fix typo in equality check ([23f26f5](https://github.com/callstack/react-native-builder-bob/commit/23f26f5202b72b4ddade485246bce08f786a5ed3))
* fix web support in expo example ([1e31449](https://github.com/callstack/react-native-builder-bob/commit/1e31449679503647221412cdb1c80d4d5a2143f4))
* improve error handling. closes [#336](https://github.com/callstack/react-native-builder-bob/issues/336) ([09f6b48](https://github.com/callstack/react-native-builder-bob/commit/09f6b48105dcffb3688d7eed8b4d718e045e65d1))

### Reverts

* Revert "refactor: remove unnecessary config that's added by codegen" ([d18a866](https://github.com/callstack/react-native-builder-bob/commit/d18a866642d086baab1868469ebc618c5636b419))

## [0.27.1](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.27.0...create-react-native-library@0.27.1) (2022-11-22)

### Bug Fixes

* add missing codegen config for mixed template for iOS ([577fd15](https://github.com/callstack/react-native-builder-bob/commit/577fd152056d09cf895e1293f12f67b99bd6d5c7))
* fix typo in mixed template for iOS ([#331](https://github.com/callstack/react-native-builder-bob/issues/331)) ([f76ca8d](https://github.com/callstack/react-native-builder-bob/commit/f76ca8d42e2a68dcaab068dfa567d733d0a87bb9)), closes [#330](https://github.com/callstack/react-native-builder-bob/issues/330)
* fix typo when checking validity ([5ffd5c5](https://github.com/callstack/react-native-builder-bob/commit/5ffd5c5d98e7151f2a16456e4d58eca677f3bf80))

# [0.27.0](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.26.0...create-react-native-library@0.27.0) (2022-11-10)

### Bug Fixes

* use npm_config_yes instead of --yes for npm 6 compatibility ([aefa30b](https://github.com/callstack/react-native-builder-bob/commit/aefa30b6f0cacf16e1ed2d5577c6c62dc442f320))
* validate arguments passed to the CLI ([03defcf](https://github.com/callstack/react-native-builder-bob/commit/03defcf22e3b07a09c05eb982db0deb4c0b3845f))

### Features

* add a clean script to cleanup build folders ([6085fd6](https://github.com/callstack/react-native-builder-bob/commit/6085fd60dddac20b8fc87ff86ec469bac7ba8ca8))
* add kotlin support to the fabric template ([ccdb618](https://github.com/callstack/react-native-builder-bob/commit/ccdb618665a4f17d677073d6fba1f71044d3f3a0))

# [0.26.0](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.25.0...create-react-native-library@0.26.0) (2022-11-03)

### Bug Fixes

* don't hardcode mixed template to run with new architecture ([c397b8b](https://github.com/callstack/react-native-builder-bob/commit/c397b8bb38f6d1d05d95c5ae76079f11d1f1d391))
* fix package folder names ([2436293](https://github.com/callstack/react-native-builder-bob/commit/2436293b75a14c944d9f5a57529b1a4760edc246))
* mention CONTRIBUTING.md after generating the project ([36c1367](https://github.com/callstack/react-native-builder-bob/commit/36c1367194bc9cd5dea4098fa10bf2cd17adfe26))
* mention Java & Swift in CONTRIBUTING.md ([9ec8f64](https://github.com/callstack/react-native-builder-bob/commit/9ec8f64b378e81a07f72e3add57fe9e135f412a6))
* update codegenConfig to the new format ([1212367](https://github.com/callstack/react-native-builder-bob/commit/1212367bad68d59a0c559f2add667d7e18526230))

### Features

* add an option to specify react native version ([5f2a183](https://github.com/callstack/react-native-builder-bob/commit/5f2a18315fd711c3f917d33dc5e0d4fba30b83d1))
* add fabric template ([#273](https://github.com/callstack/react-native-builder-bob/issues/273)) ([c43878f](https://github.com/callstack/react-native-builder-bob/commit/c43878f3410c111bbacaff82fb03e1a6aa5a5b61))
* preserve casing and package namespace ([4993bc9](https://github.com/callstack/react-native-builder-bob/commit/4993bc9d200ea235456214f565184d9fd6dcf95f)), closes [#250](https://github.com/callstack/react-native-builder-bob/issues/250)
* support cpp language with turbo modules ([1b1b68b](https://github.com/callstack/react-native-builder-bob/commit/1b1b68b3dfff77f99caeea8dc0eca2086fc0c6e8))

# [0.25.0](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.24.4...create-react-native-library@0.25.0) (2022-10-21)

### Features

* add kotlin support to turbo module template ([ad43843](https://github.com/callstack/react-native-builder-bob/commit/ad4384374e0502b071692dec5fd5d3cf7c1b4338))

## [0.24.4](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.24.3...create-react-native-library@0.24.4) (2022-10-19)

### Bug Fixes

* fix library name not being written to react-native.config.js ([4e05286](https://github.com/callstack/react-native-builder-bob/commit/4e05286d57c6f1a98217d9e860fbee622352ea5f)), closes [#299](https://github.com/callstack/react-native-builder-bob/issues/299) [#300](https://github.com/callstack/react-native-builder-bob/issues/300) [#302](https://github.com/callstack/react-native-builder-bob/issues/302)

## [0.24.3](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.24.2...create-react-native-library@0.24.3) (2022-10-14)

### Bug Fixes

* restrict engine to latest Node LTS ([f569064](https://github.com/callstack/react-native-builder-bob/commit/f5690640cfca5b3b7c32b98c80442b08fda09150))

## [0.24.2](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.24.1...create-react-native-library@0.24.2) (2022-10-13)

### Bug Fixes

* use [@latest](https://github.com/latest) for the npx commands ([5a0fbfa](https://github.com/callstack/react-native-builder-bob/commit/5a0fbfacc52ae26254b565ff2a4cf442eaa6ef8d))

## [0.24.1](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.24.0...create-react-native-library@0.24.1) (2022-10-13)

### Bug Fixes

* use index.js instead of index.ts ([1393499](https://github.com/callstack/react-native-builder-bob/commit/1393499fab8a282f09fec68ccf10b52517581c1e)), closes [#281](https://github.com/callstack/react-native-builder-bob/issues/281)

# [0.24.0](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.23.3...create-react-native-library@0.24.0) (2022-10-13)

### Bug Fixes

* exclude some unnecessary files from the package ([0213adc](https://github.com/callstack/react-native-builder-bob/commit/0213adccf8cff279b6953f503bdc04db1d72437f))
* fix types in cpp adapter. closes [#278](https://github.com/callstack/react-native-builder-bob/issues/278) ([2c572dd](https://github.com/callstack/react-native-builder-bob/commit/2c572dd9b8eac5a494ed3c39dc7f1f453d08c7ed))
* remove babel-eslint parser due to lack of support for typescript ([#274](https://github.com/callstack/react-native-builder-bob/issues/274)) ([7a0c0e9](https://github.com/callstack/react-native-builder-bob/commit/7a0c0e9794c741b6dc0a43b65bb98ef513c41f4b))
* show a helpful error if npx isn't installed ([2c3b5e4](https://github.com/callstack/react-native-builder-bob/commit/2c3b5e4464ceca56c5dd8e51f3f29ab3c7ba08a8))

### Features

* **ios:** enable function generation by Xcode with CodeGen interface ([#267](https://github.com/callstack/react-native-builder-bob/issues/267)) ([b152ccf](https://github.com/callstack/react-native-builder-bob/commit/b152ccf4ba0aa9aabf9697506b45ac2c4e75a1c1)), closes [#261](https://github.com/callstack/react-native-builder-bob/issues/261)
* use react-native init for generating example app ([#271](https://github.com/callstack/react-native-builder-bob/issues/271)) ([ac0e2f7](https://github.com/callstack/react-native-builder-bob/commit/ac0e2f79ed292b92341a00e73ab6395c9ad8e0d2))

## [0.23.3](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.23.2...create-react-native-library@0.23.3) (2022-08-01)

### Bug Fixes

* remove explicit folly version ([b35432e](https://github.com/callstack/react-native-builder-bob/commit/b35432e2b7c8149be2eb9eba20e2c3efd86b899e))

## [0.23.2](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.23.1...create-react-native-library@0.23.2) (2022-07-09)

### Bug Fixes

* update ‘js’ value type to new value ‘library’ in create library script ([#253](https://github.com/callstack/react-native-builder-bob/issues/253)) ([5599ee6](https://github.com/callstack/react-native-builder-bob/commit/5599ee63cafb0e39d238d38bd58734b40ca001aa))

## [0.23.1](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.23.0...create-react-native-library@0.23.1) (2022-07-04)

### Bug Fixes

* use correct bob version in package.json ([4a5afb3](https://github.com/callstack/react-native-builder-bob/commit/4a5afb3ea1ebdf9febe0a3822cbabaa32d0a4faf))

# [0.23.0](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.22.0...create-react-native-library@0.23.0) (2022-06-30)

### Features

* update turbo modules template to use a synchronous API ([1393060](https://github.com/callstack/react-native-builder-bob/commit/1393060e5f36dd4d43b53603d9cf7f814b8ce94b))

# [0.22.0](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.21.1...create-react-native-library@0.22.0) (2022-06-27)

### Features

* add a template for turbo module (experimental) ([cc95a72](https://github.com/callstack/react-native-builder-bob/commit/cc95a726f8019e016cebde76c0de15986eb79c64))

## [0.21.1](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.21.0...create-react-native-library@0.21.1) (2022-06-22)

### Bug Fixes

* fix generated package name ([09e63a9](https://github.com/callstack/react-native-builder-bob/commit/09e63a9f00821e2e67b301a62e61e7f8175c3e4a))

# [0.21.0](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.20.1...create-react-native-library@0.21.0) (2022-06-21)

### Bug Fixes

* consolidate gradle files ([af0ae13](https://github.com/callstack/react-native-builder-bob/commit/af0ae134d4a122f2ec0d08bda0572718e2f72174))
* fix requiresMainQueueSetup warning for swift modules ([31cf29f](https://github.com/callstack/react-native-builder-bob/commit/31cf29fa6998563fe7f39c057039220249922998))
* fixed lint throw error without semicolon ([#232](https://github.com/callstack/react-native-builder-bob/issues/232)) ([45c138b](https://github.com/callstack/react-native-builder-bob/commit/45c138bd0ed0e950fbfc2dd15a4f7d601bbab7ee))
* include header with project identifier for cpp ([#246](https://github.com/callstack/react-native-builder-bob/issues/246)) ([2aba2be](https://github.com/callstack/react-native-builder-bob/commit/2aba2be319a2ab3b6e618886306f7e5712bc8b9f))
* remove double-quoted imports from React-Core ([#220](https://github.com/callstack/react-native-builder-bob/issues/220)) ([0de461d](https://github.com/callstack/react-native-builder-bob/commit/0de461d32bf5a74a3c91f0d2aa860f429f369d54))
* use react-native.config.js for linking the library ([1000cd7](https://github.com/callstack/react-native-builder-bob/commit/1000cd7c4d99647f4ad2e90cfcc5874697e270aa))

### Features

* enable hermes by default ([194e279](https://github.com/callstack/react-native-builder-bob/commit/194e2793244f92a3cf2a606e6077a9978a0679e1))
* migrate to lefthook instead of husky ([c3e4bfb](https://github.com/callstack/react-native-builder-bob/commit/c3e4bfb9c6db97b8fbbdc24aa2d10a0b41c9de4d))
* upgrade templates to latest react & react-native ([9bb2a22](https://github.com/callstack/react-native-builder-bob/commit/9bb2a223b0957239db3cc09fc89269ab68fefc0b))

## [0.20.1](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.20.0...create-react-native-library@0.20.1) (2021-10-15)

### Bug Fixes

* fix cpp template ([#203](https://github.com/callstack/react-native-builder-bob/issues/203)) ([15a82b0](https://github.com/callstack/react-native-builder-bob/commit/15a82b00c4e9a98f467a7b48dccd4551c8da1c3e))

# [0.20.0](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.19.0...create-react-native-library@0.20.0) (2021-09-28)

### Bug Fixes

* **android:** prefer downloading dependencies from Maven Central ([#198](https://github.com/callstack/react-native-builder-bob/issues/198)) ([ecea932](https://github.com/callstack/react-native-builder-bob/commit/ecea932b52011378db35a223023097fa11ed651e))
* can't run yarn command under Windows ([8bac4d4](https://github.com/callstack/react-native-builder-bob/commit/8bac4d4690a0ba2576e9b83b00be92061ba796e3))
* fix generating cpp project on iOS ([75a4a3c](https://github.com/callstack/react-native-builder-bob/commit/75a4a3cf1b7d5f3c2b14f2f3a20c0be72250a119))
* wrong package name of ReactNativeFlipper ([#161](https://github.com/callstack/react-native-builder-bob/issues/161)) ([981448d](https://github.com/callstack/react-native-builder-bob/commit/981448db9970e42521661a5b6e54fd71fe3390ef))

### Features

* print an error when library is not linked ([#202](https://github.com/callstack/react-native-builder-bob/issues/202)) ([956ffd6](https://github.com/callstack/react-native-builder-bob/commit/956ffd60a6b4132a81494e1599b52e5aee232111))
* update expo sdk version to 42 ([#192](https://github.com/callstack/react-native-builder-bob/issues/192)) ([6276f59](https://github.com/callstack/react-native-builder-bob/commit/6276f59001cb92840a421de6bd01b41697ef1222))
* upgrade husky to v6 ([a78b9d1](https://github.com/callstack/react-native-builder-bob/commit/a78b9d147a2a2d1c42f050c60f808855bb97bc24))

# [0.19.0](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.18.1...create-react-native-library@0.19.0) (2021-04-06)

### Bug Fixes

* fallback bob version ([#147](https://github.com/callstack/react-native-builder-bob/issues/147)) ([47fdd6b](https://github.com/callstack/react-native-builder-bob/commit/47fdd6bd914f3682b32d5ebd5b7a21d1433f7337))
* fix missing semicolon in babel config ([#142](https://github.com/callstack/react-native-builder-bob/issues/142)) ([b552564](https://github.com/callstack/react-native-builder-bob/commit/b552564a0daaee88001c030b300feb57e7b2fcdb))
* hardcode flipper version. fixes [#144](https://github.com/callstack/react-native-builder-bob/issues/144) ([eb93059](https://github.com/callstack/react-native-builder-bob/commit/eb93059f5ce996139654876a8d08c1081b99ee83))
* update docs with more info ([670ed10](https://github.com/callstack/react-native-builder-bob/commit/670ed10c7faf746e284409ed32d723f00f8a5867))

### Features

* add support for Java templates ([#129](https://github.com/callstack/react-native-builder-bob/issues/129)) ([e3a4c2d](https://github.com/callstack/react-native-builder-bob/commit/e3a4c2def1358240d2ac8f647503904950b2fb9b))

## [0.18.1](https://github.com/callstack/react-native-builder-bob/compare/create-react-native-library@0.18.0...create-react-native-library@0.18.1) (2021-03-03)

**Note:** Version bump only for package create-react-native-library

# 0.18.0 (2021-03-02)

**Note:** Version bump only for package create-react-native-library
