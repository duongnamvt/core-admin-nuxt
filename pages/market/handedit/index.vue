<template>
    <div class="flex flex-wrap w-full">
         <div class="w-full">
            <a-page-header
                @back="() => $router.go(-1)"
                style="border: 1px solid rgb(235, 237, 240)"
                class=""
                title="Hand Edit"
                sub-title="Self control"
            >
                <template slot="extra">
                <a-dropdown>
                    <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
                    Hover me <a-icon type="down" />
                    </a>
                    <a-menu slot="overlay">
                    <a-menu-item>
                        <a href="javascript:;">1st menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a href="javascript:;">2nd menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a href="javascript:;">3rd menu item</a>
                    </a-menu-item>
                    </a-menu>
                </a-dropdown>
                </template>
            </a-page-header>
        </div>
        <div class="w-full flex flex-wrap content p-3">
            <div class="flex flex-wrap w-full px-2">
                <div class="w-full flex flex-wrap mb-6">
                    <div class="card-container w-full">
                        <a-tabs type="card">
                        <a-tab-pane key="1" tab="BTC">
                           <div class="w-full flex flex-wrap">
                                <div class="bg-green-500 rounded-l-lg" :style="{ width: current + '%' }" style="transition: width 1s">
                                    &nbsp;
                                </div>
                                <div class="bg-red-500 rounded-r-lg" :style="{ width: 100-current + '%' }" style="transition: width 1s">
                                   
                               </div>
                               <div class="w-full flex flex-wrap">
                                   <div class="w-1/3">
                                        <div class="flex flex-wrap w-full">
                                            <div class="w-full flex flex-wrap">
                                                <div class="">
                                                    BUY: 200$
                                                </div>
                                            </div>
                                            <a-button @click="current++" type="primary" icon="buy" size="" class="flex items-center">
                                                BUY
                                            </a-button>
                                        </div>
                                   </div>
                                   <div class="w-1/3">
                                        <div class="flex flex-wrap w-full justify-center">
                                            17:12
                                        </div>
                                   </div>
                                   <div class="w-1/3">
                                        <div class="flex flex-wrap w-full justify-end">
                                            <div class="w-full flex flex-wrap justify-end">
                                                <div class="">
                                                    SELL: 200$
                                                </div>
                                            </div>
                                             <a-button @click="current--" type="danger" icon="sell" size="" class="flex items-center">
                                                SELL
                                            </a-button>
                                        </div>
                                   </div>
                               </div>
                           </div>
                        </a-tab-pane>
                        <a-tab-pane key="2" tab="XRP">
                            <div class="w-full flex flex-wrap">
                                <div class="bg-green-500 rounded-l-lg" :style="{ width: current + '%' }" style="transition: width 1s">
                                    &nbsp;
                                </div>
                                <div class="bg-red-500 rounded-r-lg" :style="{ width: 100-current + '%' }" style="transition: width 1s">
                                   
                               </div>
                               <div class="w-full flex flex-wrap">
                                   <div class="w-1/3">
                                        <div class="flex flex-wrap w-full">
                                            <div class="w-full flex flex-wrap">
                                                <div class="">
                                                    BUY: 200$
                                                </div>
                                            </div>
                                            <div @click="current++">
                                                Up
                                            </div>
                                        </div>
                                   </div>
                                   <div class="w-1/3">
                                        <div class="flex flex-wrap w-full justify-center">
                                            aaaas
                                        </div>
                                   </div>
                                   <div class="w-1/3">
                                        <div class="flex flex-wrap w-full justify-end">
                                            <div class="w-full flex flex-wrap justify-end">
                                                <div class="">
                                                    SELL: 200$
                                                </div>
                                            </div>
                                            <div @click="current--">
                                                Down
                                            </div>
                                        </div>
                                   </div>
                               </div>
                           </div>
                        </a-tab-pane>
                        <a-tab-pane key="3" tab="USDTXRP">
                            <div class="w-full flex flex-wrap">
                                <div class="bg-green-500 rounded-l-lg" :style="{ width: current + '%' }" style="transition: width 1s">
                                    &nbsp;
                                </div>
                                <div class="bg-red-500 rounded-r-lg" :style="{ width: 100-current + '%' }" style="transition: width 1s">
                                   
                               </div>
                               <div class="w-full flex flex-wrap">
                                   <div class="w-1/3">
                                        <div class="flex flex-wrap w-full">
                                            <div class="w-full flex flex-wrap">
                                                <div class="">
                                                    BUY: 200$
                                                </div>
                                            </div>
                                            <div @click="current++">
                                                Up
                                            </div>
                                        </div>
                                   </div>
                                   <div class="w-1/3">
                                        <div class="flex flex-wrap w-full justify-center">
                                            aaaas
                                        </div>
                                   </div>
                                   <div class="w-1/3">
                                        <div class="flex flex-wrap w-full justify-end">
                                            <div class="w-full flex flex-wrap justify-end">
                                                <div class="">
                                                    SELL: 200$
                                                </div>
                                            </div>
                                            <div @click="current--">
                                                Down
                                            </div>
                                        </div>
                                   </div>
                               </div>
                           </div>
                        </a-tab-pane>
                        </a-tabs>
                    </div>
                </div>
                <div class="w-full flex flex-wrap">
                    <div class="w-1/2">
                        <a-table class="w-full"
                            :columns="columns"
                            :data-source="data"
                            :pagination="false"
                        >
                        </a-table>
                    </div>
                    <div class="w-1/2 md:pl-4">
                        <a-table class="w-full"
                            :columns="columns"
                            :data-source="data"
                            :pagination="false"
                        >
                        </a-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const columns = [
  {
    title: 'Username',
    dataIndex: 'userName',
  },
  {
    title: 'Wallet Type',
    dataIndex: 'walletType',
  },
  {
    title: 'Event',
    dataIndex: 'event',
  },
  {
    title: 'Balance',
    dataIndex: 'balance'
  },
];
const data = [];
data.push({
    key: 1,
    id: 1,
    userName: '1',
    event: '',
    balance: 0,
    changed: 8,
    totalBalance: 0,
    date: new Date()
});
export default {
    data(){
        return{
            data,columns,
            current: 0,
        }
    },
    methods:{

    },
    mounted(){
        var vm = this;
        vm.$nextTick(()=>{

        })
    }
}
</script>

<style>
.card-container {
  background: #f5f5f5;
  overflow: hidden;
  padding: 24px;
}
.card-container > .ant-tabs-card > .ant-tabs-content {
  height: 120px;
  margin-top: -16px;
}

.card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
  background: #fff;
  padding: 16px;
}

.card-container > .ant-tabs-card > .ant-tabs-bar {
  border-color: #fff;
}

.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
  border-color: transparent;
  background: transparent;
}

.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
  border-color: #fff;
  background: #fff;
}
</style>