
<template>
  <div>
    <el-checkbox-group v-model="echeckList">
    <el-checkbox
      v-for="(item, index) in options"
      :label="item.label"
      :disabled="item.disabled"
      :key="'checkboxg' + index"
      >{{ item.text }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
 interface Data{
  eCheckedArr:Boolean[];
  echeckList?:any;
}
export default Vue.extend({
  props: {
    checkList:{
      type:Array,
      default:[null]
    },
    disabled:{
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: [],
    },
    checkedIndex: {
      type: [String, Number],
      default: "0",
    },
  },
  created(){
    let len =  this.options.length
    this.eCheckedArr=Array(len).fill(false)
    if(!this.checkedIndex) return;
    String(this.checkedIndex).trim().split(",").forEach(e=>{
      this.eCheckedArr[Number(e)] = true
    })
  },
  data():Data {
    return {
      eCheckedArr: [],
      echeckList:this.checkList,
    };
  },
  watch:{
    echeckList(old){
      this.$emit("checkedGroupData",old)
    }
    // eCheckedArr(old){
    //  let newArr =[]
    //  old.forEach((element,i) => {
    //    if(element){
    //     newArr.push(this.options[i])
    //    }
    //  });
    //   this.$emit("checkedData",old)
    // }
  }
});
</script>