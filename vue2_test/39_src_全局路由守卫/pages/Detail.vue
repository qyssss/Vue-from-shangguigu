<template>
  <ul>
    <!-- 接收路由处理后的Message传来的参数 -->
    <li>消息编号 {{ id }}</li>
    <li>消息标题 {{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  // 接收路由传来的参数
  props: ["id","title"],
  mounted() {
    // console.log(this.$route);
  },
};
</script>
