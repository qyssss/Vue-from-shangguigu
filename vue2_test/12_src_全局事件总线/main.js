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
    // 在挂载之前往原型上放东西(此时还未数据代理数据监测)
    beforeCreate() {
        // 安装全局事件总线
        // 通过添加在 Vue 的原型对象上保证所有 vc 都可以访问到
        Vue.prototype.$bus = this // this就是Vue组件实例对象才能访问 .$on 等方法
    }
}).$mount('#app')

