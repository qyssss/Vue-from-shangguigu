<template>
  <h2>求和为:{{ sum }}</h2>
  <button @click="sum++">+1</button>
  <hr />
  <!-- <h2>信息:{{ msg }}</h2>
  <button @click="msg += '!'">修改</button> -->
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
    // let msg = ref("hello");
    let person = reactive({
      name: "qys",
      age: 14,
      job: {
        j1: {
          salary: "2133",
        },
      },
    });
    // 1.监视ref所定义的一个响应式数据
    watch(
      sum,
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      },
      { immediate: true }
    );

    // 2.监视ref所定义的多个响应式数据 newValue会是个数组
    /* watch([sum,msg], (newValue, oldValue) => {
      console.log(newValue, oldValue);
    }); */

    // 3.监视 reactive 定义的响应式数据,
    // 重点 a.注意此处无法正确获得oldValue
    // 重点 b.强制开启了深度监视,deep:false无效
    /* watch(person, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    }); */

    // 4.监视 reactive 定义的响应式数据某个属性 需要写成函数返回值 ()=>person.age
    /* watch(()=>person.age, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    }); */

    // 5.监视 reactive 定义的响应式数据多个属性(基本类型)
    /* watch([()=>person.age,()=>person.name], (newValue, oldValue) => {
      console.log(newValue, oldValue);
    }); */

    // 特殊情况 这个时候如果要监视内部要开深度监视(监视reactive中"对象"的某个属性,deep有效)
    /* watch(()=>person.job, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    },{deep:true});  */

    return {
      sum,
      person,
      // msg,
    };
  },
  // Vue2
  /* watch: {
    sum(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  }, */
  /* watch: {
    immediate:true,
    deep:true,
    sum: {
      handler(newValue, oldValue) {
        console.log(newValue, oldValue);
      },
    },
  }, */
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
