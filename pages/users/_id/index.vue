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
        <div class="w-full flex flex-wrap content p-3">
            <div class="flex flex-wrap w-full px-2">
                <div class="flex flex-wrap w-full">
                    <div class="w-4/6">
                        <div class="w-full flex flex-wrap bg-white shadow-md p-3 rounded-lg">
                            <div class="w-1/2">
                                <div class="w-full flex flex-wrap">
                                    <div class="flex w-full">
                                        <div class="flex w-48">
                                            <img class="w-full rounded-lg shadow-md" src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.9cba4a79.png"/>
                                        </div>
                                        <div class="flex-grow">
                                            <div class="flex flex-wrap w-full pl-4">
                                                <div class="flex flex-wrap w-full">
                                                    <span class="w-full font-semibold text-xl">
                                                        Selina Kyle
                                                    </span>
                                                    <div class="text-gray-500">
                                                        rena.dubrovna@wayne.com
                                                    </div>
                                                </div>
                                                <div class="flex flex-wrap w-full my-2">
                                                    <a-button type="primary">
                                                        <nuxt-link to="/users/edit/1">
                                                            Edit
                                                        </nuxt-link>
                                                    </a-button>
                                                    <a-button class="ml-2">
                                                        Delete
                                                    </a-button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap w-full my-2">
                                        <section class="flex flex-wrap">
                                            <span class="flex items-center bg-green-100 p-3 rounded-lg">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                            </span>
                                            <span class="pl-3">
                                                <div class="font-semibold text-gray-700 text-lg">17.7k</div>
                                                <div class="text-xs">Deposit</div>
                                            </span>
                                        </section>
                                        <section class="flex flex-wrap ml-6">
                                            <span class="flex items-center bg-red-100 p-3 rounded-lg">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="text-red-500"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                            </span>
                                            <span class="pl-3">
                                                <div class="font-semibold text-gray-700 text-lg">17.7k</div>
                                                <div class="text-xs">Current</div>
                                            </span>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div class="w-1/2">
                                <div class="w-full flex flex-wrap">
                                    <section name="info" class="w-full flex flex-wrap">
                                        <div v-for="item in 5" :key="item" class="w-full flex flex-wrap items-center my-1">
                                            <div class="w-2/5 flex items-center">
                                                <span class="mr-2 flex items-center font-semibold">
                                                    <a-icon type="user" />
                                                </span>
                                                <span class="">
                                                    Username
                                                </span>
                                            </div>
                                            <div class="w-3/5">
                                                Cat1
                                            </div>
                                        </div>
                                    </section>   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-2/6 md:pl-4">
                        <div class="w-full flex flex-wrap bg-white shadow-md p-3 rounded-lg border border-blue-500">
                            <div class="flex flex-wrap text-gray-700 font-semibold w-full">
                                <span class="flex-grow text-lg">
                                    Current Plan
                                </span>
                                <span class="px-3 bg-blue-500 text-white rounded-lg flex items-center">
                                    Vip 0
                                </span>
                            </div>
                            <div class="flex flex-wrap w-full my-2">
                                <span class="w-full pb-1">
                                    95% profit
                                </span>
                                <span class="w-full pb-1">
                                    Discount 10% on deposit
                                </span>
                                <span class="w-full pb-1">
                                    Expert include
                                </span>
                            </div>
                            <div class="flex flex-wrap w-full justify-start">
                                <a-button type="primary">
                                    Upgrade
                                </a-button>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="flex flex-wrap w-full my-2">
                    <div class="w-1/2">
                        <div class="w-full flex flex-wrap bg-white rounded-lg shadow-md px-6 pt-10">
                            <a-timeline>
                                <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                                <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
                                <a-timeline-item color="red">
                                <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
                                    Technical testing 2015-09-01
                                </a-timeline-item>
                                <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                                <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                            </a-timeline>
                        </div>
                    </div>
                    <div class="w-1/2 md:pl-4">
                        <div class="w-full flex flex-wrap bg-white rounded-lg shadow-md p-3">
                            <a-table class="w-full"
                                :columns="columns2"
                                :data-source="data2"
                                :pagination="false"
                            >
                            <a slot="module" slot-scope="data">{{ data }}</a>
                            <span slot="read">
                                <a-checkbox />
                            </span>
                            <span slot="write">
                                <a-checkbox />
                            </span>
                            <span slot="delete">
                                <a-checkbox />
                            </span>
                            </a-table>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap w-full my-2">
                    <div class="w-full flex flex-wrap rounded-lg shadow-md p-3">
                        <a-table class="w-full"
                            :columns="columns"
                            :data-source="data"
                            :pagination="{ pageSize: 8}"
                        >
                            <nuxt-link :to="`/users/${record.key}`" slot="name" slot-scope="data, record">{{ data }} {{ record.key}} </nuxt-link>
                            <a slot="date" slot-scope="data">{{ data }}</a>
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

const columns2 = [
    {
        title : "Module",
        dataIndex: 'module'
    },
    {
        title: "Read",
        dataIndex: 'read',
        scopedSlots: { customRender: 'read' },
    },
    {
        title: "Write",
        dataIndex: 'write',
        scopedSlots: { customRender: 'write' },
    },
    {
        title: "Delete",
        dataIndex: 'delete',
        scopedSlots: { customRender: 'delete' },
    }
]

const data2 = []

data2.push(
    {
        id: 1,
        module: 'Article',
        readwrite: false,
        delete: false,
    },
    {
        id: 2,
        module: 'User',
        readwrite: false,
        delete: false,
    },
    {
        id: 3,
        module: 'HandEdit',
        readwrite: false,
        delete: false,
    },
    {
        id: 4,
        module: 'Expert',
        readwrite: false,
        delete: false,
    }
)

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
            data,data2,
            columns,columns2,
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
    },
    mounted(){
        var vm = this;
        vm.$nextTick(()=>{

        })
    }
}
</script>