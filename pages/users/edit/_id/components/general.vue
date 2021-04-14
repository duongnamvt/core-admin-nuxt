<template>
    <div class="flex flex-wrap w-full">
        <div class="flex w-full">
            <div class="flex w-32">
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
        <div class="w-full my-4">
            <div class="flex flex-wrap w-full">
                <div class="w-1/2">
                    <section name="input" class="w-full flex flex-wrap my-1">
                        <label class="font-semibold py-1">
                            Title
                        </label>
                        <a-input placeholder="input placeholder" class="w-full" />
                    </section>
                    <section name="input" class="w-full flex flex-wrap my-1">
                        <label class="font-semibold py-1">
                            Title
                        </label>
                        <a-input placeholder="input placeholder" class="w-full" />
                    </section>
                </div>
                <div class="w-1/2 md:pl-4">
                    <section name="input" class="w-full flex flex-wrap my-1">
                        <label class="font-semibold py-1">
                            Title
                        </label>
                        <a-input placeholder="input placeholder" class="w-full" />
                    </section>
                    <section name="input" class="w-full flex flex-wrap my-1">
                        <label class="font-semibold py-1">
                            Title
                        </label>
                        <a-input placeholder="input placeholder" class="w-full" />
                    </section>
                </div>
            </div>    
        </div>
        <div class="w-full my-4">
            <div class="w-full flex flex-wrap bg-white rounded-lg">
                <div class="border-t border-l border-r rounded-t-lg w-full px-3 py-2">
                    <div class="flex items-center text-xl">
                        <a-icon type="safety" class="mr-2" />
                        Permission
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
    data() {
        return {
            data2,columns2
        }
    }
}
</script>