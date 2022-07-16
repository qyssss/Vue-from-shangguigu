<template>
  <input type="text" v-model="keyWord" id="" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: "App",
  setup() {
    // 自定义一个 ref
    function myRef(value) {
      // 用 timer 做一个防抖效果
      let timer;
      // 返回一个自定义的 ref
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`有人读取了myRef中的${value}`);
            track(); // 2.通知 Vue 追踪一下 value 的改变(否则不会return新改的value)
            return value;
          },
          set(newValue) {
            console.log(`有人修改了myRef中的${value}`);
            clearTimeout(timer);
            // 把改了的新值传给value
            timer = setTimeout(() => {
              value = newValue;
              trigger(); // 1.trigger 通知vue重新解析模板
            }, 500);
          },
        };
      });
    }
    // let keyWord = ref("hello"); // vue的ref
    let keyWord = myRef("hello");
    return { keyWord };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
