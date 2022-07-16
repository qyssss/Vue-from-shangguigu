<template>
  <h2>求和为:{{ sum }}</h2>
  <button @click="sum++">+1</button>
  <hr />
  <h2>信息:{{ msg }}</h2>
  <button @click="msg += '!'">修改</button>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪水:{{ person.job.j1.salary }}</h2>
  <button @click="person.name += '!'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.j1.salary++">薪资++</button>
</template>

<script>
import { watch, ref, reactive, watchEffect } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0);
    let msg = ref("hello");
    let person = reactive({
      name: "qys",
      age: 14,
      job: {
        j1: {
          salary: "2133",
        },
      },
    });
    /* watch(sum, (newValue, oldValue) => {
      console.log("sum变了", newValue, oldValue);
    }); */

    // watchEffect里面用到谁就监视谁,和computed相似,所依赖数据变化就执行
    // computed重视函数的返回值,watchEffect注重过程
    watchEffect(() => {
      const x1 = sum.value;
      const x2 = person.job.j1.salary;
      console.log("回调执行");
    });
    return {
      sum,
      person,
      msg,
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
