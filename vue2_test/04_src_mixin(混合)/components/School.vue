<template>
  <div class="school">
    <h2 @click="showName">学校名称:{{ name }}</h2>
    <h2>地址:{{ address }}</h2>
  </div>
</template>

<script>
// 引入一个混合
// import { mixin, mixin2 } from "../mixin";
export default {
  name: "School",
  data() {
    return {
      name: "sgg",
      address: "beijing",
    };
  },
  // 数据方法冲突优先以自己这边内容为主,再混合上mixins,
  // 如果是生命周期钩子是都要(混合的在前,自己的在后)
  // mixins: [mixin, mixin2],
};
</script>

<style>
</style>