<template>
  <h2>sum:{{ sum }}</h2>
  <button @click="sum++">++</button>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪水:{{ job.j1.salary }}</h2>
  <h2>car:{{ person.car }}</h2>
  <button @click="name += '!'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">薪资++</button>
  <button @click="showRawPerson">输出原始person</button>
  <button @click="addCar">加车</button>
  <button @click="person.car.name += '!'">换车</button>
  <button @click="changePrice">++</button>
</template>

<script>
import { ref, reactive, toRefs, toRaw, markRaw } from "vue";
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
      car: {},
    });
    let sum = ref(0);
    function showRawPerson() {
      // toRaw只能变reactive定义的响应式对象,变回原本的样子
      const p = toRaw(person);
      console.log(p);
    }
    // 给响应式对象添加的数据都是响应式的
    function addCar() {
      let car = { name: "baoma", price: 4000 };
      // markRaw 让 car 永远不会变成响应式的,数据实际上改了,但是不会有响应式
      person.car = markRaw(car);
    }
    function changePrice(person) {
      person.car.price++;
      console.log(person.car.price);
    }
    return {
      sum,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar,
      changePrice,
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

