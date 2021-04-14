<template>
    <div class="flex flex-wrap w-full">
         <div class="w-full">
            <a-page-header
                @back="() => $router.go(-1)"
                style="border: 1px solid rgb(235, 237, 240)"
                class=""
                title="Edit Category"
                sub-title="Post category"
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
            <div class="flex w-full p-3 shadow-md">
               <div class="flex-no-shink flex-wrap pr-8 border-r">
                   <div class="flex flex-wrap w-full">
                       <div class="flex flex-wrap w-full">
                            <a-popconfirm  @confirm="addConfirm" @cancel="addCancel" title="Are you sure to add new Category ?">
                                <a-icon slot="icon" type="question-circle-o" style="color: blue" />
                                <a href="#">Add</a>
                            </a-popconfirm>
                            <a-popconfirm class="ml-2" v-if="selectedCategory != null" title="Are you sure to delete this category?">
                                <a-icon slot="icon" type="question-circle-o" style="color: red" />
                                <span class="text-red-500 cursor-pointer">Delete</span>
                            </a-popconfirm>
                    </div>
                        <a-tree
                            class="draggable-tree w-full"
                            ref="tree"
                            :default-expanded-keys="expandedKeys"
                            :autoExpandParent="true"
                            draggable
                            :tree-data="gData"
                            @dragenter="onDragEnter"
                            @drop="onDrop"
                            @select="onSelect"
                        />
                   </div>
               </div>
               <div class="flex-grow px-4">
                   <div class="flex flex-wrap w-full">
                       
                   </div>
                    <div v-if="selectedCategory != null" class="flex flex-wrap w-full">
                        <div class="flex-grow">
                            <section class="w-full flex flex-wrap mb-2">
                                <label>
                                    Category name
                                </label>
                                <a-input placeholder="input with clear icon" allow-clear v-model="selectedCategory.title" />
                            </section>
                            <section class="w-full flex flex-wrap mb-2">
                                <label>
                                    Category description
                                </label>
                                <a-input placeholder="input with clear icon" allow-clear v-model="selectedCategory.description" />
                            </section>
                        </div>
                        <div class="flex md:pl-4">
                            <div class="w-full flex flex-wrap shadow-md">
                                <img src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/email.de935b8f.svg"/>
                            </div>
                        </div>
                         <div class="flex flex-wrap w-full mt-4">
                            <a-button type="primary">
                                Save
                            </a-button>
                            <a-button class="ml-2">
                                Cancel
                            </a-button>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      gData : [ { "title": "t-0-0", "key": "0-0",description: 'test', "children": [ { "title": "t-0-0-0", "key": "0-0-0", description: 'zzz', children: [] } ] } ] ,
      expandedKeys: [],
      selectedCategory: null,
    };
  },
  methods: {
    onDragEnter(info) {
      console.log(info);
    },
    onDrop(info) {
      console.log(info);
      const dropKey = info.node.eventKey;
      const dragKey = info.dragNode.eventKey;
      const dropPos = info.node.pos.split('-');
      const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
      const loop = (data, key, callback) => {
        data.forEach((item, index, arr) => {
          if (item.key === key) {
            return callback(item, index, arr);
          }
          if (item.children) {
            return loop(item.children, key, callback);
          }
        });
      };
      const data = [...this.gData];

      // Find dragObject
      let dragObj;
      loop(data, dragKey, (item, index, arr) => {
        arr.splice(index, 1);
        dragObj = item;
      });
      if (!info.dropToGap) {
        // Drop on the content
        loop(data, dropKey, item => {
          item.children = item.children || [];
          // where to insert 示例添加到尾部，可以是随意位置
          item.children.push(dragObj);
        });
      } else if (
        (info.node.children || []).length > 0 && // Has children
        info.node.expanded && // Is expanded
        dropPosition === 1 // On the bottom gap
      ) {
        loop(data, dropKey, item => {
          item.children = item.children || [];
          // where to insert 示例添加到尾部，可以是随意位置
          item.children.unshift(dragObj);
        });
      } else {
        let ar;
        let i;
        loop(data, dropKey, (item, index, arr) => {
          ar = arr;
          i = index;
        });
        if (dropPosition === -1) {
          ar.splice(i, 0, dragObj);
        } else {
          ar.splice(i + 1, 0, dragObj);
        }
      }
      this.gData = data;
    },
    async onSelect(info,e){
        console.log(e)
        if(e.selected){
            let x = await e.selectedNodes[0].data.props.dataRef
            this.selectedCategory = x
        }
        else {
            this.selectedCategory = null
        }
    },
    addConfirm(e) {
        var vm = this;
        if(vm.selectedCategory != null){
            vm.selectedCategory.children.push({
                title: 'Category name....',
                key: 'temp-' +  Date.now(),
                children: []
            })
            vm.$refs.tree.expandedKeys = []
            vm.$refs.tree.expandedKeys.push(vm.selectedCategory.key)
            vm.selectedCategory = vm.selectedCategory.children[vm.selectedCategory.children.length-1]
        }
        else {
            vm.gData.push({
                title: 'Category name....',
                key: 'temp-' +  Date.now(),
                children: []
            })
            vm.selectedCategory = vm.gData[vm.gData.length-1]
        }
    },
    addCancel(e) {
      
    },
  },
};

</script>