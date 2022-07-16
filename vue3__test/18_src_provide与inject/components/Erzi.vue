<template>
  <div class="son">
    <h2>I'm Son {{ x.name }}</h2>
    <Sunzi />
  </div>
</template>

<script>
// 父子之间一般不用 inject
import { inject } from "vue";
import Sunzi from "./Sunzi.vue";
export default {
  name: "Erzi",
  components: { Sunzi },
  setup() {
    let x = inject("car");
    return { x };
  },
};
</script>

<style>
.son {
  background-color: rgb(42, 46, 240);
  padding: 10px;
}
</style>