import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import _import from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended'
    )
  ),
  {
    plugins: {
      react: fixupPluginRules(react),
      'react-hooks': fixupPluginRules(reactHooks),
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      import: fixupPluginRules(_import),
      jest: fixupPluginRules(jest)
    },

    languageOptions: {
      globals: {
        ...globals.browser
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    settings: {
      react: {
        version: 'detect'
      }
    },

    rules: {
      indent: ['error', 2],

      'max-lines': [
        'error',
        {
          max: 500,
          skipComments: true,
          skipBlankLines: true
        }
      ],

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false
        }
      ],

      quotes: ['off', 'single'],
      semi: ['warn', 'always'],
      complexity: ['error', 5],
      '@typescript-eslint/no-explicit-any': 'error',
      'no-empty': 'warn',
      'no-console': 'error',
      'no-unused-vars': 'off',
      'no-unused-expressions': 'error',
      'react/jsx-runtime': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-undef': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      'import/no-unused-modules': 'error',
      'prefer-const': 'error',
      'no-shadow': 'error',
      'no-debugger': 'error',
      'object-curly-spacing': ['error', 'always'],

      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.jsx', '.tsx']
        }
      ],

      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],

          pathGroups: [
            {
              pattern: '**/*.css',
              group: 'index',
              position: 'after'
            }
          ],

          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ]
    }
  }
];
