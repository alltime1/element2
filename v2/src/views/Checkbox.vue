<template>
  <onePage :codeList="codeList" :data="data" />
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  components: {
     onePage:() => import('../viewComponents/onePage.vue')
  },
  data() {
    return {
      codeList: [
        {
          name: "Checkbox 多选框",
          descride: "@vmodel事件将返回v-model的值",
          code: `<eCheckboxs
            :options="eRadioOptions"
            :checkedIndex="radio"
            size="medium"
            border
          >1212</eCheckboxs>`,
        },
        {
          name: "多选框组",
          descride: "@vmodel事件将返回v-model的值",
          code: `
          <div>
           <eCheckboxGs :options="eRadioGOptions"   :checkList="label" name="el-radio" size="medium" ></eCheckboxGs>
           </div> `,
        },
      ],
      data: [
        {
          label: null,
          eRadioOptions: [
            {
              label: 1,
              text: "备选框",
             
            },
            {
              label: 2,
              text: "备选框2",
               disabled: true,
            },
            {
              label: 4,
              text: "备选框4",
            },
          ],
        },
        {
          label: [4],
          eRadioGOptions: [
            {
              label: 1,
              text: "备选框1",
              disabled: true,

            },
            {
              label: 2,
              text: "备选框2",
            },
            {
              label: 4,
              text: "备选框4",
            },
          ],
        },
      ],
    };
  },
});
</script>
<style>
</style>