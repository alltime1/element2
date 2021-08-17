<template>
  <div>
    <el-menu
       router
      default-active="2"
      class="el-menu-vertical-demo"

    >
      <el-menu-item-group>
        <template slot="title">Form</template>
        <el-menu-item index="/home/radio">Radio 单选框</el-menu-item>
        <el-menu-item index="/home/checkbox">Checkbox 多选框</el-menu-item>
        <el-menu-item index="1-3">Input 输入框</el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Home",
});
</script>

<style>
</style>