<template>
  <Demo @Hello="showHello" msg="hello" school="hd">
    <template v-slot:qwe>
      <span>sqyyyy</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "@/components/Demo";
export default {
  name: "App",
  components: { Demo },
  setup() {
    function showHello(value) {
      console.log(`Hello!被触发了,参数${value}`);
    }
    return {
      showHello,
    };
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
