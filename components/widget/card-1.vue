<template>
  <section class="w-1/6 p-2">
        <div class="flex flex-wrap w-full shadow-md rounded-lg px-3 py-6">
            <div class="flex flex-wrap w-full justify-center">
            <slot name="icon">

            </slot>
            <!-- <span class="p-2 rounded-full bg-red-100">
                <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="text-red-400"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </span> -->
            <span class="text-2xl text-gray-600 font-semibold w-full justify-center flex">
                <slot name="text">

                </slot>
            </span>
            <span class="text-sm text-gray-600 w-full justify-center flex">
                <slot name="sub">

                </slot>
            </span>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>