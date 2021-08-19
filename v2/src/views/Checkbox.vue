<template>
  <onePage :code="code" :data="data" />
</template>
<script>
import Vue from "vue";
import onePage from "../viewComponents/onePage.vue";
// import eRadio from "../components/1单选框.vue";
export default Vue.extend({
  components: {
    onePage,
    // eRadio
  },
  data() {
    return {
      data: {
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
      code: `<eRadios
            :options="eRadioOptions"
            :index="radio"
            @vmodel="getModel"
            size="medium"
          >1212</eRadios>`,
    };
  },
});
</script>

<style>
</style>