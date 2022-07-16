<template>
  <div class="app">
    <h2>I'm App</h2>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  readonly,
  isRef,
  isReactive,
  isReadonly,
  isProxy,
} from "vue";
export default {
  name: "App",
  setup() {
    let car = reactive({
      name: "baoma",
      price: 123030,
    });
    let sum = ref(0);
    let car2 = readonly(car);
    // 都是 true
    console.log(isRef(sum));
    console.log(isReactive(car));
    console.log(isReadonly(car2));
    console.log(isProxy(car));    
    console.log(isProxy(car2)); // readonly返回的也是Proxy对象
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