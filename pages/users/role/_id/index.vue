<template>
    <div class="flex flex-wrap w-full">
         <div class="w-full">
            <a-page-header
                @back="() => $router.go(-1)"
                style="border: 1px solid rgb(235, 237, 240)"
                class=""
                title="Role"
                sub-title="Edit role"
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
            <div class="flex flex-wrap w-full p-3 rounded-lg shadow-md">
                <div class="flex flex-wrap w-full mb-4">
                    <div class="w-1/2">
                        <label class="font-semibold my-2 w-full">
                            Name of role
                        </label>
                        <a-input ref="userNameInput" placeholder="Basic usage">
                            <a-icon slot="prefix" type="user" />
                            <a-tooltip slot="suffix" title="Extra information">
                                <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                            </a-tooltip>
                        </a-input>
                    </div>
                    <div class="w-1/2">
                    </div>
                </div>
                <a-table class="w-full border"
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

                <div class="my-4 flex flex-wrap w-full">
                    <a-button type="primary" class="mr-2">
                        Save
                    </a-button>
                    <a-button>
                        Cancel
                    </a-button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
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
export default {
    data(){
        return{
            data2,columns2
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