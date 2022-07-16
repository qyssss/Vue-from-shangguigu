<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <School />
    <Student />
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";
export default {
  name: "App",
  components: { Student, School },
  data() {
    return {
      msg: "hello",
    };
  },
};
</script>

<style>
.app {
  background-color: #ccc;
  padding: 5px;
}
</style>