<template>
  <div class="all" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <div class="showContent">
      <slot name="view"> </slot>
    </div>
    <div class="code" id="showHover">
      <div v-show="show" class="show" :class="showAnimation ? 'notShow' : ''">
        <div class="code_descride">
          <slot name="code_descride"> </slot>
        </div>

        <slot name="code"> </slot>
      </div>

      <div @click="showCode">
        <div class="showCode">
          <div :class="[showname && 'showCodeMove']" class="showcodestatic">
            <i
              :style="{
                transform: show ? 'rotate(180deg)' : '',
              }"
              class="el-icon-caret-bottom"
            ></i>
            <span
              :class="showname && 'el-icon-caret-bottoms'"
              v-show="showname"
              >{{ !show ? "显示代码" : "隐藏代码" }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Home",
  data() {
    return {
      show: false,
      showname: false,
      showAnimation: false,   
    };
  },
  methods: {
    showCode() {
      this.show = !this.show;
      this.showAnimation = !this.showAnimation;
    },
    mouseenter() {
      this.showname = true;
    },
    mouseleave() {
      setTimeout(() => {
        this.showname = false;
      }, 100);
    },
  },
});
</script>

<style scoped>
.all {
  width: 100%;
}
.showContent {
  border: 1px solid rgb(238, 238, 238);
  padding: 20px;
}
.code {
  border: 1px solid rgb(238, 238, 238);
  border-top: 0;
}
.showCode {
  cursor: pointer;

  transition: all 0.3s;
  padding: 6px 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.showCode span {
  margin-left: 20px;
  opacity: 0;
}
.showcodestatic {
  transform: translateX(-8px);
  transition: all 0.3s;
  margin-left: 50%;
}
.showCodeMove {
  transform: translateX(-52px);
  transition: all 0.3s;
}

.el-icon-caret-bottom,
.el-icon-caret-bottoms {
  color: #ddd;
}
#showHover:hover .el-icon-caret-bottom,
#showHover:hover .el-icon-caret-bottoms {
  color: #409eff;
}
.showCode .el-icon-caret-bottoms {
  transition: opacity 0.3s;
  opacity: 1;
}
.showCode:hover {
  background-color: #eef2fc;
}
#showHover .notShow {
  transform: scaleY(0);
  transition: all 0.3s;
}
#showHover .show {
  transform: scaleY(1);
  transition: all 0.3s;
}
.show {
  padding: 8px 10px;
  background-color: #fafafa;
}
.code_descride {
  margin: 10px 20px;
  padding: 20px;
  background: #fff;
}
</style>