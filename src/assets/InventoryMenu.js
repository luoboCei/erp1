// 库存管理
const commonMenu = {
    path:"",
    name:"inventory",
    component: () => import('@/Index.vue'),
    meta:{
        icon: "",
        title: "库存管理",
        permission:""
    },
    children:[
        // 基本资料
        {
            path: "",
            name:"inventoryBasic",
            meta:{
                icon: "el-icon-s-grid",
                title: "基本资料",
                permission:""
            },
            components:{
                storageTypeSetting: () => import('../views/Form.vue'),
                outboundTypeSetting: () => import('../views/Form.vue')
            },
            children:[
                {
                    path:"/storageTypeSetting",
                    name: "storageTypeSetting",
                    meta: {
                        icon: "el-icon-setting",
                        title: "入库类型设定",
                        permission:""
                    }
                },
                {
                    path:"/outboundTypeSetting",
                    name: "outboundTypeSetting",
                    meta: {
                        icon: "el-icon-setting",
                        title: '出库类型设定',
                        permission:""
                    }
                }
            ]
        },
        // 其他出入库作业
        {
            path: "",
            name:"otherInboundAndOutboundOperations",
            meta:{
                icon: "el-icon-s-order",
                title: "其他出入库作业",
                permission:""
            },
            components:{
                otherWarehousingDocuments: () => import('../views/inventoryMenu/otherInboundAndOutboundOperations/Orderin.vue'),
                otherOutboundOrders: () => import('../views/inventoryMenu/otherInboundAndOutboundOperations/Orderout.vue')
            },
            children:[
                {
                    path:"/otherWarehousingDocuments",
                    name: "otherWarehousingDocuments",
                    meta: {
                        icon: "el-icon-back",
                        title: "其他入库单",
                        permission:""
                    }
                },
                {
                    path:"/otherOutboundOrders",
                    icon: "",
                    name: "otherOutboundOrders",
                    meta: {
                        icon: "el-icon-right",
                        title: '其他出库单',
                        permission:""
                    }
                }
            ]
        },
        {
            path: "",
            name:"allocateInventory",
            meta:{
                icon: "el-icon-c-scale-to-original",
                title: "调拨盘点作业",
                permission:""
            },
            components:{
                requisition: () => import('../views/inventoryMenu/allocateInventory/Stock.vue'),
                printInventoryCard: () => import('../views/Form.vue'),
                inventoryList: () => import('../views/inventoryMenu/allocateInventory/Check.vue')
            },
            children:[
                {
                    path:"/requisition",
                    name: "requisition",
                    meta: {
                        icon: "el-icon-sort",
                        title: "调拨单",
                        permission:""
                    }
                },
                {
                    path:"/printInventoryCard",
                    name: "printInventoryCard",
                    meta: {
                        icon: "el-icon-document-copy",
                        title: "打印盘点卡",
                        permission:""
                    }
                },
                {
                    path:"/inventoryList",
                    name: "inventoryList",
                    meta: {
                        icon: "el-icon-tickets",
                        title: "盘点单",
                        permission:""
                    }
                }
            ]
        },
        {
            path: "",
            name:"adjustTheHomework",
            meta:{
                icon: "el-icon-notebook-2",
                title: "调价作业",
                permission:""
            },
            components:{
                dueToTheSingle: () => import('../views/inventoryMenu/adjustTheHomework/Adjust.vue')
            },
            children:[
                {
                    path:"/dueToTheSingle",
                    name: "dueToTheSingle",
                    meta: {
                        icon: "el-icon-notebook-1",
                        title: "调价单",
                        permission:""
                    }
                }
            ]
        },
        {
            path: "",
            name:"commonStatements",
            meta:{
                icon: "el-icon-notebook-2",
                title: "常用报表",
                permission:""
            },
            components:{
                dead: () => import('../views/inventoryMenu/commonStatements/Dead.vue'),
                detail: () => import('../views/inventoryMenu/commonStatements/Detail.vue'),
                ledgerSelect: () => import('../views/inventoryMenu/commonStatements/LedgerSelect.vue')
            },
            children:[
                {
                    path:"/dead",
                    name: "dead",
                    meta: {
                        icon: "el-icon-notebook-1",
                        title: "库存呆滞品分析",
                        permission:""
                    }
                },
                {
                    path:"/detail",
                    name: "detail",
                    meta: {
                        icon: "el-icon-notebook-1",
                        title: "库存进出明细查询",
                        permission:""
                    }
                },
                {
                    path:"/ledgerSelect",
                    name: "ledgerSelect",
                    meta: {
                        icon: "el-icon-notebook-1",
                        title: "库存台账查询",
                        permission:""
                    }
                }
            ]
        }
    ]
}

export default commonMenu;