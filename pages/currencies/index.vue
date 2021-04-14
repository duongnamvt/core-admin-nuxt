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
               <div class="w-full">
                    <div class="w-full flex flex-wrap mb-4 mt-2">
                            <div class="flex-grow">
                                <a-button type="danger" :disabled="!hasSelected" :loading="loading" @click="start">
                                    Delete
                                </a-button>
                                <span style="margin-left: 8px">
                                    <template v-if="hasSelected">
                                        {{ `Selected ${selectedRowKeys.length} items` }}
                                    </template>
                                </span>
                            </div>
                            <div class="flex" style="width: 400px">
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
                        :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
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