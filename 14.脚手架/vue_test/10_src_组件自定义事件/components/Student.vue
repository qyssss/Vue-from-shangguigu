<template>
  <div class="student">
    <h2>学生名称:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <button @click="sendStudentName">学生名给App</button>
    <button @click="unbind">解绑 atguigu 事件</button>
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
    sendStudentName() {
      // $emit 是用于触发 Student 组件实例身上的 atguigu 事件
      // 第二个参数把值传给这个事件
      this.$emit("atguigu", this.name, 555, 666, 777);
      // this.$emit("demo");
    },
    unbind() {
      this.$off("atguigu"); // 解绑一个自定义事件
      // this.$off(["atguigu", "demo"]); // 解绑多个
      // this.$off() // 解绑所有
    },
  },
};
</script>

<style scoped>
.student {
  background-color: blue;
  margin-top: 30px;
}
</style>