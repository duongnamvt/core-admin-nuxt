<template>
    <div class="h-screen w-full flex flex-wrap">
        <div class="w-4/6 flex items-center justify-center bg-gray-100">
            <img src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/login-v2.72cd8a26.svg"/>
        </div>
        <div class="w-2/6 flex justify-center items-center">
            <div class="flex flex-wrap w-full justify-center">
                <section class="px-10">
                    <div name="welcome" class="font-mono text-xl flex flex-wrap w-full">
                        <span class="font-semibold text-blue-500 my-2">
                            Welcome to MyAdmin
                        </span>
                        <span class="w-full text-sm">
                            Please sign-in to your account and start the adventure
                        </span>
                        <div class="flex flex-wrap w-full mt-4">
                            <div class="w-full mb-2">
                                 <a-input class="" ref="userNameInput" size="large" placeholder="UserName">
                                    <a-icon slot="prefix" type="user" />
                                    <a-tooltip slot="suffix" title="Extra information">
                                        <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                                    </a-tooltip>
                                </a-input>
                            </div>
                            <div class="w-full mb-2">
                                 <a-input class="" ref="userNameInput" size="large" placeholder="Password" type="password">
                                    <a-icon slot="prefix" type="key" />
                                    <a-tooltip slot="suffix" title="Extra information">
                                        <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                                    </a-tooltip>
                                </a-input>
                            </div>
                            <div class="w-full mb-2">
                                 <a-checkbox>
                                    Remember me
                                </a-checkbox>
                            </div>
                            <a-button @click="$router.push('/')" type="primary" block>
                                Login
                            </a-button>
                            <div class="my-3 w-full text-sm">
                                New on our platform? Create an account
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'blank'
}
</script>