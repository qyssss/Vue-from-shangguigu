<template>
  <div class="school">
    <h2>学生名称:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <input type="text" v-focus:value="name" />
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "sqy",
      age: 15,
    };
  },
};
</script>

<style>
</style>