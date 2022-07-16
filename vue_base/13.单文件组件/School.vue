<template>
  <!-- 写结构 -->
  <div id="demo">
    <h2>学校名称:{{ schoolName }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
// 交互
export default {
  name: "School",
  data() {
    return {
      schoolName: "sgg",
      address: "beijing",
    };
  },
};
</script>

<style>
/* 样式 */
#demo {
  background-color: pink;
}
</style>

