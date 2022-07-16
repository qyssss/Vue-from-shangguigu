<template>
  <div class="grandson">
    <h2>I'm GrandSon car: name:{{ car.name }} price:{{ car.price }}</h2>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "Sunzi",
  setup() {
    let car = inject("car");
    return { car };
  },
};
</script>

<style>
.grandson {
  background-color: rgb(168, 249, 39);
  padding: 10px;
}
</style>