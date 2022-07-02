<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2 class="a">地址:{{ address }}</h2>
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
};
</script>

<!-- npm i install less-loader -->
<!-- scoped 是局部作用域 -->
<style scoped lang="less">
.school {
  background-color: pink;
  .a {
    font-size: 40px;
  }
}
</style>