<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import vue from "vue";
export default vue.extend({
  created() {
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
          text: "备选框4",
        },
      ],
    };
  },
  methods: {
  },
});
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  padding: 18px;
}
.code_img{
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
}
</style>
