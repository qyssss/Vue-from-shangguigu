// 从这儿开始(俗称入口文件)
import App from './App.vue'

new Vue({
    template:`<App></App>`,
    components: { App },
}).$mount('#root')