<template>
  <h2>sum:{{ sum }}</h2>
  <button @click="sum++">++</button>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪水:{{ job.j1.salary }}</h2>
  <button @click="name += '!'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">薪资++</button>
</template>

<script>
import { ref, reactive, toRefs, readonly, shallowReadonly } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let person = reactive({
      name: "qys",
      age: 14,
      job: {
        j1: {
          salary: 2000,
        },
      },
    });
    // 不让修改
    // person = readonly(person);
    // shallowReadonly只有第一层只读
    person = shallowReadonly(person);
    let sum = ref(0);
    return {
      sum,
      ...toRefs(person),
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

