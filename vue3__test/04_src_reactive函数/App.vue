<template>
  <h1>信息</h1>
  <h2>姓名{{ person.name }}</h2>
  <h2>年龄{{ person.age }}</h2>
  <h3>工作种类:{{ person.job.type }}</h3>
  <h3>工作薪水:{{ person.job.salary }}</h3>
  <h3>爱好:{{ person.hobby }}</h3>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    // 数据  ref 把普通数据变成响应式的引用对象(RefImpl)
    // ref 处理基本数据用的getter,setter(Object.defineProperty),
    // 处理对象转化为Proxy(封装在reactive)
    /*  let name = ref("sqy");
    let age = ref(18);
    // reactive 只能用于对象和数组类型,直接把对象变成Proxy类型
    let job = reactive({
      type: "student",
      salary: "10k",
    });
    let hobby = reactive(['dance','sing','dream']) */

    // 数据
    let person = reactive({
      name: "sqy",
      age: 18,
      job: {
        type: "student",
        salary: "10k",
      },
      hobby: ["dance", "sing", "dream"],
    });
    // 方法
    function changeInfo() {
      // ref 生成了一个引用对象,用value访问值,在模板中不要用.value,vue会自动做
      person.name = "qys";
      person.age = 88;
      // 对象中内部也配置了响应式,但是不需要.value
      person.job.type = "clerk";
      person.job.salary = "28k";
      // vue3中可以直接修改,vue2需要Vue.$set
      person.hobby[0] = "hello";
    }
    return {
      person,
      changeInfo,
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
