<template>
  <!-- 写结构 -->
  <div id="demo">
    <h2>学校名称:{{ stuName }}</h2>
    <h2>年龄:{{ age }}</h2>
  </div>
</template>

<script>
// 交互
export default {
  name: "Student",
  data() {
    return {
      stuName: "sqy",
      age: 18,
    };
  },
};
</script>

<style>
</style>

