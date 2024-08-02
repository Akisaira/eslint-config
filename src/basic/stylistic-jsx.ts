
import type { Linter } from 'eslint'

import stylisticPlugin from '@stylistic/eslint-plugin'

export default {
  name: 'stylistic',
  plugins: {
    '@stylistic': stylisticPlugin
  },
  files: ['**/*.jsx', '**/*.tsx'],
  rules: {
    '@stylistic/jsx-quotes': ['error', 'prefer-double'],
    '@stylistic/jsx-child-element-spacing': 'error',
    '@stylistic/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    '@stylistic/jsx-closing-tag-location': 'error',
    '@stylistic/jsx-curly-brace-presence': ['error', 'never'],
    '@stylistic/jsx-curly-newline': ['error', 'consistent'],
    '@stylistic/jsx-equals-spacing': ['error', 'never'],
    '@stylistic/jsx-indent-props': ['error', 2],
    '@stylistic/jsx-max-props-per-line': ['error', { maximum: { single: 3, multi: 1 } }],
    '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    '@stylistic/jsx-props-no-multi-spaces': 'error',
    '@stylistic/jsx-self-closing-comp': ['error', { component: true, html: true }],
    '@stylistic/jsx-sort-props': ['error', { 
      callbacksLast: true, 
      shorthandFirst: true,
      reservedFirst: true,
      multiline: 'last' 
    }],
    '@stylistic/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never'
    }],
    '@stylistic/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line' 
    }]
  }
} satisfies Linter.Config
