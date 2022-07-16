<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪水:{{ job.j1.salary }}</h2>
  <button @click="name += '!'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">薪资++</button>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let person = reactive({
      name: "qys",
      age: 14,
      job: {
        j1: {
          salary: "2133",
        },
      },
    });
    /*  const name1 = person.name;
    console.log(name1);
    const name2 = toRef(person, "name");
    console.log(name2); */

    // toRefs直接把对象里的所有属性都变成 ref 但是只展开第一层
    // const x = toRefs(person);

    // toRef 第一个参数传对象即可,可以返回一个Ref对象,是一个引用的效果,不是复制
    // 如果直接用 name:ref(person.name),如果修改改的并不是原来的person的属性,因为是创建了新的ref
    return {
      /* name: toRef(person, "name"),
      salary: toRef(person.job.j1, "salary"),
      age: toRef(person, "age"), */
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

