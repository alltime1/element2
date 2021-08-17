<template>
  <div id="app">
    <e-radio
      :options="eRadioOptions"
      :index="radio"
      @vmodel="getModel"
      size="medium"
    ></e-radio>
    <router-view />
  </div>
</template>
<script lang="ts">
import eRadio from "./components/单选框.vue";
import eRadioG from "./components/单选框组.vue";
import vue from "vue";
export default vue.extend({
  components: {
    eRadio: eRadio,
    eRadioG,
  },
  data() {
    return {
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
  methods:{
    getModel(e){
       console.log(e)
    }
  }
});
</script>

<style>
</style>
