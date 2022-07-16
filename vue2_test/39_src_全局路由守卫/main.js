// 引入 Vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'
// 引入 vueRouter
import vueRouter from 'vue-router'
// 引入路由器
import router from '@/router/index'
// 关闭生产提示
Vue.config.productionTip = false
// 应用插件
Vue.use(vueRouter)
// 创建 vm
new Vue({
    render: h => h(App),
    router,
}).$mount('#app')