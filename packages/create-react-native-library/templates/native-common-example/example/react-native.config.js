const path = require('path');
const pak = require('../package.json');
<% if (example === 'test-app') { -%>
const { configureProjects } = require('react-native-test-app');
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
<% } else { -%>
  project: {
    ios: {
      automaticPodsInstallation: true,
    },
  },
<% } -%>
  dependencies: {
    [pak.name]: {
      root: path.join(__dirname, '..'),
    },
  },
};
