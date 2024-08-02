import type { Linter } from 'eslint'

import solidConfig from './addons/solid'
import coreConf from './basic/core'
import stylishConf from './basic/stylistic'
import stylishJsxConf from './basic/stylistic-jsx'
import getTSConf from './basic/typescript'
import otherPluginsConf from './basic/other-plugins'

export interface AutumnConfig {
  tsconfigPath: string
  tsconfigRootDir: string
  extensionsEnabled?: {
    solid: boolean
  }
}

export default function defineConfig (config: AutumnConfig): Linter.Config[] {
  const rules: Linter.Config[] = [coreConf, stylishConf, stylishJsxConf, ...getTSConf(config.tsconfigPath, config.tsconfigRootDir), otherPluginsConf]

  if ((config.extensionsEnabled?.solid) === true) {
    rules.push(solidConfig)
  }

  return rules
}
