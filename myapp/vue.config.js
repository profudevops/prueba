const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports ={
  publicPath: process.env.APP_BASE_PATH,
}