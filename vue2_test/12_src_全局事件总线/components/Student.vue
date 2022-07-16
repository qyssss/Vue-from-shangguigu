<template>
  <div class="student">
    <h2>学生名称:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "sqy",
      age: 15,
    };
  },
  methods: {
    sendStudentName(){
      this.$bus.$emit('hello',this.name)
    }
  },
};
</script>

<style scoped>
.student {
  background-color: blue;
  margin-top: 30px;
}
</style>