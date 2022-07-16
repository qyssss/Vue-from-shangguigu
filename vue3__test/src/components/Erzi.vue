<template>
  <div class="son">
    <h2>I'm Son</h2>
    {{ sum }}
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Erzi",
  async setup() {
    let sum = ref(0);
    // Promise只能在用 suspense 和异步引入的组件中
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(sum);
      }, 1000);
    });
    return await p;
  },
};
</script>

<style>
.son {
  background-color: rgb(42, 46, 240);
  padding: 10px;
}
</style>