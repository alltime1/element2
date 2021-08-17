<template>
  <div>
    <el-radio  :size="size" :border="border" v-model="radioModel" v-for="(item,index) in options" :disabled="item.disabled" :key="index" :label="item.label">{{item.text}}</el-radio>
 </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    size:{
        type: String,
    },
    options:{
      type:Array,
      default:[]
    },
    border:{
      type:Boolean,
      default:false
    },
    index:{
      type: Number || String,
       default:1
    }
  },
  data() {
    return {
      radioModel:this.index
    };
  },
   watch:{
     radioModel(newVal){
     this.$emit("vmodel",newVal)
     }
   }
});
</script>