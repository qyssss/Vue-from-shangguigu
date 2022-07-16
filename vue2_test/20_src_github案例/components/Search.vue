<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;<button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      // 请求前更新 List 数据
      this.$bus.$emit("updateListsData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          // console.log("成功", response.data.items);
          // 请求成功后更新 List 数据
          this.$bus.$emit("updateListData", {
            isFirst: false,
            isLoading: false,
            errMsg: "",
            users: response.data.items,
          });
        },
        // 请求失败后更新 List 数据
        (error) => {
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: error.message,
            users: [],
          });
        }
      );
    },
  },
};
</script>

<style>
</style>