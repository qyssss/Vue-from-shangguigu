<template>
  <div id="app">
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudents() {
      // 因为设置了代理服务器(vue.config.js),找本地端口要数据
      axios.get("http://localhost:8080/atguigu/students").then(
        (response) => {
          console.log("请求成功", response.data);
        },
        (error) => {
          console.log("失败", error.message);
        }
      );
    },
    getCars() {
      axios.get("http://localhost:8080/demo/cars").then(
        (response) => {
          console.log("请求成功", response.data);
        },
        (error) => {
          console.log("失败", error.message);
        }
      );
    },
  },
};
</script>
