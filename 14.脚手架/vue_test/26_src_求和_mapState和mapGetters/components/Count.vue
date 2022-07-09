<!-- !!!!数据在插槽定义的组件里,用数据生成的结构由插槽的使用者决定,更加灵活 -->
<template>
  <div class="count">
    <h1>求和:{{ sum }}</h1>
    <h1>求和放大10倍:{{ bigSum }}</h1>
    <h1>我在{{ school }}，学习{{ subject }}</h1>
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
import { mapGetters, mapState } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      num: 1, // 用户选择的数字
    };
  },
  methods: {
    // 不走actions部分时可以直接commit给mutations
    increment() {
      this.$store.commit("JIA", this.num);
    },
    decrement() {
      this.$store.commit("JIAN", this.num);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.num);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.num);
    },
  },
  computed: {
    // 自己写的话写计算属性,否则通过vuex中的mapState和mapGetters生成这个自己写的
    /*  sum() {
      return this.$store.state.sum;
    }, */

    /* 借助mapState生成计算属性,从state中读取数据(对象写法),用拓展运算符展开对象得到函数
    让上面可以简写,正常要写 $store.state.sum */
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),

    // 这里不能用对象简写形式(sum如果是变量才能简写),这是数组写法
    ...mapState(["sum", "school", "subject"]),

    // mapGetters 同理,正常写 $store.getters.bigSum
    ...mapGetters(["bigSum"]),
  },
};
</script>

<style>
button {
  margin-right: 10px;
}
</style>