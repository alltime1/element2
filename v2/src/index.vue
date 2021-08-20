<template>
  <div id="app">
    <e-radio
      :options="eRadioOptions"
      :index="radio"
      @vmodel="getModel"
      size="medium"
    ></e-radio>
    <eCheckbox
      :checkedIndex="checkedIndex"
      :options="checkboxOptions"
      @checkedData="checkedData"
    >
    </eCheckbox>
    <e-checkbox-group :options="checkboxGroupOptions" :checkList="checkList" @checkedGroupData="checkedGroupData"></e-checkbox-group>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script lang="ts">
import eRadio from "./components/1单选框.vue";
import eCheckbox from "./components/2多选框.vue";
import eCheckboxGroup from "./components/2多选框组.vue";
import vue from "vue";

export default vue.extend({
  components: {
    eRadio: eRadio,
    eCheckbox,
    eCheckboxGroup,
  },
  created() {
    this.checkboxOptions = this.eRadioOptions;
  },
  data() {
    return {
      checkList:[1],
      checkboxOptions: [{}],
      checkedIndex: null,
      checkboxGroupOptions: [
        {
          label: 1,
          text: "备选框",
        },
        {
          label: 2,
          text: "备选框",
        },
        {
          label: 3,
          text: "备选框",
        },
      ],
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
          text: "备选框2",
        },
      ],
      radio: 4,
    };
  },
  methods: {
    getModel(e: Number | String) {
      console.log(e);
    },
    checkedGroupData(){

    },
    checkedData(e: Number | String) {
      console.log(e);
    },
  },
});
</script>

<style>
</style>
