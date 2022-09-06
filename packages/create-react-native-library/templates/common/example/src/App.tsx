import * as React from 'react';

<% if (project.view) { -%>
import { StyleSheet, View } from 'react-native';
import { <%- project.name -%>View } from '<%- project.slug -%>';
<% } else { -%>
import { StyleSheet, View, Text } from 'react-native';
import { multiply } from '<%- project.slug -%>';
<% } -%>

<% if (project.view) { -%>
export default function App() {
  return (
    <View style={styles.container}>
      <<%- project.name -%>View color="#32a852" style={styles.box} />
    </View>
  );
}
<% } else if (project.architecture === "new_arch" && project.turbomodule) { -%>
const result = multiply(3, 7);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}
<% } else { -%>
export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}
<% } -%>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
