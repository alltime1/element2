<template>
  <div>
    <el-checkbox
      v-for="(item, index) in options"

      v-model="eCheckedArr[index]"
      :disabled="disabled"
      :key="'checkbox' + index"
      >{{ item.text }}</el-checkbox
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    disabled:{
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: [],
    },
    checkedIndex: {
      type: [String ,Number],
      default: 0,
    },
  },
  created(){
    let len =  this.options.length
    this.eCheckedArr = Array(len).fill(false);
    String(this.checkedIndex).trim().split(",").forEach(e=>{
      this.eCheckedArr[Number(e)] = true
    })
  },
  data() {
    return {
      eCheckedArr: [],
    };
  },
  watch:{
    eCheckedArr(old){
     let newArr =[]
     old.forEach((element:boolean,i:number) => {
       if(element){
        newArr.push(this.options[Number(i)])
       }
     });
      this.$emit("checkedData",old)
    }
  }
});
</script>