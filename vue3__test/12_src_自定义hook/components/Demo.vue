<template>
  <h2>求和为:{{ sum }}</h2>
  <button @click="sum++">+1</button>
  <hr />
  <h2>鼠标坐标:x:{{ point.x }},y:{{ point.y }}</h2>
</template>

<script>
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
import usePoint from "@/hooks/usePoint";
export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0);
    let point = usePoint();
    return { sum, point };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
