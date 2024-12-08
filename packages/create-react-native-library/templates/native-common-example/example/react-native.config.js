const path = require('path');
<% if (example !== 'expo') { -%>
const pkg = require('../package.json');
<% } -%>
<% if (example === 'test-app') { -%>
const { configureProjects } = require('react-native-test-app');
<% } -%>
<% if (example === 'expo') { -%>

// FIXME: `__dirname` is not set correctly in Expo
// When building the, the cwc is `example/ios`
// So we override `__dirname` based on that
// https://github.com/expo/expo/pull/33532
__dirname = path.resolve(process.cwd(), '..');

const pkg = require(path.join(__dirname, '..', 'package.json'));
<% } -%>

module.exports = {
<% if (example === 'test-app') { -%>
  project: configureProjects({
    android: {
      sourceDir: 'android',
    },
    ios: {
      sourceDir: 'ios',
      automaticPodsInstallation: true,
    },
  }),
<% } else if (example === 'vanila') { -%>
  project: {
    ios: {
      automaticPodsInstallation: true,
    },
  },
<% } -%>
  dependencies: {
    [pkg.name]: {
      root: path.join(__dirname, '..'),
      platforms: {
        // Codegen script incorrectly fails without this
        // So we explicitly specify the platforms with empty object
        ios: {},
        android: {},
      },
    },
  },
};
