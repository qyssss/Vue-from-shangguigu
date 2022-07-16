<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件求和为{{ sum }}</h3>
    <h3>列表中第一个人名字是 {{ firstPersonName }}</h3>
    <input type="text" placeholder="输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加个随机的人</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList;
    },
    sum() {
      return this.$store.state.countAbout.sum;
    },
    firstPersonName() {
      return this.$store.getters["peronAbout / firstPersonName"];
    },
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      // 如果不用 mapMutations 需要作用域就用这种写法 personAbout/ADD_PERSON
      this.$store.commit("personAbout/ADD_PERSON", personObj);
    },
    addWang() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("personAbout/addPersonWang", personObj);
    },
    addPersonServer(){
      this.$store.dispatch('personAbout/addPersonServer')
    }
  },
  mounted() {
    console.log(this.$store);
  },
};
</script>

<style>
</style>