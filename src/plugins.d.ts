
declare module 'eslint-plugin-promise' {
  import type { ESLint } from 'eslint'

  const plugin: ESLint.Plugin
  export = plugin
}

declare module 'eslint-plugin-import-x' {
  import type { ESLint } from 'eslint'

  const importPlugin: ESLint.Plugin
  export = importPlugin
}
