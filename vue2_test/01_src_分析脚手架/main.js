/* 
该文件是整个项目入口文件
*/
// 引入 Vue (这是个运行版Vue,完整是vue/dist/vue)
// 使用运行版 Vue 体积更小,打包后不需要模板解析器
import Vue from 'vue'
// 引入 App 所有组件的父组件
import App from './App.vue'

// 关闭 Vue 的生产提示
Vue.config.productionTip = false

new Vue({
  // 将 App 组件放入容器中
  render: h => h(App),
  // createElement是个创建元素的函数(因为运行版Vue里不能解析模板),这是完整写法
  /* render(createElement) {
    return createElement('h1', 'hello')
  } */

  // 这样的写法需要完整的 Vue
  /* template: `<App></App>`,
  components: { App }, */

}).$mount('#app')
