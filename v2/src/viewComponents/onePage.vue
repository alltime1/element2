<template>
  <div>
    <p class="tip">{{ name }}</p>
    <div class="content">
      <Content>
        <div slot="view">
          <div ref="code">
            <div id="code"></div>
          </div>
          <!-- <e-radio
            :options="eRadioOptions"
            :index="radio"
            @vmodel="getModel"
            size="medium"
          ></e-radio> -->
        </div>
        <div slot="code_descride">getModel方法将选择的label值返回</div>
        <div slot="code">
          <img class="code_img" src="../static/2.19.22.png" alt="code代码" />
        </div>
      </Content>
    </div>
    <div class="tip">{{ name2 }}</div>
    <div class="content">
      <Content>
        <div slot="view">
          <eRadioG
            :options="eRadioGOptions"
            :index="radio"
            name="el-radio"
            size="medium"
          ></eRadioG>
          <eRadioG
            style="margin-top: 20px"
            :options="eRadioGOptions"
            :index="radio"
            name="button"
            size="mini"
          ></eRadioG>
        </div>
        <div slot="code_descride">getModelG方法将选择的label值返回</div>
        <div slot="code">
          <img class="code_img" src="../static/2.19.23.png" alt="" />
        </div>
      </Content>
    </div>
    <div class="attribute">
      <p class="tip">Radio Attributes</p>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="参数" width="180">
        </el-table-column>
        <el-table-column prop="name" label="说明" width="180">
        </el-table-column>
        <el-table-column prop="type" label="类型"> </el-table-column>
        <el-table-column prop="choose" label="可选值"> </el-table-column>
        <el-table-column prop="default" label="默认值"> </el-table-column>
      </el-table>
      <p class="tip">Radio Events</p>
      <el-table :data="tableData1" style="width: 100%">
        <el-table-column prop="date" label="事件名称	"> </el-table-column>
        <el-table-column prop="name" label="说明	"> </el-table-column>
      </el-table>
    </div>

    <div class="attribute">
      <p class="tip">Radio Group Attributes</p>
      <el-table :data="tableData2" style="width: 100%">
        <el-table-column prop="date" label="参数" width="180">
        </el-table-column>
        <el-table-column prop="name" label="说明" width="180">
        </el-table-column>
        <el-table-column prop="type" label="类型"> </el-table-column>
        <el-table-column prop="choose" label="可选值"> </el-table-column>
        <el-table-column prop="default" label="默认值"> </el-table-column>
      </el-table>
      <p class="tip">Radio Group Events</p>
      <el-table :data="tableData1" style="width: 100%">
        <el-table-column prop="date" label="事件名称	"> </el-table-column>
        <el-table-column prop="name" label="说明	"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import Content from "../viewComponents/Content.vue";
import eRadio from "../components/1单选框.vue";
import eRadioG from "../components/1单选框组.vue";
import Vue from "vue";
export default Vue.extend({
  props: ["code", "data"],
  components: {
    Content,
    eRadio,
    eRadioG,
  },
  mounted() {
    let that = this;
    console.log(that.data)
    let codeEle = Vue.extend({
      template: that.code,
      data: function () {
        return that.data;
      },
    });

    new codeEle({ el: "#code" });
  },
  data() {
    return {};
  },
  methods: {
    getModel() {},
  },
});
</script>

<style>
.tip {
  font-weight: 400;
  color: #1f2f3d;
  font-size: 28px;
  margin-bottom: 20px;
  margin-top: 10px;
}
.attribute {
  width: 100%;
}
</style>


