const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,  // 关闭语法检查


  /*  方式1 开启代理服务器
   devServer: {
     proxy: 'http://localhost:5000'
   } */
  // 缺点:
  // 如果 public 中已经有了 axios 请求的资源,则代理服务器不会再访问真的服务器
  // 这种方式只能配置一个代理

  // 方式2 开启代理服务器 可以配置多个代理,可以灵活配置是否走代理
  /* devServer: {
    proxy: {
      // 匹配所有以 /atguigu 为前缀的路径
      '/atguigu': {
        target: 'http://localhost:5000',
        // 通过一个正则匹配把加上的前缀去掉
        pathRewrite: { '^/atguigu': '' },
        ws: true, // 用于支持websocket
        changeOrigin: true // 用于欺骗后端自己不是代理服务器 这俩不写也可
      },
      '/demo': {
        target: 'http://localhost:5001',
        // 通过一个正则匹配把加上的前缀去掉
        pathRewrite: { '^/demo': '' },
      },

    }
  } */
})
