<template>
  <div class="all">
    <div class="showContent">
      <slot name="view"> </slot>
    </div>
    <div class="code">
      <div v-show="show">
        <slot name="code"> </slot>
      </div>

      <div class="showCode">
        <i class="el-icon-caret-bottom"></i>
        <span class="el-icon-caret-bottoms" @click="showCode">显示代码</span>
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
    };
  },
  methods: {
    showCode() {
      this.show = !this.show;
    },
  },
});
</script>

<style>
.showContent {
  border: 1px solid rgb(238, 238, 238);
  padding: 20px;
}
.code {
  border: 1px solid rgb(238, 238, 238);
  padding: 6px 20px;
  border-top: 0;
}
.showCode {
  cursor: pointer;
  margin-left: 50%;
  transform: translateX(-8px);
}
.showCode:hover .el-icon-caret-bottom{
  transition: all 0.2s;
  color: #409eff;
}
.showCode:hover .el-icon-caret-bottoms {
    opacity: 1;
    transition: all 0.3s;
  color: #409eff;
}
.showCode span{
  margin-left: 20px;
}
.el-icon-caret-bottom,
.el-icon-caret-bottoms {
  transition: all 0.3s;
  color: #ddd;
}
.el-icon-caret-bottoms {
  opacity: 0;

}
.all:hover .showCode {
    transform: translateX(-42px);
    transition: all .3s;
}
.all:hover .el-icon-caret-bottoms{
  opacity: 1;
}
.code:hover .el-icon-caret-bottoms,.code:hover .el-icon-caret-bottom{
  color: #409eff;
}
</style>