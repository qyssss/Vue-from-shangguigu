const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,  // 关闭语法检查
  // 开启代理服务器
  devServer: {
    proxy: 'http://localhost:5000'
  }
  // 缺点:
  // 如果 public 中已经有了 axios 请求的资源,则代理服务器不会再访问真的服务器
  // 这种方式只能配置一个代理
})
