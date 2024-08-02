import type { Linter } from 'eslint'

import * as importXPlugin from 'eslint-plugin-import-x'
import nPlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'

export default {
  plugins: {
    n: nPlugin,
    promise: promisePlugin,
    'import-x': importXPlugin
  },
  rules: {
    'n/handle-callback-err': ['error', '^(err|error)$'],
    'n/no-callback-literal': ['error'],
    'n/no-deprecated-api': ['error'],
    'n/no-exports-assign': ['error'],
    'n/no-new-require': ['error'],
    'n/no-path-concat': ['error'],
    'n/process-exit-as-throw': ['error'],

    'promise/param-names': ['error'],

    'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import-x/export': ['error'],
    'import-x/first': ['error'],
    'import-x/no-absolute-path': [
      'error',
      { esmodule: true, commonjs: true, amd: false }
    ],
    'import-x/no-duplicates': ['error'],
    'import-x/no-named-default': ['error'],
    'import-x/no-webpack-loader-syntax': ['error'],
    'import-x/newline-after-import': ['error'],
    'import-x/order': ['error', {
      groups: [
        'type',
        'builtin',
        'external',
        ['parent', 'sibling']
      ],
      pathGroups: [
        {
          pattern: '@/**',
          group: 'external',
          position: 'after'
        },
        {
          pattern: './**',
          group: 'sibling',
          position: 'after'
        },
        {
          pattern: '../**',
          group: 'parent'
        }
      ],
      'newlines-between': 'always'
    }]
  }
} satisfies Linter.Config
