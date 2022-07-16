<template>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @change="handleCheck(todo.id)"
        />
        <!-- 如下代码也可实现功能,但是修改了props(在对象中改不会报错),不是特别推荐 -->
        <!-- <input type="checkbox" v-model="todo.done"> -->
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="handleBlur(todo, $event)"
          ref="inputTitle"
        />
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">
        删除
      </button>
      <button
        v-show="!todo.isEdit"
        class="btn btn-edit"
        @click="handleEdit(todo)"
      >
        编辑
      </button>
    </li>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "MyItem",
  // 声明接收 todo 对象
  props: ["todo"],
  methods: {
    // 勾选或取消勾选
    handleCheck(id) {
      // 通知 App 组件把对应的 todo 对象 done 值取反
      this.$bus.$emit("checkTodo", id);
    },
    handleDelete(id) {
      if (confirm("确定删吗")) {
        // this.$bus.$emit("deleteTodo", id);
        pubsub.publish("deleteTodo", id);
      }
    },
    // 编辑
    handleEdit(todo) {
      // 如果 todo 身上已有 isEdit 就不需要在添加
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        // 添加响应式的属性要用 this.$set
        this.$set(todo, "isEdit", true);
      }
      // 在下一次 DOM 更新结束后执行其指定的回调(需要解析模板后再执行这个)
      this.$nextTick(() => {
        this.$refs.inputTitle.focus();
      });
      // 用定时器和上面的效果类似
      /* setInterval(() => {
        this.$refs.inputTitle.focus();
      }); */
    },
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("输入不能为空");
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ccc;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
li:hover button {
  display: block;
}

</style>