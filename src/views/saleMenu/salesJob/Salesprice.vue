<template>
  <div>
    <el-container>
      <el-header >销售报价单</el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="3">
            <el-checkbox v-model="checked" label="1">正式客户</el-checkbox>
          </el-col>
          <el-col :span="9">
            <el-input v-model="customername" clearable></el-input>
          </el-col>
          <el-col :span="3">
            单据日期
          </el-col>
          <el-col :span="9">
            <el-date-picker
              v-model="value2"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="3">
            送货地址
          </el-col>
          <el-col :span="3">
            <el-input v-model="address" clearable></el-input>
          </el-col>
          <el-col :span="6">
            <el-input v-model="addresstwo" clearable></el-input>
          </el-col>
          <el-col :span="3">
            单据号码
          </el-col>
          <el-col :span="9">
            <el-input v-model="documentnumber" clearable></el-input>
          </el-col>
        </el-row>


        <el-row :gutter="20">
          <el-col :span="3">
            有效日期
          </el-col>
          <el-col :span="9">
            <el-date-picker
              v-model="value3"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-col>
          <el-col :span="3">
            币别
          </el-col>
          <el-col :span="9">
            <el-input v-model="currency" clearable></el-input>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="3">
            单价是否含税
          </el-col>
          <el-col :span="9">
            <el-radio v-model="radio" label="1">含税</el-radio>
            <el-radio v-model="radio" label="2">未税</el-radio>
          </el-col>
          <el-col :span="3">
            汇率
          </el-col>
          <el-col :span="9">
            <el-input v-model="currency2" clearable></el-input>
          </el-col>
        </el-row>

        <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick" border>
          <el-tab-pane label="内容" name="first">
            <el-table el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="(栏号)" sortable width="180"></el-table-column>
              <el-table-column prop="name" label="物料编号" width="180"></el-table-column>
              <el-table-column prop="address" label="(物料名称)" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="(规格型号)" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="(单位名称)" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="数量" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="折扣前单价" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="折数(%)" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="单价" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="(金额)" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="税率(%)" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="(税额)" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="含税金额" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="赠品" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="分录备注" :formatter="formatter"></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="备注" name="second">
            表头条文
            <el-input v-model="input1" style="width:200px" clearable></el-input>自定栏一
            <el-input v-model="input2" style="width:200px" clearable></el-input>表尾条文
            <el-input v-model="input3" style="width:200px" clearable></el-input>自定栏二
            <el-input v-model="input4" style="width:200px" clearable></el-input>

            <el-input
              type="textarea"
              :autosize="{ minRows: 6, maxRows: 6}"
              placeholder="请输入内容"
              v-model="textarea2"
            ></el-input>
          </el-tab-pane>
        </el-tabs>
        <br>
        <el-row :gutter="20">
          <el-col :span="3">合计:</el-col>
          <el-col :span="9">
            <el-input v-model="input5" clearable></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="3">
            业务人员:
          </el-col>
          <el-col :span="9">
            <el-input v-model="input6" clearable></el-input>
          </el-col>
          <el-col :span="3">
            制单人员:
          </el-col>
          <el-col :span="9">
            <el-input v-model="input7" clearable></el-input>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="3">
            所属部门:
          </el-col>
          <el-col :span="9">
            <el-input v-model="input8" clearable></el-input>
          </el-col>
          <el-col :span="3">
            复核人员:
          </el-col>
          <el-col :span="9">
            <el-input v-model="input9" clearable></el-input>
          </el-col>
        </el-row>

        <el-dropdown>
          <el-button type="primary">
            查询
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>历史交易查询</el-dropdown-item>
            <el-dropdown-item>利润预估查询</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <el-dropdown>
          <el-button type="primary">
            功能
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>批次变更单价</el-dropdown-item>
            <el-dropdown-item>发送Email</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-main>
      <!-- <el-footer>销售报价单</el-footer> -->
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      customername: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value2: "",
      addresstwo: "",
      address: "",
      documentnumber: "",
      value3: "",
      select: "",
      currency: "",
      currency2: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      textarea2: "",
      input5: "",
      input6: "",
      input7: "",
      input8: "",
      input9: "",
      radio: "1"
    };
  }
};
</script>
<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
/* .bg-purple-dark {
  background: #99a9bf;
} */
.bg-purple {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>