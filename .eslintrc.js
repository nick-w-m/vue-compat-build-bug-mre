module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended', // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/configs#eslint-recommended
    'plugin:vue/essential',
    'airbnb-base',
    'airbnb-typescript/base',
    '@vue/typescript/recommended',
    '@vue/airbnb'
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser'
  },
  ignorePatterns: [
    'public/'
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'no-continue': 'off',
    'no-plusplus': 'off',
    'no-empty-pattern': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off',
    'no-underscore-dangle': 'off',
    'import/extensions': 'off',
    'import/order': 'warn',
    'prefer-rest-params': 'warn',
    'class-methods-use-this': 'off',
    'object-shorthand': 'off',
    'max-len': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'comma-dangle': ['error', 'never'],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn', {
        argsIgnorePattern: 'req|res|next|^err|request|response|payload|commit|context|event|resolve|reject'
      }
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Function: false
        }
      }
    ],
    'vue/this-in-template': 'error',
    'vue/html-quotes': 'error'
  },
  overrides: [
    {
      files: [
        '*-test.js',
        '*.spec.js',
        'tests/**/*.js'
      ],
      rules: {
        'no-undef': 'off'
      }
    },
    {
      files: [
        'src/store/**/*.ts'
      ],
      rules: {
        'no-param-reassign': 'off'
      }
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        config: require.resolve('@vue/cli-service/webpack.config.js')
      }
    }
  }
};
