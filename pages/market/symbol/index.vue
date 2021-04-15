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
                <div class="w-1/2 p-2">
                    <div class="flex flex-wrap w-full shadow-md rounded-lg p-3">
                        <label class="pb-2 border-b w-full mb-4 font-semibold text-lg text-gray-600">
                            Coin
                        </label>
                        <div class="flex flex-wrap w-full mb-2">
                            <div class="w-1/6">
                                ETH
                            </div>
                            <div class="w-5/6">
                                <a-switch checked-children="On" un-checked-children="Off" default-checked />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-full mb-2">
                            <div class="w-1/6">
                                BTC
                            </div>
                            <div class="w-5/6">
                                <a-switch checked-children="On" un-checked-children="Off" default-checked />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-full mb-2">
                            <div class="w-1/6">
                                XRP
                            </div>
                            <div class="w-5/6">
                                <a-switch checked-children="On" un-checked-children="Off" default-checked />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 p-2">
                    <div class="flex flex-wrap w-full shadow-md rounded-lg p-3">
                        <label class="pb-2 border-b w-full mb-4 font-semibold text-lg text-gray-600">
                            Forex
                        </label>
                        <div class="flex flex-wrap w-full mb-2">
                            <div class="w-1/6">
                                USDVND
                            </div>
                            <div class="w-5/6">
                                <a-switch checked-children="On" un-checked-children="Off" default-checked />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-full mb-2">
                            <div class="w-1/6">
                                AUVND
                            </div>
                            <div class="w-5/6">
                                <a-switch checked-children="On" un-checked-children="Off" default-checked />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-full mb-2">
                            <div class="w-1/6">
                                OILVND
                            </div>
                            <div class="w-5/6">
                                <a-switch checked-children="On" un-checked-children="Off" default-checked />
                            </div>
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