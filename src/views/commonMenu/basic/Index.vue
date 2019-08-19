<template>
<div>
    <el-container style='height:97vh; border: 1px solid #eee'>
        <el-header style='height:10%'>ERP系统</el-header>
        <el-container>
            <el-aside width="250px">
                <el-menu :router="true" :default-openeds="['1', '3']" class="el-menu-vertical-demo">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-user"></i>
                            <span>共用资料</span>
                        </template>
                           <el-submenu index="1-1">
                            <template slot="title"><i class="el-icon-postcard"></i>基本资料</template>
                           <el-menu-item index="/department"><i class="el-icon-c-scale-to-original"></i>部门设定</el-menu-item>
                            <el-menu-item index="" disabled><i class="el-icon-c-scale-to-original"></i>项目设定</el-menu-item>
                            <el-menu-item index="1-1-3" disabled><i class="el-icon-c-scale-to-original"></i>币别设定</el-menu-item>
                            <el-menu-item index="1-1-4" disabled><i class="el-icon-c-scale-to-original"></i>地区设定</el-menu-item>
                            <el-menu-item index="1-1-5" disabled><i class="el-icon-c-scale-to-original"></i>学历设定</el-menu-item>
                            <el-menu-item index="1-1-6" disabled><i class="el-icon-c-scale-to-original"></i>银行设定</el-menu-item>
                            <el-menu-item index="1-1-7" disabled><i class="el-icon-c-scale-to-original"></i>税目设定</el-menu-item>
                            <el-menu-item index="/receiptsclass"><i class="el-icon-c-scale-to-original"></i>发票类型设定</el-menu-item>
                            <el-menu-item index="1-1-9" disabled><i class="el-icon-c-scale-to-original"></i>银行类别设定</el-menu-item>
                            <el-menu-item index="1-1-10" disabled><i class="el-icon-c-scale-to-original"></i>现金账户设定</el-menu-item>
                            <el-menu-item index="1-1-11" disabled><i class="el-icon-c-scale-to-original"></i>银行存款账户设定</el-menu-item>
                            <el-menu-item index="1-1-12" disabled><i class="el-icon-c-scale-to-original"></i>结算方式设定</el-menu-item>
                            <el-menu-item index="/personnel"><i class="el-icon-c-scale-to-original"></i>人员主文件设定</el-menu-item>
                            <el-menu-item index="1-1-14" disabled><i class="el-icon-c-scale-to-original"></i>收入费用类别设定</el-menu-item>
                            <el-menu-item index="1-1-15" disabled><i class="el-icon-c-scale-to-original"></i>节假日设定</el-menu-item>
                            <el-menu-item index="1-1-16" disabled><i class="el-icon-c-scale-to-original"></i>行事历设定</el-menu-item>
                          </el-submenu>
                           <el-submenu index="1-2">
                            <template slot="title"><i class="el-icon-set-up"></i>物料资料</template>
                            <el-menu-item index="/warehouse"><i class="el-icon-guide"></i>仓库设定</el-menu-item>
                            <el-menu-item index="/materialclass"><i class="el-icon-guide"></i>物料类别设定</el-menu-item>
                            <el-menu-item index="/measure"><i class="el-icon-guide"></i>计量单位设定</el-menu-item>
                            <el-menu-item index="/material"><i class="el-icon-guide"></i>物料主文件设定</el-menu-item>
                            <el-menu-item index="1-2-5" disabled><i class="el-icon-guide"></i>价格批次设定</el-menu-item>
                            <el-menu-item index="1-2-6" disabled><i class="el-icon-guide"></i>物料组合一览表</el-menu-item>
                            <el-menu-item index="1-2-7" disabled><i class="el-icon-guide"></i>原厂编号查询</el-menu-item>
                            <el-menu-item index="1-2-8" disabled><i class="el-icon-guide"></i>子件一览表</el-menu-item>
                          </el-submenu>
                           <el-submenu index="1-3">
                            <template slot="title"><i class="el-icon-chat-dot-square"></i>往来资料</template>
                            <el-menu-item index="/clientclass"><i class="el-icon-copy-document"></i>客户类别设定</el-menu-item>
                            <el-menu-item index="1-3-2" disabled><i class="el-icon-copy-document"></i>客户等级设定</el-menu-item>
                            <el-menu-item index="1-3-3" disabled><i class="el-icon-copy-document"></i>洽谈阶段设定</el-menu-item>
                            <el-menu-item index="1-3-4" disabled><i class="el-icon-copy-document"></i>潜在客户主文件设定</el-menu-item>
                            <el-menu-item index="/client"><i class="el-icon-copy-document"></i>客户主文件设定</el-menu-item>
                            <el-menu-item index="1-3-6" disabled><i class="el-icon-copy-document"></i>潜在客户转正式客户</el-menu-item>
                            <el-menu-item index="/supplierclass"><i class="el-icon-copy-document"></i>供应商类别设定</el-menu-item>
                            <el-menu-item index="/supplier"><i class="el-icon-copy-document"></i>供应商主文件设定</el-menu-item>
                          </el-submenu>
                           <el-submenu index="1-4">
                            <template slot="title"><i class="el-icon-notebook-2"></i>科目资料</template>
                            <el-menu-item index="1-4-1" disabled><i class="el-icon-document-copy"></i>科目总类设定</el-menu-item>
                            <el-menu-item index="1-4-2" disabled><i class="el-icon-document-copy"></i>科目类别设定</el-menu-item>
                            <el-menu-item index="1-4-3" disabled><i class="el-icon-document-copy"></i>会计科目设定</el-menu-item>
                          </el-submenu>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<script>
export default {

      methods: {
        redirectPage(path) {
            this.$router.push(`${path}/${Math.random()}`);
        }
    },
}
</script>

<style scoped>
.el-header,
.el-footer {
    background: gainsboro;
    font-size: 30px;
}

.el-menu {
    border: 0px;
}
</style>
