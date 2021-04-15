<template>
    <div class="flex flex-wrap w-full">
         <div class="w-full">
            <a-page-header
                @back="() => $router.go(-1)"
                style="border: 1px solid rgb(235, 237, 240)"
                class=""
                title="Tracking Balance"
                sub-title="Bravo ur are in here"
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
                    </a-table>
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
  {
      title: 'Balance Change',
      dataIndex: 'changed',
  },
  {
      title: 'Total Balanace',
      dataIndex: 'totalBalanace',
  },
  {
    title: 'Date',
    dataIndex: 'data',
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