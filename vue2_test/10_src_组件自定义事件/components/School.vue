<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>地址:{{ address }}</h2>
    <button @click="sendSchoolName">学校名给App</button>
  </div>
</template>

<script>
export default {
  name: "School",
  props: ["getSchoolName"],
  data() {
    return {
      name: "sgg",
      address: "beijing",
    };
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    },
  },
};
</script>

<style scoped lang="less">
.school {
  background-color: pink;
  padding: 5px;
}
</style>