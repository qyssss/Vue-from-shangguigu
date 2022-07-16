<template>
  <div class="student">
    <h2>学生名称:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
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
      // 发布消息给订阅方,把数据传给订阅方
      pubsub.publish('hello',666)
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