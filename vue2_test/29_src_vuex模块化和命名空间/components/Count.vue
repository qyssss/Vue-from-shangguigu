<!-- !!!!数据在插槽定义的组件里,用数据生成的结构由插槽的使用者决定,更加灵活 -->
<template>
  <div class="count">
    <h1>求和:{{ sum }}</h1>
    <h1>求和放大10倍:{{ bigSum }}</h1>
    <h1>我在{{ school }}，学习{{ subject }}</h1>
    <h3 style="color: red">Person组件总人数是{{ personList.length }}</h3>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="incrementOdd(num)">求和为奇数再加</button>
    <button @click="incrementWait(num)">等等加</button>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      num: 1, // 用户选择的数字
    };
  },
  methods: {
    // 借助 mapMutations 生成对应的方法,方法中会调用 commit 去联系 mutations(对象写法)
    // !!!这里的参数要在 html 按钮中绑定的事件传入 @click="increment(num)",否则是默认事件
    ...mapMutations("countAbout", { increment: "JIA", decrement: "JIAN" }),

    // 数组写法 帮助调用 commit
    // ...mapMutations(["JIA", "JIAN"]),

    // mapActions 对象写法 帮助调用 dispatch
    ...mapActions("countAbout", {
      incrementOdd: "jiaOdd",
      incrementWait: "jiaWait",
    }),

    // 数组写法
    // ...mapActions(["jiaOdd", "jiaWait"]),
  },
  computed: {
    /* 借助mapState生成计算属性,从state中读取数据(对象写法),用拓展运算符展开对象得到函数
    让上面可以简写,正常要写 $store.state.sum */
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),

    // 这里不能用对象简写形式(sum如果是变量才能简写),这是数组写法
    ...mapState("countAbout", ["sum", "school", "subject"]),
    ...mapState("personAbout", ["personList"]),

    // mapGetters 同理,正常写 $store.getters.bigSum
    ...mapGetters("countAbout", ["bigSum"]),
  },
};
</script>

<style>
button {
  margin-right: 10px;
}
</style>