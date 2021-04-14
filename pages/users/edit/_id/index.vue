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
            <div class="flex flex-wrap w-full px-2 rounded-lg shadow-md">
                <a-tabs default-active-key="1" class="w-full">
                    <a-tab-pane key="1">
                        <span slot="tab">
                            <a-icon type="user" />
                            Account
                        </span>
                        <div class="w-full flex flex-wrap">
                            <general class="p-3"></general>
                        </div>
                    </a-tab-pane>
                    <a-tab-pane key="2">
                        <span slot="tab">
                            <a-icon type="info" />
                            Information
                        </span>
                        <information class="p-3"></information>
                    </a-tab-pane>
                    <a-tab-pane key="3">
                        <span slot="tab">
                            <a-icon type="setting" />
                            Setting
                        </span>
                        <setting class="p-3"></setting>
                    </a-tab-pane>
                </a-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import general from './components/general'
import information from './components/information'
import setting from './components/setting'
export default {
    components: {
        general,information,setting
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