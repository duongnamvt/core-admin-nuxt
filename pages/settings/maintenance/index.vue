<template>
    <div class="flex flex-wrap w-full">
         <div class="w-full">
            <a-page-header
                @back="() => $router.go(-1)"
                style="border: 1px solid rgb(235, 237, 240)"
                class=""
                title="Maintenance & Noted"
                sub-title="Set the state of website"
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
                <div class="w-1/2 px-1">
                    <div class="flex flex-wrap w-full p-2">
                        <div class="border-b pb-2 mb-4 w-full font-semibold text-lg">
                            Notification
                        </div>
                        <div class="w-full flex flex-wrap mb-4">
                            <div class="w-1/6">
                                Active
                            </div>
                            <div class="w-5/6">
                                <a-switch checked-children="On" un-checked-children="Off" default-checked />
                            </div>
                        </div>
                        <editor class=""></editor>
                    </div>
                </div>
                <div class="w-1/2 px-1">
                    <div class="flex flex-wrap w-full p-2">
                        <div class="border-b pb-2 mb-4 w-full font-semibold text-lg">
                            Maintenance
                        </div>
                        <div class="w-full flex flex-wrap mb-4">
                            <div class="w-1/6">
                                Active
                            </div>
                            <div class="w-5/6">
                                <a-switch checked-children="On" un-checked-children="Off" default-checked />
                            </div>
                        </div>
                        
                        <div class="w-full flex flex-wrap mb-4 items-center">
                            <div class="w-1/6">
                                Time
                            </div>
                            <div class="w-5/6">
                                <a-range-picker
                                :show-time="{ format: 'HH:mm' }"
                                format="YYYY-MM-DD HH:mm"
                                :placeholder="['Start Time', 'End Time']"
                                />
                            </div>
                        </div>

                        <div class="w-full flex flex-wrap mb-4">
                            <div class="w-1/6">
                                Ex IP:
                            </div>
                            <div class="w-5/6">
                                <a-select mode="tags" style="width: 100%" :token-separators="[',']">
                                    <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                                        {{ (i + 9).toString(36) + i }}
                                    </a-select-option>
                                </a-select>
                            </div>
                        </div>

                        <editor class=""></editor>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import editor from '~/components/widget/editor'
export default {
    components: {
        editor
    },
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