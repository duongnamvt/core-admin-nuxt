<template>
  <div class="w-full flex-no-shink flex-wrap">
    <div class="w-full">
      <a-page-header
        @back="() => $router.go(-1)"
        style="border: 1px solid rgb(235, 237, 240)"
        class=""
        title="Dashboard"
        sub-title="Trang quản lý tổng hợp"
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
        <div class="w-2/6">
          <div class="w-full flex flex-wrap relative shadow-lg h-32 p-4 bg-white rounded-lg">
            <span class="text-lg font-semibold">
              Congratulations 🎉 John
            </span>
            <img class="absolute h-24" style="right:10px;top:5px" src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/badge.0fa134b5.svg"/>
          </div>
        </div>
        <div class="w-4/6">
          <div class="w-full flex flex-wrap shadow-lg p-4 bg-white rounded-lg ml-0 md:ml-4">
            <div class="w-full flex flex-wrap">
              <div class="flex-grow font-semibold text-lg">
                Statistics
              </div>
              <div class="flex text-sm">
                Updated 1 month ago
              </div>
            </div>
            <div class="w-full flex flex-wrap py-2">
              <div class="w-full flex flex-wrap">
                <section class="flex items-center h-16 w-1/4" v-for="(item,index) in 4" :key="index">
                  <span class="p-3 rounded-full bg-blue-100">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                  </span>
                  <span class="font-semibold text-gray-700 text-lg ml-2 text-center">
                    240
                    <p class="text-xs">
                      User
                    </p>
                  </span>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-wrap mt-6">
        <card-small>
          <template #icon>
              <span class="p-2 rounded-full bg-red-100">
                <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="text-red-400"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </span>
          </template>
          <template #text>
            User
          </template>
          <template #sub>
            current
          </template>
        </card-small>
      </div>
      <div class="w-1/4 pl-2 pr-1">
        <card>
          <template #text>
            TEsstt
          </template>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import cardSmall from '~/components/widget/card-1'
import card from '~/components/widget/card-2'
export default {
  components: {
    cardSmall,card
  },
  data() {
    return {
      routes: [
        {
          path: "/",
          breadcrumbName: "First-level Menu",
        },
        {
          path: "/1",
          breadcrumbName: "Second-level Menu",
        },
        {
          path: "/2",
          breadcrumbName: "Third-level Menu",
        },
      ],
    };
  },
  mounted() {
    var vm = this;
    vm.$nextTick(() => {
      
    });
  },
};
</script>

<style>
.apexcharts-grid {
  display: none;
}
</style>
