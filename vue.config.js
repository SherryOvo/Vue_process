// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  publicPath: './', // 执行 npm run build 统一配置路径
  devServer: {
    port: 8081
	
  }
}