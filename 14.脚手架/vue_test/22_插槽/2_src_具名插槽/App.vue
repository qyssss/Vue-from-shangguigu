<template>
  <div class="container">
    <Category title="美食">
      <img
        slot="center"
        src="https://lmg.jj20.com/up/allimg/tp03/1Z922164FBG0-0-lp.jpg"
        alt="111"
      />
      <a href="http://baidu.coms" slot="footer">点我</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://google.com">谷歌</a>
        <a href="http://google.com">谷歌</a>
      </div>
    </Category>
    <Category title="电影">
      <video
        slot="center"
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        controls
      ></video>
      <!-- 这是新写法只能在 template 用,不建议,写 slot="footer" -->
      <template v-slot:footer>
        <div class="foot">
          <a href="http://google.com">经典</a>
          <a href="http://google.com">热么</a>
        </div>
        <h4>welcome</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《尚硅谷》"],
    };
  },
};
</script>
<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
video {
  width: 100%;
}
h4 {
  text-align: center;
}
</style>

