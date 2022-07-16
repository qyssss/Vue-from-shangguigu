<template>
  <div class="son">
    <h2>I'm Son </h2>
    <Sunzi />
  </div>
</template>

<script>
import Sunzi from "./Sunzi.vue";
export default {
  name: "Erzi",
  components: { Sunzi },
};
</script>

<style>
.son {
  background-color: rgb(42, 46, 240);
  padding: 10px;
}
</style>