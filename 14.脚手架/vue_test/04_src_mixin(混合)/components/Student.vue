<template>
  <div class="school">
    <h2 @click="showName">学生名称:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
  </div>
</template>

<script>
// import { mixin } from "../mixin";

export default {
  name: "Student",
  data() {
    return {
      name: "sqy",
      age: 15,
    };
  },
  // mixins: [mixin], 
};
</script>

<style>
</style>