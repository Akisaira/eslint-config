import type { Linter } from 'eslint'

import reactConfig from './addons/react'
import solidConfig from './addons/solid'
import coreConf from './basic/core'
import stylishConf from './basic/stylistic'
import getTSConf from './basic/typescript'
import otherPluginsConf from './basic/other-plugins'

export type AutumnBuiltins = 'react' | 'solid'

export interface AutumnConfig {
  tsconfigPath: string
  tsconfigRootDir: string
  builtIn?: AutumnBuiltins[]
  extra?: Linter.Config[]
}

export default function defineConfig (config: AutumnConfig): Linter.Config[] {
  const rules: Linter.Config[] = [coreConf, stylishConf, ...getTSConf(config.tsconfigPath, config.tsconfigRootDir), otherPluginsConf]

  if (config.builtIn != null) {
    for (const builtIn of config.builtIn) {
      switch (builtIn) {
        case 'react':
          rules.push(reactConfig)
          break
        case 'solid':
          rules.push(solidConfig)
          break
      }
    }
  }

  if (config.extra != null) {
    rules.push(...config.extra)
  }

  return rules
}
