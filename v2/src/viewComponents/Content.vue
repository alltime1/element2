<template>
  <div>
    <div class="showContent">
      <slot name="view"> </slot>
    </div>
    <div class="code">
      <slot name="code"> </slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Home",
});
</script>

<style>
</style>