// 引入 Vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'

// 全局使用混合
import { mixin, mixin2 } from './mixin'
Vue.mixin(mixin)
Vue.mixin(mixin2)

// 关闭生产提示
Vue.config.productionTip = false
// 创建 vm
new Vue({
    render: h => h(App)
}).$mount('#app')