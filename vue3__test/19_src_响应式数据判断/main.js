// 引入的不再是 Vue 构造函数 是createApp这个工厂函数
import { createApp } from 'vue'
import App from './App.vue'
// createApp(App).mount('#app')  
// 创建实例对象-app(类似于 vue2 中的 vm,比 vm 更轻)
const app = createApp(App)

app.mount('#app')


// Vue2写法 在3中不兼容
/* import Vue from 'vue'
const vm = new Vue({
    render: h => h(App)
})
vm.$mount('#app') */
