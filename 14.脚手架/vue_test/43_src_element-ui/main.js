// 引入 Vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'
// 完整使用 element-ui 
// 引入 element-ui组件库 
// import ElementUI from 'element-ui';
// 引入 element-ui样式
// import 'element-ui/lib/theme-chalk/index.css';
// 关闭生产提示
Vue.config.productionTip = false
// 应用element-ui 
// Vue.use(ElementUI);

// 按需引入 样式不需要自己引入
import { Button, Row, DatePicker } from 'element-ui';
// 应用 element-ui 这里的 Button.name 就是他维护的el-button,可以自己取一个
Vue.component(Button.name, Button);
Vue.component('sqy-row', Row);
Vue.component(DatePicker.name, DatePicker);
// 创建 vm
new Vue({
    render: h => h(App),
}).$mount('#app')