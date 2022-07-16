module.exports = {
  // 按照 element-ui 文档修改配置
  presets: [
    '@vue/cli-plugin-babel/preset',
    // ["es2015", { "modules": false }] 这版本有问题
    ["@babel/preset-env", { "modules": false }]

  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
