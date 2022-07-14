<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  // 这里强调进入时 和 离开时, 与前置后置路由守卫不一样！！！！！
  // 通过路由规则进入该组件被调用
  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuth) {
      // 判断是否需要权限
      if (localStorage.getItem("school") === "atguigu") {
        next();
      } else {
        alert("学校名错误");
      }
    } else {
      next();
    }
  },
  // 通过路由规则离开该组件被调用 用的较少
  beforeRouteLeave(to, from, next) {
    next();
  },
};
</script>
