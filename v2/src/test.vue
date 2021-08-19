<template>
  <div>
    <eRadioG :options="eRadioGOptions"  @vmodel="getModelG" :index="radio" name="el-radio" size="medium" ></eRadioG>
    <eRadioG :options="eRadioGOptions" :index="radio" name="button" size="mini"  ></eRadioG>
  </div>
</template> 
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
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
    };
  },
  methods: {
    getModelG(e) {
      // e 是label
    },
  },
});
</script>
