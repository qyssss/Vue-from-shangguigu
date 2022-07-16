<template>
  <h2>x.y:{{ x.y }}</h2>
  <button @click="x.y++">x.y++</button>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪水:{{ job.j1.salary }}</h2>
  <button @click="name += '!'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">薪资++</button>
</template>

<script>
import { ref, reactive, toRef, toRefs, shallowReactive, shallowRef } from "vue";
export default {
  name: "Demo",
  setup() {
    // shallowReactive只考虑第一层的响应式
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
    // shallowRef不处理对象类型的响应式
    let x = shallowRef({
      y: 0,
    });
    return {
      x,
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

