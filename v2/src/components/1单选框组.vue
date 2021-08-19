<template>
  <div>
    <el-radio-group :size="size" :text-color="textColor" :fill="fill" v-model="radioModel">
      <el-radio
        v-show="name == 'el-radio'"
        v-for="(item, index) in options"
        :disabled="item.disabled"
        :key="index"
        :label="item.label"
        >{{ item.text }}</el-radio
      >
      <el-radio-button
        v-show="name == 'button'"
        v-for="(item, index) in options"
        :disabled="item.disabled"
        :key="'button' + index"
        :label="item.label"
        >{{ item.text }}</el-radio-button
      >
    </el-radio-group>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: { 
    size:{
        type: String,
    },
    name: {
      type: String,
      default: "el-radio",
    },
    textColor:{
    type: String,
      default: "#ffffff",
    },
    fill:{
        type: String,
     default: "#409EFF"
    },
    options: {
      type: Array,
      default: [],
    },
    index: {
      type: [Number,String],
      default: 1,
    },
  },
  data() {
    return {
      radioModel: this.index,
    };
  },
  watch: {
    radioModel(newVal) {
      this.$emit("vmodel", newVal);
    },
  },
});
</script>