<template>
  <div>
    <!-- 这是把数据传递到 Student -->
    <!-- 加个冒号让内容以js表达式运行(变成number类型) -->
    <Student name="李四" sex="女" :age="18" />
    <Student name="王五" sex="男" :age="99" />
  </div>
</template>

<script>
// 引入 School 组件
import Student from "./components/Student";
export default {
  name: "App",
  components: { Student },
};
</script>

<style>
</style>