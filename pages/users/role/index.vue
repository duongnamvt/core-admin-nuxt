<template>
    <div class="flex flex-wrap w-full">
         <div class="w-full">
            <a-page-header
                @back="() => $router.go(-1)"
                style="border: 1px solid rgb(235, 237, 240)"
                class=""
                title="Role list"
                sub-title="List of role"
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
                    <a-table class="w-full"
                        :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
                        :columns="columns"
                        :data-source="data"
                        :pagination="{ pageSize: 8}"
                    >
                        <a slot="image" slot-scope="data">
                            <img class="h-10" :src="data"/>
                        </a>
                        <nuxt-link to="/users/1" slot="name" slot-scope="data">{{ data }}</nuxt-link>
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
    title: 'Name',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Total',
    dataIndex: 'total',
  },
  {
    title: 'Date Created',
    dataIndex: 'date',
  },
];
const data = [];

export default {
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