<template>
  <ul>
    <li :style="{ opacity }">Hellooooo</li>
    <li>news001<input type="text" /></li>
    <li>news002<input type="text" /></li>
    <li>news003<input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  /*  beforeDestroy() {
    clearInterval(this.timer);
  },
  mounted() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  }, */

  // 路由组件独有的2个生命周期钩子,激活和失活,
  // 因为keep-alive让组件没有销毁,为了暂停定时器需要使用这个
  activated() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>