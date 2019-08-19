<template>
	<div class='fatherDiv'>
		<el-container>
			<el-header height="">
			</el-header>
			<el-container>
				<el-aside style="width:30ph">
					<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
						<el-radio-button :label="false">展开</el-radio-button>
						<el-radio-button :label="true">收起</el-radio-button>
					</el-radio-group>
					<el-menu :router="true" default-active="1-2" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
					 class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" >
						<el-submenu index="1" style="margin-top: 40px;"  >
							<template slot="title">
								<i class="el-icon-shopping-cart-1"></i>
								<span slot="title"> 
									<!-- /${Math.random()} -->
									<router-link  :to="`/PurchaseProcedure`" style="text-decoration: none;color:#fff;" @click.native="addTab('采购管理','/PurchaseProcedure')">采购管理</router-link>
								</span>
							</template>

							<el-submenu index="1-1">
								<span slot="title" style="color:orange">基本资料</span>
								<el-menu-item index="1-1-1">采购请购类型设定</el-menu-item>
								<el-menu-item index="1-1-2">采购入库类型设定</el-menu-item>
								<el-menu-item index="1-1-3">采购订单类型设定</el-menu-item>
							</el-submenu>
							<el-submenu index="1-2">
								<span slot="title" style="color:orange">采购作业</span>
								<el-menu-item :index="`/Order`" @click="addTab('采购订单','/Order')">采购订单</el-menu-item>
								<el-menu-item :index="`/InquirySheet`" @click="addTab('采购询价单','/InquirySheet')">采购询价单</el-menu-item>
								<el-menu-item index="/PurchaseRequisition"  @click="addTab('采购请购单','/PurchaseRequisition')" >采购请购单</el-menu-item>
								<el-menu-item index="/Warehousing"  @click="addTab('采购入库单','/Warehousing')" >采购入库单</el-menu-item>
								<el-menu-item index="/ReturnGoods"  @click="addTab('采购退货单','/ReturnGoods')">采购退货单</el-menu-item>
								<el-menu-item index="/Invoice"  @click="addTab('采购发票','/Invoice')">采购发票</el-menu-item>
							</el-submenu>
							<el-submenu index="1-3">
								<span slot="title" style="color:orange">采购分摊作业</span>
								<el-menu-item index="1-3-1">采购分摊作业</el-menu-item>
							</el-submenu>
						</el-submenu>
						<el-menu-item index="2">
							<i class="el-icon-menu"></i>
							<span slot="title">销售管理</span>
						</el-menu-item>
						<el-menu-item index="3" disabled>
							<i class="el-icon-document"></i>
							<span slot="title">库存管理</span>
						</el-menu-item>
						<el-menu-item index="4">
							<i class="el-icon-setting"></i>
							<span slot="title">生产管理</span>
						</el-menu-item>
					</el-menu>
				</el-aside>
				<el-main height="">
					<!-- tab标签页 -->
					<el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab" @tab-click="redirectPage">
						<el-tab-pane  v-for="item in editableTabs"  :key="item.name" :label="item.title" :name="item.name" :href="item.href">
							<router-view/>
						</el-tab-pane>
						
					</el-tabs>
					
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
	//例如：import 《组件名称》 from '《组件路径》';
	import $ from "jquery"
	export default {
		//import引入的组件需要注入到对象中才能使用
		components: {},
		data() {
			//这里存放数据
			return {
				isCollapse: false,
				editableTabsValue: '0',
				editableTabs: [],
				tabIndex: 0,
				
			};
		},
		//监听属性 类似于data概念
		computed: {},
		//监控data中的数据变化
		watch: {},
		//方法集合
		methods: {
			// 侧导航栏
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			// 添加tab标签页
			addTab(title,index) {
				let flag=false;
			this.editableTabs.forEach((tab, index) => {
            if (tab.title === title) {
				flag=true;
              return;
            }
		  });
		  if(flag)return;	
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: title,
          name: newTabName,
		  content: 'New Tab content',
		  href:index
		});
        this.editableTabsValue = newTabName;
	  },
	  // 移除tab标签页
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
			}
          });
        }
        
        this.editableTabsValue = activeName;
		this.editableTabs = tabs.filter(tab => tab.name !== targetName);
		if(tabs.length==1){
				this.$router.replace(`/`);
			}
	  },
	  //重定向
	  redirectPage(path) {
		  console.log(path)
            this.$router.push(`${path.$attrs.href}`);
        }
		},

		//生命周期 - 创建完成（可以访问当前this实例）
		created() {

		},
		//生命周期 - 挂载完成（可以访问DOM元素）
		mounted() {

		},
		beforeCreate() {}, //生命周期 - 创建之前
		beforeMount() {}, //生命周期 - 挂载之前
		beforeUpdate() {}, //生命周期 - 更新之前
		updated() {}, //生命周期 - 更新之后
		beforeDestroy() {}, //生命周期 - 销毁之前
		destroyed() {}, //生命周期 - 销毁完成
		activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
	}
</script>
<style scoped>
	/*@import url(); 引入公共css类*/
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;

	}
	.el-radio-group {
		position: absolute;
		left: -76px;
		z-index: 100;
	}

	.el-radio-group:hover {
		left: 0px;
	}
</style>
