<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>地址:{{ address }}</h2>
  </div>
</template>

<script>
// npm i pubsub-js@1.6.0
import pubsub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      name: "sgg",
      address: "beijing",
    };
  },
  mounted() {
    // 对消息的订阅,订阅的名字是hello,有个回调函数接收传来的数据
    // 会传过来 2 个参数,第一个是消息名(hello),第二个是消息内容(666)
    this.pubId = pubsub.subscribe("hello", (msgname, data) => {
      console.log("hello执行", msgname, data);
    });
  },
  beforeDestroy() {
    // 取消订阅,有点像定时器的取消
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style scoped lang="less">
.school {
  background-color: pink;
  padding: 5px;
}
</style>