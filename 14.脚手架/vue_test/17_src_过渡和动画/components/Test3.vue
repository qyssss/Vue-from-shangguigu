<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- appear控制一开始也执行一下动画 -->
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backInUp"
    >
      <h1 v-show="!isShow" key="1">Hello</h1>
      <h1 v-show="isShow" key="2">Sqqqqy</h1>
    </transition-group>
  </div>
</template>

<script>
// npm install animate.css 第三方动画库
import "animate.css";
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: pink;
}
</style>