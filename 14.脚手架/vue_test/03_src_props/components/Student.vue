<template>
  <div class="school">
    <h1>{{ msg }}</h1>
    <h2>学生名称:{{ name }}</h2>
    <h2>性别:{{ sex }}</h2>
    <h2>年龄:{{ myAge + 1 }}</h2>
    <button @click="updateAge">修改年龄</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是caib",
      // 为了实现对传进来的数据修改
      myAge: this.age,
    };
  },
  methods: {
    updateAge() {
      this.myAge++;
    },
  },
  // 外部传进来的(简单接收),不能修改(要修改的情况需要在data中用别名接收)
  props: ["name", "sex", "age"],

  // 限制类型接收
  /* props: {
    name: String,
    age: Number,
    sex: String,
  }, */

  // 类型限制+默认值指定+必要性限制
  /* props: {
    name: {
      type: String, // name 类型
      required: true, // 名字必须传
    },
    age: {
      type: Number,
      default: 180, // 默认值
    },
    sex: {
      type: String,
      required: true,
    },
  }, */
};
</script>

<style>
</style>