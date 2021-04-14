<template>
    <div class="flex flex-wrap w-full">
         <div class="w-full">
            <a-page-header
                @back="() => $router.go(-1)"
                style="border: 1px solid rgb(235, 237, 240)"
                class=""
                title="ETH"
                sub-title="Edit ETH Currency"
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
            <div class="flex flex-wrap w-full p-3 shadow-md rounded-lg">
                <div class="w-1/3 pr-4">
                    <section class="w-full flex flex-wrap mb-4 relative text-gray-300 hover:text-gray-600">
                        <div class="bg-gray-100 p-1 m-1 cursor-pointer rounded-lg absolute left-0">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                        </div>
                        <img class="shadow-md rounded-lg" src="https://demo.vutatech.vn/images/currencies/eth.png"/>
                    </section>
                    <section name="form" class="flex flex-wrap w-full mb-4">
                        <label class="font-semibold pb-2">
                            Balance
                        </label>
                        <a-input addon-before="ETH" default-value="" />
                    </section>
                    <section name="form" class="flex flex-wrap w-full mb-4">
                        <a-switch checked-children="Active" un-checked-children="Inactive" default-checked />
                    </section>
                </div>
                <div class="w-1/3 pr-4">
                    <section name="form" class="flex flex-wrap w-full mb-4">
                        <label class="font-semibold pb-2">
                            Deposit Fee
                        </label>
                        <a-input addon-before="ETH" default-value="" />
                    </section>
                    <section name="form" class="flex flex-wrap w-full mb-4">
                        <label class="font-semibold pb-2">
                            Withdraw Fee
                        </label>
                        <a-input addon-before="ETH" default-value="" />
                    </section>
                </div>
                <div class="w-1/3">
                    <section name="form" class="flex flex-wrap w-full mb-4">
                        <label class="font-semibold pb-2">
                            Min Deposit
                        </label>
                        <a-input addon-before="ETH" default-value="" />
                    </section>
                    <section name="form" class="flex flex-wrap w-full mb-4">
                        <label class="font-semibold pb-2">
                            Max Deposit
                        </label>
                        <a-input addon-before="ETH" default-value="" />
                    </section>
                    <section name="form" class="flex flex-wrap w-full mb-4">
                        <label class="font-semibold pb-2">
                            Max Withdraw
                        </label>
                        <a-input addon-before="ETH" default-value="" />
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
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