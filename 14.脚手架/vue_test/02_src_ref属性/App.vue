<template>
  <div>
    <!-- ref用来给元素或者子组件注册引用信息 -->
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom">点我输出上方的dom</button>
    <School ref="sch" />
  </div>
</template>

<script>
// 引入 School 组件
import School from "./components/School";
export default {
  name: "App",
  components: { School }, // 写前面点舒服
  data() {
    return {
      msg: "hello",
    };
  },
  methods: {
    showDom() {
      //  用 ref 获取 dom 元素(替代原生dom),ref有点像id
      console.log(this.$refs.title);

      //  这很有用
      //  这是 School 组件的实例对象!!!!(这和id不一样,Dom获取的是Dom结构)
      console.log(this.$refs.sch);
    },
  },
};
</script>

<style>
</style>