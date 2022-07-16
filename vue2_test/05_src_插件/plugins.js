
export default {
    install(Vue, x, y, z) {
        console.log(x, y, z);
        // 全局指令
        Vue.directive('focus', {
            // 指令与元素成功绑定时(一开始)
            bind(el, binding) {
                el.value = binding.value
            },
            // 指令所在元素被插入页面时
            inserted(el, binding) {
                el.focus()
            },
            // 模板被重新解析时
            update(el, binding) {
                el.value = binding.value
            },
        })
        Vue.directive('big', function (el, binding) {
            el.innerText = binding.value * 10
        })

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200,
                }
            }
        })

        // 原型上的属性 vm 和 vc 就都可以用了
        Vue.prototype.hello = () => { alert('hello') }

    },


}