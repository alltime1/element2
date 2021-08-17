<template>
  <div>
    <p class="tip">Radio 单选框</p>
    <div class="content">
      <Content>
        <div slot="view">
          <e-radio
            :options="eRadioOptions"
            :index="radio"
            @vmodel="getModel"
            size="medium"
          ></e-radio>
        </div>
        <div slot="code">
          {{ code }}
        </div>
      </Content>
    </div>
  </div>
</template>
<script lang="ts">
import Content from "../viewComponents/Content.vue";
import eRadio from "../components/1单选框.vue";
import Vue from "vue";
export default Vue.extend({
  components: {
    Content,
    eRadio,
  },
  data() {
    return {
      code: ` `,
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
    };
  },
});
</script>

<style>
.tip {
  font-weight: 400;
  color: #1f2f3d;
  font-size: 28px;
}
</style>