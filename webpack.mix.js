const { join, resolve } = require('path')
const { copySync, removeSync } = require('fs-extra')
const mix = require('laravel-mix')
require('laravel-mix-versionhash')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

mix
  .js('resources/js/app.js', 'public/dist/js').vue({
    extractStyles: true
  }).postCss('resources/css/app.css', 'public/dist/css', [
    require('tailwindcss')
  ])

if (mix.inProduction()) {
  mix
    // .extract() // Disabled until resolved: https://github.com/JeffreyWay/laravel-mix/issues/1889
    // .version() // Use `laravel-mix-versionhash` for the generating correct Laravel Mix manifest file.
    .versionHash()
} else {
  mix.sourceMaps()
}

mix.webpackConfig({
  plugins: [
    // new BundleAnalyzerPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '~': join(__dirname, './resources/js'),
      '@': join(__dirname, './resources/js/api'),
    }
  },
  output: {
    chunkFilename: 'dist/js/[chunkhash].js',
    path: resolve(__dirname, mix.inProduction() ? './public/build' : './public')
  }
})

mix.extend('customFileLoader', config => {
  const fileLoaders = config.module.rules.find(
    rule => rule.test.toString().includes('png|jpe?g')
  )

  fileLoaders.use.forEach(fileLoader => {
    if (fileLoader.loader.includes('file-loader')) {
      Object.assign(fileLoader, {
        options: {
          ...fileLoader.options,
          esModule: false
        }
      })
    }
  })
})

mix.customFileLoader()

mix.then(() => {
  if (mix.inProduction()) {
    process.nextTick(() => publishAseets())
  }
})

function publishAseets () {
  const publicDir = resolve(__dirname, './public')

  removeSync(join(publicDir, 'dist'))
  copySync(join(publicDir, 'build', 'dist'), join(publicDir, 'dist'))
  removeSync(join(publicDir, 'build'))
}
