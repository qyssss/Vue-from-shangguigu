// 引入 Vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'

// 引入插件
import plugins from './plugins'

// 关闭生产提示
Vue.config.productionTip = false

// 应用插件
Vue.use(plugins,1,2,3)

// 创建 vm
new Vue({
    render: h => h(App)
}).$mount('#app')