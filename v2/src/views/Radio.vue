<template>
  <onePage :codeList="codeList" :data="data" />
</template>
<script>
import Vue from "vue";
// import onePage from "../viewComponents/onePage.vue";
// import eRadio from "../components/1单选框.vue";
export default Vue.extend({
  components: {
    onePage:() => import('../viewComponents/onePage.vue')
    // eRadio
  },
  data() {
    return {
      codeList: [
        {
          name: "Radio 单选框",
          descride: "@vmodel事件将返回v-model的值",
          img: require("../static/2.19.22.png"),
          code: `<eRadios
            :options="eRadioOptions"
            :index="radio"
            size="medium"
          >1212</eRadios>`,
        },
        {
          name: "单选框组",
          img: require("../static/2.19.23.png"),
          descride: "@vmodel事件将返回v-model的值",
          code: `
          <div>
           <eRadioGs :options="eRadioGOptions" :index="radio" name="el-radio" size="medium" ></eRadioGs>
           <eRadioGs :options="eRadioGOptions" :index="radio" name="button" size="mini"  ></eRadioGs>
           </div>
    `,
        },
      ],
      data: [
        {
          radio: null,
          eRadioOptions: [
            {
              label: 1,
              text: "备选框",
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
        {
          radio: null,
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