<template>
    <div class="flex flex-wrap w-full">
         <div class="w-full">
            <a-page-header
                @back="() => $router.go(-1)"
                style="border: 1px solid rgb(235, 237, 240)"
                class=""
                title="User"
                sub-title="List of user"
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
                    <div class="w-full flex flex-wrap">
                        <section class="w-1/5 flex">
                            <a-select mode="tags" style="width: 100%" placeholder="Select Roles" @change="handleChange">
                                <a-select-option v-for="i in 5" :key="i.toString()">
                                    {{ i }}
                                </a-select-option>
                            </a-select>
                        </section>
                        <section class="md:ml-4">
                            Create Time: 
                             <a-range-picker class="ml-2 w-64" @change="onChange" />
                        </section>
                    </div>
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
                        <a slot="name" slot-scope="data">{{ data }}</a>
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
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Date Created',
    dataIndex: 'date',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    image: `https://randomuser.me/api/portraits/men/${i}.jpg`,
    name: `Edward King ${i}`,
    email: `meo${i}@gmail.com`,
    date: new Date().toLocaleString("en-US")
  });
}
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