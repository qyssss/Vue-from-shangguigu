<template>
  <h1>信息</h1>
  姓：<input type="text" v-model="person.firstName" /> 名：<input
    type="text"
    v-model="person.lastName"
  />
  <span>全名:{{ person.fullName }}</span>
  <input type="text" v-model="person.fullName" />
</template>

<script>
import { computed, reactive } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let person = reactive({
      firstName: "sqy",
      lastName: "yyyyyy",
    });
    // 计算属性(简写,不考虑修改)
    /* person.fullName = computed(() => {
      return person.firstName + " " + person.lastName;
    }); */
    //  完整写法(考虑读和写)
    person.fullName = computed({
      get() {
        return person.firstName + " " + person.lastName;
      },
      set(value) {
        const nameArr = value.split(" ");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });
    return {
      person,
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
