import type { Linter } from 'eslint'
import stylisticPlugin from '@stylistic/eslint-plugin'

export default {
  name: 'stylistic',
  plugins: {
    '@stylistic': stylisticPlugin
  },
  files: ['**/*'],
  rules: {
    '@stylistic/array-bracket-newline': ['error', 'consistent'],
    '@stylistic/array-bracket-spacing': ['error', 'never'],
    '@stylistic/array-element-newline': ['error', 'consistent'],
    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
    '@stylistic/block-spacing': ['error', 'always'],
    '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    '@stylistic/comma-dangle': ['error', 'never'],
    '@stylistic/comma-spacing': ['error', { before: false, after: true }],
    '@stylistic/comma-style': ['error', 'last'],
    '@stylistic/computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
    '@stylistic/dot-location': ['error', 'property'],
    '@stylistic/eol-last': ['error', 'always'],
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/function-call-spacing': ['error', 'never'],
    '@stylistic/function-paren-newline': ['error', 'consistent'],
    '@stylistic/generator-star-spacing': ['error', { before: true, after: false }],
    '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
    '@stylistic/indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: { parameters: 1, body: 1 },
      FunctionExpression: { parameters: 1, body: 1 },
      CallExpression: { arguments: 1 },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,
      ignoredNodes: ['TemplateLiteral *'],
      offsetTernaryExpressions: true
    }],
    '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],
    '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
    '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    '@stylistic/linebreak-style': ['error', 'unix'],
    '@stylistic/multiline-ternary': ['error', 'always-multiline'],
    '@stylistic/no-extra-parens': ['error', 'functions'],
    '@stylistic/no-mixed-operators': ['error', {
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
        ['??', '&&'],
        ['??', '||']
      ]
    }],

    '@stylistic/no-multi-spaces': ['error', { ignoreEOLComments: false }],
    '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
    '@stylistic/no-tabs': 'error',
    '@stylistic/no-trailing-spaces': ['error', { skipBlankLines: false, ignoreComments: false }],
    '@stylistic/no-floating-decimal': 'error',
    '@stylistic/no-whitespace-before-property': 'error',
    '@stylistic/object-curly-newline': ['error', { multiline: true, consistent: true }],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    '@stylistic/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before', '|>': 'before' } }],
    '@stylistic/padded-blocks': ['error', 'never'],
    '@stylistic/quote-props': ['error', 'as-needed'],
    '@stylistic/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: 'never' }],
    '@stylistic/rest-spread-spacing': ['error', 'never'],
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/semi-spacing': ['error', { before: false, after: true }],
    '@stylistic/space-before-blocks': ['error', 'always'],
    '@stylistic/space-before-function-paren': ['error', 'always'],
    '@stylistic/space-in-parens': ['error', 'never'],
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/space-unary-ops': ['error', { words: true, nonwords: false }],
    '@stylistic/spaced-comment': ['error', 'always', {
      line: { markers: ['*package', '!', '/', ',', '='] },
      block: { balanced: true, markers: ['*package', '!', ',', ':', '::', 'flow-include'], exceptions: ['*'] }
    }],
    '@stylistic/template-curly-spacing': ['error', 'never'],
    '@stylistic/template-tag-spacing': ['error', 'never'],
    '@stylistic/wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
    '@stylistic/yield-star-spacing': ['error', 'both']
  }
} satisfies Linter.Config
