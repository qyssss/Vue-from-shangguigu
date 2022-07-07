<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽,等着组件使用者填充这个部分 -->
    <slot name="center">显示失败</slot>
    <slot name="footer">显示失败</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
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