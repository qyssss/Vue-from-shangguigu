<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- appear控制一开始也执行一下动画 -->
    <transition name="hello" appear>
      <h1 v-show="isShow">Hello</h1>
    </transition>
  </div>
</template>

<script>
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
/* 默认用 v-enter-active 有name就是name-enter-active */
.hello-enter-active {
  animation: atguigu 1s linear;
}
.hello-leave-active {
  animation: atguigu 1s linear reverse;
}
@keyframes atguigu {
  from {
    transform: translateX(-200px);
  }
  to {
    transform: translateX(0px);
  }
}
</style>