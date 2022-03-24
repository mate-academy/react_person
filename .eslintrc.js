module.exports = {
  extends: ['@mate-academy/eslint-config-react', 'plugin:cypress/recommended'],
  rules: {
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false,
    }],
    'react/prop-types': 0,
  },
};
