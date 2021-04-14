<template>
    <div class="flex w-full flex-wrap">
        <section name="group" class="w-full mb-4" v-for="(item,index) in 4" :key="index">
            <section class="w-fulll flex flex-wrap items-center text-lg">
                <span class="flex items-center mr-2 text-gray-700 bg-gray-100 p-2 rounded-full">
                    <a-icon type="user" />
                </span>
                <label class="flex items-center">
                    Information
                </label>
            </section>
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
        </section>
    </div>
</template>