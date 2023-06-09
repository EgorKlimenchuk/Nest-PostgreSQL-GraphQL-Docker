module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['tailwind.*.js', '.eslintrc.js'],
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    ecmaVersion: 2018,
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  plugins: ['prettier', '@typescript-eslint', 'import', 'jest'],
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-unused-vars': 'warn',
    'no-unused-expressions': [
      1,
      { allowShortCircuit: true, allowTernary: true },
    ],
    '@typescript-eslint/no-floating-promises': 'off',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-underscore-dangle': 'off',
    'react/prop-types': 0,
    'react/no-unused-prop-types': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 2,
    'import/no-deprecated': 0,
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
      },
    },
  ],
};
