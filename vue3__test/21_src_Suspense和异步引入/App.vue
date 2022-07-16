<template>
  <div class="app">
    <h2>I'm App</h2>
    <!-- default加载默认的东西,fallback是网速慢时加载出的内容 -->
    <Suspense>
      <template v-slot:default>
        <Erzi />
      </template>
      <template v-slot:fallback>
        <h2>加载中</h2>
      </template>
    </Suspense>
    
  </div>
</template>

<script>
// import Erzi from "./components/Erzi.vue"; // 静态引入
//  异步引入    App先出来,Erzi后出来
import { defineAsyncComponent } from "vue";
const Erzi = defineAsyncComponent(() => import("./components/Erzi"));
export default {
  name: "App",
  components: { Erzi },
};
</script>

<style>
.app {
  background-color: #ccc;
  padding: 10px;
}
</style>