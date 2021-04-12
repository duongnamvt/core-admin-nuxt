<template>
  <div class="w-full flex-no-shink flex-wrap">
    <div class="w-full">
      <a-page-header
        @back="() => $router.go(-1)"
        style="border: 1px solid rgb(235, 237, 240)"
        class=""
        title="Gallery"
        sub-title="Image,File upload & management"
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
        <div class="w-1/6 shadow-md p-3">
            <a-directory-tree multiple default-expand-all @select="onSelect" @expand="onExpand">
                <a-tree-node key="0-0" title="Ảnh 2020">
                <a-tree-node key="0-0-0" title="Du lịch điện biên" is-leaf />
                <a-tree-node key="0-0-1" title="Du lịch Dubai" is-leaf />
                </a-tree-node>
                <a-tree-node key="0-1" title="Ảnh 2021">
                <a-tree-node key="0-1-0" title="Lên thiên đường" is-leaf />
                <a-tree-node key="0-1-1" title="Wowy" is-leaf />
                </a-tree-node>
            </a-directory-tree>
        </div>
        <div class="w-5/6 md:pl-4">
            <div class="flex flex-wrqp w-full shadow-md p-4">
                <div class="flex flex-wrap w-full">
                    <div class="w-full">
                        <a-breadcrumb>
                            <a-breadcrumb-item>Home</a-breadcrumb-item>
                            <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
                            <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
                            <a-breadcrumb-item>An Application</a-breadcrumb-item>
                        </a-breadcrumb>
                    </div>
                    <div class="flex flex-wrap w-full my-4">
                        <div class="w-1/6" v-for="(item,index) in items" :key="index">
                            <div class="w-full flex flex-wrap p-2">
                                <div class="w-full flex flex-wrap rounded-lg shadow-md">
                                    <img class="w-full rounded-t-lg" :src="item.url" />
                                    <div class="content flex flex-wrap w-full">
                                        <span class="px-2 py-1 font-semibold text-gray-700">
                                            {{item.title}}
                                        </span>
                                        <span class="w-full flex text-xs justify-end px-2 py-1">
                                            {{item.date}}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap w-full">
                         <a-pagination :total="500" :item-render="itemRender" />
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
  components: {
    
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
      items: [
          { 
              id: 1, title: '1', url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/04.50dac1e3.jpg', description: '', date: '20/10/30'
          },
           { 
              id: 2, title: '1', url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/03.ada37056.jpg', description: '', date: '20/10/30'
          },
           { 
              id: 3, title: '1', url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/06.95d1c509.jpg', description: '', date: '20/10/30'
          },
            { 
              id: 4, title: '1', url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/01.2568fbfb.jpg', description: '', date: '20/10/30'
          },
          { 
              id: 5, title: '1', url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/02.f1d48d72.jpg', description: '', date: '20/10/30'
          },
          { 
              id: 6, title: '1', url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/04.50dac1e3.jpg', description: '', date: '20/10/30'
          },
          { 
              id: 1, title: '1', url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/04.50dac1e3.jpg', description: '', date: '20/10/30'
          },
           { 
              id: 2, title: '1', url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/03.ada37056.jpg', description: '', date: '20/10/30'
          },
           { 
              id: 3, title: '1', url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/06.95d1c509.jpg', description: '', date: '20/10/30'
          },
            { 
              id: 4, title: '1', url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/01.2568fbfb.jpg', description: '', date: '20/10/30'
          },
          { 
              id: 5, title: '1', url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/02.f1d48d72.jpg', description: '', date: '20/10/30'
          },
          { 
              id: 6, title: '1', url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/04.50dac1e3.jpg', description: '', date: '20/10/30'
          },
          { 
              id: 1, title: '1', url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/04.50dac1e3.jpg', description: '', date: '20/10/30'
          },
           { 
              id: 2, title: '1', url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/03.ada37056.jpg', description: '', date: '20/10/30'
          },
           { 
              id: 3, title: '1', url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/06.95d1c509.jpg', description: '', date: '20/10/30'
          },
            { 
              id: 4, title: '1', url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/01.2568fbfb.jpg', description: '', date: '20/10/30'
          },
          { 
              id: 5, title: '1', url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/02.f1d48d72.jpg', description: '', date: '20/10/30'
          },
          { 
              id: 6, title: '1', url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/04.50dac1e3.jpg', description: '', date: '20/10/30'
          },
      ]
    };
  },
  methods: {
    onSelect(keys, event) {
      console.log('Trigger Select', keys, event);
    },
    onExpand() {
      console.log('Trigger Expand');
    },
    itemRender(current, type, originalElement) {
      if (type === 'prev') {
        return <a>Previous</a>;
      } else if (type === 'next') {
        return <a>Next</a>;
      }
      return originalElement;
    },
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
