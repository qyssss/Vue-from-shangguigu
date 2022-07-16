<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>地址:{{ address }}</h2>
    <button @click="test">点我测试hello</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "sgg",
      address: "beijing",
    };
  },
  methods: {
    test() {
      this.hello();
    },
  },
};
</script>

<style>
</style>