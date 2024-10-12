// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    // 適用するファイルを指定
    files: ['**/*.js', '**/*.ts'],
    // 除外するファイルを指定。--ignore-pathで指定されていたものを指定
    ignores: ['**/*.log*', '.cache/**'],
    // 適用するルールを指定
    rules: {
      'no-console': 'off',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'no-console': 'error',
    },
  },
)
