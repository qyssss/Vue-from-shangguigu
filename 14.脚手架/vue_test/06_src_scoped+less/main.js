// 引入 Vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'


// 关闭生产提示
Vue.config.productionTip = false


// 创建 vm
new Vue({
    render: h => h(App)
}).$mount('#app')