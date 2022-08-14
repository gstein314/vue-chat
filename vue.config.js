const isProd = process.env.NODE_ENV === 'production'

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: isProd ? '/vue-chat' : '/',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false
})