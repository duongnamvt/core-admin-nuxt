<template>
    <div class="flex flex-wrap w-full">
         <div class="w-full">
            <a-page-header
                @back="() => $router.go(-1)"
                style="border: 1px solid rgb(235, 237, 240)"
                class=""
                title="Edit post"
                sub-title="Edit post"
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
            <div class="flex w-full px-2">
                <div class="flex-grow">
                    <div class="flex flex-wrap w-full">
                        <section name="form" class="w-full flex flex-wrap mb-3">
                            <label class="w-full font-semibold">
                                Title: 
                            </label>
                            <a-input placeholder="input with clear icon" allow-clear />
                        </section>
                        <section name="form" class="w-full flex flex-wrap mb-3">
                            <label class="w-full font-semibold">
                                Slug: 
                            </label>
                            <a>
                            </a>
                            <a-input placeholder="input with clear icon" allow-clear />
                        </section>
                        <section name="form" class="w-full flex flex-wrap mb-3">
                            <label class="w-full font-semibold">
                                Description: 
                            </label>
                            <a-input placeholder="input with clear icon" allow-clear />
                        </section>
                    </div>
                    <vue-editor class="w-full" v-model="content"></vue-editor>

                    <div class="flex flex-wrap w-full shadow-md p-3 my-4 rounded-lg">
                        <section name="seo" class="w-full flex flex-wrap mb-4 p-2">
                            <a-tabs class="w-full">
                                <a-tab-pane key="1" tab="SERP Google">
                                    <section name="serp" class="w-full flex flex-wrap">
                                        <div>
                                            Title
                                        </div>
                                        <div >
                                            url
                                        </div>
                                        <div>
                                            content
                                        </div>
                                    </section>
                                </a-tab-pane>
                                <a-tab-pane key="2" tab="Message display">
                                    Content of tab 2
                                </a-tab-pane>
                            </a-tabs>
                        </section>
                    </div>
                </div>
                <div class="px-4" style="width:400px;">
                    <div class="shadow-md rounded-lg p-3 mb-4">
                        <div class="flex flex-wrap w-full">
                            <img src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/email.de935b8f.svg"/>
                        </div>
                    </div>
                    <div class="shadow-md rounded-lg p-3 mb-4">
                        <div class="flex flex-wrap w-full mb-1 items-center">
                            <div class="w-3/6 font-semibold">
                                <div class="flex flex-wrap w-full items-center">
                                    <div class="flex items-center mr-1">
                                        <a-icon type="key" />
                                    </div>
                                    Status:
                                </div>
                            </div>
                            <div class="w-3/6">
                                Ai biet
                            </div>
                        </div>
                        <div class="flex flex-wrap w-full mb-1 items-center">
                            <div class="w-3/6 font-semibold">
                                <div class="flex flex-wrap w-full items-center">
                                    <div class="flex items-center mr-1">
                                        <a-icon type="calendar" />
                                    </div>
                                    Publish:
                                </div>
                            </div>
                            <div class="w-3/6">
                                Ai biet
                            </div>
                        </div>
                        <div class="flex flex-wrap w-full mb-1 items-center">
                            <div class="w-3/6 font-semibold">
                                <div class="flex flex-wrap w-full items-center">
                                    <div class="flex items-center mr-1">
                                        <a-icon type="bar-chart" />
                                    </div>
                                    Readability:
                                </div>
                            </div>
                            <div class="w-3/6">
                                Ai biet
                            </div>
                        </div>
                        <div class="flex flex-wrap w-full mb-1 items-center">
                            <div class="w-3/6 font-semibold">
                                <div class="flex flex-wrap w-full items-center">
                                    <div class="flex items-center mr-1">
                                        <a-icon type="google" />
                                    </div>
                                    SEO:
                                </div>
                            </div>
                            <div class="w-3/6">
                                Ai biet
                            </div>
                        </div>
                    </div>
                    <div class="shadow-md rounded-lg p-3 mb-4">
                        <tree-checkable></tree-checkable>
                    </div>
                    <div class="shadow-md rounded-lg p-3 mb-4">
                        <a-select mode="tags" style="width: 100%" :token-separators="[',']">
                            <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                                {{ (i + 9).toString(36) + i }}
                            </a-select-option>
                        </a-select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { VueEditor, Quill } from "vue2-editor";
import TreeCheckable from '~/components/widget/treeCheckable'
export default {
    components: {
        VueEditor,TreeCheckable
    },
    data(){
        return{
            content: "<h1>Some initial content</h1>",
            model: {
                title: '',
                slug: '',
                content: '',
                seo: {
                    title: '',
                    description: '',
                    image: '',
                },
                image: '',
                categories: [],
                tags: [],
                status: {
                    publish: 0,
                    onTime: {
                        type: 0,

                        data: new Date()
                    },
                    seoStatus: '',
                    seoReadablity: ''
                }
            }
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