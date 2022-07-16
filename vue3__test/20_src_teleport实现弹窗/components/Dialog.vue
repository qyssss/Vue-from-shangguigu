<template>
  <div>
    <button @click="isShow = true">点我弹出</button>
    <!-- teleport指定组件出现的位置 把一个内部的组件拎出来-->
    <teleport to="body">
      <div v-if="isShow" class="mask">
        <div class="dialog">
          <h3>弹窗！！</h3>
          <button @click="isShow = false">关闭！</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Dialog",
  setup() {
    let isShow = ref(false);
    return { isShow };
  },
};
</script>

<style>
/* 写个全屏遮罩层 */
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
/* 让弹窗在中间出现 */
.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 300px;
  height: 300px;
  background-color: pink;
}
</style>