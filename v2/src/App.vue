<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import vue from "vue";
export default vue.extend({
  created() {
    this.checkboxOptions = this.eRadioOptions;
  },
  data() {
    return {
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
</style>
