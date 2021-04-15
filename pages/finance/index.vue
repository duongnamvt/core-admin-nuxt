<template>
    <div class="flex flex-wrap w-full">
         <div class="w-full">
            <a-page-header
                @back="() => $router.go(-1)"
                style="border: 1px solid rgb(235, 237, 240)"
                class=""
                title="Currencies"
                sub-title="List of currency"
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
        <div class="w-full flex flex-wrap p-2">
           <div class="w-full flex flex-wrap p-3">
               <div class="w-full flex flex-wrap">
                   <section class="w-full">
                        <div class="w-full flex flex-wrap shadow-md p-4 bg-white rounded-lg ml-0 mb-4">
                            <div class="w-full flex flex-wrap">
                            <div class="flex-grow font-semibold text-lg">
                                Statistics
                            </div>
                            <div class="flex text-sm">
                                Updated 1 month ago
                            </div>
                            </div>
                            <div class="w-full flex flex-wrap py-2">
                            <div class="w-full flex flex-wrap">
                                <section class="flex items-center h-16 w-1/4" v-for="(item,index) in 4" :key="index">
                                <span class="p-3 rounded-full bg-blue-100">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                                </span>
                                <span class="font-semibold text-gray-700 text-lg ml-2 text-center">
                                    240
                                    <p class="text-xs">
                                    User
                                    </p>
                                </span>
                                </section>
                            </div>
                            </div>
                        </div>
                   </section>
               </div>
               <div class="w-full">
                    <div class="w-full flex flex-wrap mb-4 mt-2">
                            <div class="flex-grow">
                                <a-range-picker>
                                    <a-icon slot="suffixIcon" type="smile" />
                                </a-range-picker>
                                <a-select default-value="lucy" style="width: 120px">
                                    <a-select-option value="jack">
                                        UnConfirm
                                    </a-select-option>
                                    <a-select-option value="lucy">
                                        Completed
                                    </a-select-option>
                                    <a-select-option value="Yiminghe">
                                        Cancel
                                    </a-select-option>
                                </a-select>
                                <a-select
                                    mode="multiple"
                                    :default-value="['ETH1', 'USDT']"
                                    style="width:200px"
                                    placeholder="Deposit Type"
                                >
                                    <a-select-option v-for="i in 3" :key="(i + 9).toString(36) + i">
                                    {{ 'ETH' + i }}
                                    </a-select-option>
                                </a-select>
                            </div>
                            <div class="flex" style="width: 300px">
                                <a-input-search
                                    placeholder="input search text"
                                    enter-button="Search"
                                    size="large"
                                    :loading="loading"
                                    @search="onSearch"
                                />
                            </div>
                    </div>
                    <a-table class="w-full"
                        :columns="columns"
                        :data-source="data"
                        :pagination="{ pageSize: 8}"
                    >
                        <a slot="image" slot-scope="data">
                            <img class="h-10" :src="data"/>
                        </a>
                        <nuxt-link :to="'/currencies/' + record.id" slot="name" slot-scope="data, record">{{ data }}</nuxt-link>
                        <a slot="date" slot-scope="data">{{ data }}</a>
                    </a-table>
               </div>
           </div>
        </div>
    </div>
</template>

<script>
const columns = [
  {
    title: 'Image',
    dataIndex: 'image',
    scopedSlots: { customRender: 'image' },
  },
  {
    title: 'Name',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Symbol',
    dataIndex: 'symbol',
  },
  {
    title: 'Balance',
    dataIndex: 'balance'
  },
  {
      title: 'Deposit Fee',
      dataIndex: 'depositFee',
  },
  {
      title: 'Withdraw Fee',
      dataIndex: 'withdrawFee',
  },
  {
    title: 'Active',
    dataIndex: 'active',
  },
];
const data = [];
data.push({
    key: 1,
    id: 1,
    image: `https://demo.vutatech.vn/images/currencies/eth.png`,
    name: `Ethereum`,
    symbol: `ETH`,
    balance: 0,
    depositFee: 0,
    withdrawFee: 0,
    active: true
});
data.push({
    key: 2,
    id: 2,
    image: `https://demo.vutatech.vn/images/currencies/usdt.png`,
    name: `Tether USDT (ERC20)`,
    symbol: `USDT`,
    balance: 0,
    depositFee: 0,
    withdrawFee: 0,
    active: true
});

import treeSelect from '~/components/widget/treeSelect'
export default {
    components: {
        treeSelect
    },
    data(){
        return{
            data,
            columns,
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
        }
    },
    computed: {
        hasSelected() {
        return this.selectedRowKeys.length > 0;
        },
    },
    methods:{
        start() {
            this.loading = true;
            // ajax request after empty completing
            setTimeout(() => {
                this.loading = false;
                this.selectedRowKeys = [];
            }, 1000);
        },
        onSelectChange(selectedRowKeys) {
            console.log('selectedRowKeys changed: ', selectedRowKeys);
            this.selectedRowKeys = selectedRowKeys;
        },
        onSearch(value) {
            var vm = this
            this.loading = true
            setInterval(function(){ vm.loading = false }, 1000);
            console.log(value);
        },
        handleChange(value) {
            console.log(`selected ${value}`);
        },
    },
    mounted(){
        var vm = this;
        vm.$nextTick(()=>{
        })
    }
}
</script>