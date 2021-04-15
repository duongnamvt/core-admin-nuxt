<template>
    <div class="flex flex-wrap w-full">
         <div class="w-full">
            <a-page-header
                @back="() => $router.go(-1)"
                style="border: 1px solid rgb(235, 237, 240)"
                class=""
                title="Trading fee"
                sub-title="Setting trading fee for each hour range"
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
                <div class="flex flex-wrap w-full my-2">
                    <div class="w-1/2 md:pr-2">
                        <label class="font-semibold pb-2">
                            Profit: 
                        </label>
                        <a-slider class="w-full" :tooltipVisible="false" :default-value="20" :disabled="disabled" />
                    </div>
                    <div class="w-1/2 md:pl-2">
                        <label class="font-semibold pb-2">
                            Trading limit:
                        </label>
                        <a-slider class="w-full" range :tooltipVisible="false" :default-value="[20, 50]" :disabled="disabled" />
                    </div>
                </div>
                <div class="flex flex-wrap w-full mb-4 shadow-md p-3">
                    <label class="font-semibold pb-3 w-full">
                        Time setting:
                    </label>
                    <div v-for="(item,index) in 12" :key="index" class="w-1/2 md:pr-2">
                        <div class="w-full flex items-center">
                            <label class="w-24 font-semibold">
                                0h-1h:
                            </label>
                            <a-slider class="w-full" :tooltipVisible="false" :default-value="20" :disabled="disabled" />
                        </div>
                    </div>
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