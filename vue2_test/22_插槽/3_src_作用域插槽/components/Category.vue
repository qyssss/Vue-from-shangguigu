<!-- !!!!数据在插槽定义的组件里,用数据生成的结构由插槽的使用者决定,更加灵活 -->
<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽,等着组件使用者填充这个部分 -->
    <!-- 可以把 games 数据传到使用插槽的地方,要用 <template scope="">接收 -->
    <slot :games="games" msg="hello">显示失败</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    };
  },
};
</script>

<style>
.category {
  background-color: pink;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: yellow;
}
img {
  width: 100%;
}
</style>