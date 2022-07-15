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
import { watch, ref, reactive } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0);
    let msg = ref("hello");
    let person = ref({
      name: "qys",
      age: 14,
      job: {
        j1: {
          salary: "2133",
        },
      },
    });
    // 这边不需要 sum.value,因为监视的是对象,不是值
    watch(sum, (newValue, oldValue) => {
      console.log("sum变了", newValue, oldValue);
    });

    // person.value才是Proxy对象,监测的实际上是reactive定义的
    watch(person.value, (newValue, oldValue) => {
      console.log("person变了", newValue, oldValue);
    }); // 或者写 {deep: true}
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
