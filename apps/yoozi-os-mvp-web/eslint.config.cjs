const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.cjs');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'warn',
        {
          type: 'element',
          prefix: 'yz',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'yz',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/component-class-suffix': [
        'error',
        {
          suffixes: ['Component', 'Page', 'Dialog', 'Layout'],
        },
      ],
      'no-unsafe-optional-chaining': 'off',
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {
      '@angular-eslint/template/click-events-have-key-events': ['warn'],
      '@angular-eslint/template/interactive-supports-focus': ['warn'],
    },
  },
];
