<template>
  <div class="app">
    <h2>I'm App car: name:{{ name }}, price:{{ price }}</h2>
    <Erzi />
  </div>
</template>

<script>
import { reactive, toRefs, provide } from "vue";
import Erzi from "./components/Erzi.vue";
export default {
  name: "App",
  components: { Erzi },
  setup() {
    let car = reactive({
      name: "baoma",
      price: 123030,
    });
    // 给自己的后代组件传递数据 多用于祖孙传值
    // 第一个参数取名字,第二个参数指定传什么
    provide("car", car);
    return { ...toRefs(car) };
  },
};
</script>

<style>
.app {
  background-color: #ccc;
  padding: 10px;
}
</style>