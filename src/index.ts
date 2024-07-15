import { Linter } from "eslint";
import coreConfig from "./addons/core";
import javascriptConfig from "./addons/javascript";
import reactConfig from "./addons/react";
import solidConfig from "./addons/solid";
import stylishConfig from "./addons/stylish";
import typescriptConfig from "./addons/typescript";

export type AutumnBuiltins = 'javascript' | 'react' | 'solid' | 'typescript'

export interface AutumnConfig {
  builtIn: AutumnBuiltins[]
  extra: Linter.FlatConfig[]
}

export default function autumn(config: AutumnConfig): Linter.FlatConfig[] {
  const rules: Linter.FlatConfig[] = [coreConfig, stylishConfig]

  for (const builtIn of config.builtIn) {
    switch (builtIn) {
      case 'javascript':
        rules.push(javascriptConfig)
        break
      case 'react':
        rules.push(reactConfig)
        break
      case 'solid':
        rules.push(solidConfig)
        break
      case 'typescript':
        rules.push(typescriptConfig)
        break
    }
  }

  return rules
}