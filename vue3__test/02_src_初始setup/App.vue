<template>
  <h1>信息</h1>
  <h2>姓名{{ name }}</h2>
  <h2>年龄{{ age }}</h2>
  <button @click="intro">vue3的介绍</button> <br>
  <button @click="say">vue2的hello</button>
</template>

<script>
// import { h } from "vue";
export default {
  name: "App",
  // 可以向下兼容 vue2 不建议混着使用!! vue3 配置优先 vue2 
  data() {
    return {
      sex: "男",
    };
  },
  methods: {
    say() {
      alert("Hello");
    },
  },
  // 测试一下 setup 不考虑响应式  setup()不能是async函数
  setup() {
    // 数据
    let name = "sqy";
    let age = 18;
    // 方法
    function intro() {
      alert(`I'm${name},${age} years old`);
    }
    // 返回一个对象 用的多
    return {
      name,
      age,
      intro,
    };

    // 返回一个渲染函数(直接渲染到页面) 了解即可
    // return () => h("h1", "尚硅谷");
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
