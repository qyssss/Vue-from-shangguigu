<template>
  <div class="grandson">
    <h2>I'm GrandSon</h2>
    <Dialog />
  </div>
</template>

<script>
import Dialog from "@/components/Dialog";
export default {
  name: "Sunzi",
  components: { Dialog },
};
</script>

<style>
.grandson {
  background-color: rgb(168, 249, 39);
  padding: 10px;
}
</style>