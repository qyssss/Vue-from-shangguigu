<template>
  <div class="container">
    <Category title="游戏">
      <!-- 写一个template接收数据 -->
      <template slot-scope="cateData">
        <ul>
          <li v-for="(game, index) in cateData.games" :key="index">
            {{ game }}
          </li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <!-- 写一个template接收数据 -->
      <template slot-scope="cateData">
        <ol>
          <li v-for="(game, index) in cateData.games" :key="index">
            {{ game }}
          </li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <!-- es6 解构赋值 -->
      <template slot-scope="{ games }">
        <h4 v-for="(game, index) in games" :key="index">{{ game }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: { Category },
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

