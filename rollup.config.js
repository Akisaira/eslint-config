import { builtinModules } from 'node:module'
import { readFileSync } from 'node:fs'

import { defineConfig } from 'rollup'
import nodeResolve from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'

/** @type {Record<string, Record<string, string>} */
const { dependencies, peerDependencies } = JSON.parse(
  readFileSync('./package.json', 'utf8')
)

const external = [
  ...builtinModules,
  ...builtinModules.map((m) => `node:${m}`),
  ...Object.keys(dependencies),
  ...Object.keys(peerDependencies)
]

export default defineConfig([
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'esm'
    },
    plugins: [
      nodeResolve(),
      esbuild({
        target: 'esnext'
      })
    ],
    external
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'esm'
    },
    plugins: [
      dts({
        compilerOptions: { preserveSymlinks: false },
        respectExternal: true,
        tsconfig: 'tsconfig.json'
      })
    ],
    external
  }
])
