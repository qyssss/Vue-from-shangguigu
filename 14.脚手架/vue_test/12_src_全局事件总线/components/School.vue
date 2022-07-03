<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>地址:{{ address }}</h2>
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
  mounted() {
    this.$bus.$on("hello", (data) => {
      console.log("我是School,数据:", data);
    });
  },
  beforeDestroy() {
    // 最好在销毁前解绑一下自定义事件
    this.$bus.$off("hello");
  },
};
</script>

<style scoped lang="less">
.school {
  background-color: pink;
  padding: 5px;
}
</style>