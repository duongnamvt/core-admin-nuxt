<template>
    <div class="flex flex-wrap w-full">
         <div class="w-full">
            <a-page-header
                @back="() => $router.go(-1)"
                style="border: 1px solid rgb(235, 237, 240)"
                class=""
                title="General"
                sub-title="Static informattion of this website"
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
            <div class="flex flex-wrap w-full px-2 md:max-w-1/2">
                <section name="input" class="w-full flex flex-wrap my-1">
                    <label class="font-semibold py-1">
                        Title
                    </label>
                    <a-input placeholder="input placeholder" class="w-full" />
                </section>
                <section name="input" class="w-full flex flex-wrap my-1">
                    <label class="font-semibold py-1">
                        Email
                    </label>
                    <a-input placeholder="input placeholder" class="w-full" />
                </section>
                <section name="input" class="w-full flex flex-wrap my-1">
                    <label class="font-semibold py-1">
                        Phone
                    </label>
                    <a-input placeholder="input placeholder" class="w-full" />
                </section>
                <section name="input" class="w-full flex flex-wrap my-1">
                    <label class="font-semibold py-1">
                        BLB Price
                    </label>
                    <a-input placeholder="input placeholder" class="w-full" />
                </section>
                <section name="input" class="w-full flex flex-wrap my-1">
                    <label class="font-semibold py-1">
                        Logo
                    </label>
                    <section class="w-full flex flex-wrap mb-4 relative text-gray-300 hover:text-gray-600">
                        <div class="bg-gray-100 p-1 m-1 cursor-pointer rounded-lg absolute left-0">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                        </div>
                        <img class="shadow-md rounded-lg" src="https://demo.vutatech.vn/images/currencies/eth.png"/>
                    </section>
                </section>
                <section name="input" class="w-full flex flex-wrap my-1">
                    <label class="font-semibold py-1">
                        Fav icon
                    </label>
                    <section class="w-full flex flex-wrap mb-4 relative text-gray-300 hover:text-gray-600">
                        <div class="bg-gray-100 p-1 m-1 cursor-pointer rounded-lg absolute left-0">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                        </div>
                        <img class="shadow-md rounded-lg" src="https://demo.vutatech.vn/images/currencies/eth.png"/>
                    </section>
                </section>
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