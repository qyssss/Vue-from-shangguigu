<template>
  <h1>信息</h1>
  <h2>姓名{{ name }}</h2>
  <h2>年龄{{ age }}</h2>
  <h3>工作种类:{{ job.type }}</h3>
  <h3>工作薪水:{{ job.salary }}</h3>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    // 数据  ref 把普通数据变成响应式的引用对象(RefImpl)
    // ref 处理基本数据用的getter,setter(Object.defineProperty),
    // 处理对象转化为Proxy(封装在reactive)
    let name = ref("sqy");
    let age = ref(18);
    let job = ref({
      type: "student",
      salary: "10k",
    });
    // 方法
    function changeInfo() {
      // ref 生成了一个引用对象,用value访问值,在模板中不要用.value,vue会自动做
      name.value = "qys";
      age.value = 88;
      // 对象中内部也配置了响应式,但是不需要.value
      job.value.type = "clerk";
    }
    return {
      name,
      age,
      changeInfo,
      job,
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
