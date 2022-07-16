<!-- !!!!数据在插槽定义的组件里,用数据生成的结构由插槽的使用者决定,更加灵活 -->
<template>
  <div class="count">
    <h1>求和:{{ sum }}</h1>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">求和为奇数再加</button>
    <button @click="incrementWait">等等加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      num: 1, // 用户选择的数字
      sum: 0, // 当前和
    };
  },
  methods: {
    increment() {
      this.sum += this.num;
    },
    decrement() {
      this.sum -= this.num;
    },
    incrementOdd() {
      if (this.sum % 2 == 0) this.sum += this.num;
    },
    incrementWait() {
      setInterval(() => {
        this.sum += this.num;
      }, 1000);
    },
  },
};
</script>

<style>
button {
  margin-right: 10px;
}
</style>