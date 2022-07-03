<template>
  <div class="app">
    <h1>{{ msg }} 学生姓名是:{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现 子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <hr />
    <!-- 通过父组件给子组件绑定一个自定义事件实现 子给父传数据 -->
    <!-- 事件给谁绑的找谁触发,通过$emit触发 -->
    <Student @atguigu="getStudentName" @demo="m1" />

    <!-- 配合this.$refs.student.$on,Vue3已删除 -->
    <!-- <Student ref="student" /> -->
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
      studentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("App收到学校名", name);
    },
    getStudentName(name, ...params) {
      console.log("App收到学生名", name, params);
      this.studentName = name;
    },
    m1() {
      console.log("demo触发");
    },
  },
  // 在 Vue3 中已删除
  /* mounted() {
    this.$refs.student.$on("atguigu", this.getStudentName);
  }, */
};
</script>

<style>
.app {
  background-color: #ccc;
  padding: 5px;
}
</style>