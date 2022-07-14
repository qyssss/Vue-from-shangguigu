<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            active-class="acitve"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="acitve"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <!-- 对 News(是组件名字) 组件进行缓存,组件展示在哪里 keep-alive用在哪里 -->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style>
</style>