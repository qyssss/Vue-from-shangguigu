<template>
  <div class="app">
    <h2>I'm App</h2>
    <Erzi />
  </div>
</template>

<script>
import Erzi from "./components/Erzi.vue";
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