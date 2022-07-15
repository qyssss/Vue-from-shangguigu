<template>
  <h1>信息</h1>
  <h2>姓名{{ person.name }}</h2>
  <h2>年龄{{ person.age }}</h2>
  <button @click="test1">测试一下Demo组件中的Hello事件</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  props: ["msg", "school"],
  // Vue3 最好声明一下绑定的自定义事件
  emits: ["Hello"],
  setup(props, context) {
    // console.log("setup",props);
    // console.log("setup", context);
    // console.log("setup",context.attrs);
    // console.log("setup", context.emit); 触发自定义事件
    // console.log("setup", context.slots); 插槽

    // 数据
    let person = reactive({
      name: "sqy",
      age: 18,
    });
    // 方法
    function test1() {
      context.emit("hello", 666);
    }
    return {
      person,
      test1,
    };
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
