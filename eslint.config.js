/* eslint-disable @typescript-eslint/naming-convention */
// @ts-check

import { dirname, resolve } from 'path'

import defineConfig from './lib/index.js'

const __filename = new URL(import.meta.url).pathname
const __dirname = dirname(__filename)

export default defineConfig({
  tsconfigPath: resolve(__dirname, 'tsconfig.json'),
  tsconfigRootDir: __dirname,
  extra: [{
    ignores: ['lib/**/*']
  }]
})
