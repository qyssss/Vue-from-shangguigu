// 引入 Vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'


// 关闭生产提示
Vue.config.productionTip = false

// const Demo = Vue.extend({}) // 创建一个组件
// const d = new Demo() // new 组件实例对象(vc)

// 创建 vm
new Vue({
    render: h => h(App),
    }
).$mount('#app')

