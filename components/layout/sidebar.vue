<template>
  <div class="h-full">
    <div class="h-full">
        <div class="w-full flex flex-wrap">
            <span class="w-full justify-center flex border-r">
                <img class="h-16" src="https://s3.ap-southeast-1.amazonaws.com/vutatech.vn/public/uploads/system/2020-07-14/vutatech-final-01_size_1639x1639.png" />
            </span>
        </div>
        <a-menu mode="inline" :open-keys="openKeys" style="width: 256px" class="h-full" @openChange="onOpenChange">
            <a-menu-item class="flex items-center">
                <nuxt-link to="/">
                  <a-icon type="home" />
                    Dashboard
                </nuxt-link>
            </a-menu-item>
            <a-menu-item class="flex items-center">
               <nuxt-link to="gallery">
                 <a-icon type="picture" />
                    Gallery
               </nuxt-link>
            </a-menu-item>
            <a-menu-item class="flex items-center">
                <a-icon type="dollar" />
                    Currency
            </a-menu-item>
            <a-sub-menu key="">
                <span slot="title"><a-icon type="appstore" /><span>Finance Management</span></span>
                <a-menu-item key="5">
                    List
                </a-menu-item>
                <a-menu-item key="6">
                    KYC Request
                </a-menu-item>
                <a-sub-menu key="sub3" title="Top">
                    <a-menu-item key="7">
                        Vip
                    </a-menu-item>
                    <a-menu-item key="8">
                        Đại gia ( ? Eng )
                    </a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
            <a-sub-menu key="users">
                <span slot="title"><a-icon type="user" /><span>Users</span></span>
                <a-menu-item key="userlist">
                    <nuxt-link to="/users">
                        <a-icon type="ordered-list" />
                        List
                    </nuxt-link>
                </a-menu-item>
                <a-sub-menu key="role" title="Role">
                    <a-menu-item key="roleList">
                        List
                    </a-menu-item>
                    <a-menu-item key="federalism">
                        Federalism (Phân quyền)
                    </a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
            <a-sub-menu key="article">
                <span slot="title"><a-icon type="font-colors" /><span>Articles</span></span>
                <a-menu-item key="articlelist">
                    List
                </a-menu-item>
                <a-menu-item key="articleAnalytic">
                    Analytic
                </a-menu-item>
                <a-sub-menu key="articleCategory" title="Category">
                    <a-menu-item key="articleCategoryList">
                        List
                    </a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
            <a-sub-menu key="market">
                <span slot="title"><a-icon type="property-safety" /><span>Market</span></span>
                <a-menu-item key="symbolList">
                    Avaible Symbol
                </a-menu-item>
                <a-menu-item key="trackBalance">
                    Tracking Balance
                </a-menu-item>
                <a-menu-item key="copyTrading">
                    Copy Trading
                </a-menu-item>
                <a-menu-item key="handEdit">
                    Hand Edit
                </a-menu-item>
                <a-sub-menu key="historyTrade" title="History">
                    <a-menu-item key="historyTrade">
                        Trade
                    </a-menu-item>
                    <a-menu-item key="historyHandEdit">
                        Hand Edit
                    </a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
            <a-sub-menu key="setting">
                <span slot="title"><a-icon type="setting" /><span>Setting</span></span>
                <a-menu-item key="settingTradingFee">
                    Trading fee
                </a-menu-item>
                <a-menu-item key="settingGeneral">
                    General
                </a-menu-item>
                <a-menu-item key="settingNoted">
                    Noted - Maintenance
                </a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
            openKeys: ['sub1'],
            model: [
            {
              text : 'Bảng điều khiển',
              icon: '',
              url: '/dashboard',
              isSelected: true,
              permission: [
                { text: 'Xem', allow : false },
                { text: 'Thêm mới', allow : false },
                { text: 'Chỉnh sửa', allow : false },
                { text: 'Xoá', allow : false },
              ],
              child: []
            },
            {
              text : 'Thư viện hình ảnh',
              icon: '/',
              url: '/gallery',
              isSelected: false,
              permission: [
                { text: 'Xem', allow : false },
                { text: 'Thêm mới', allow : false },
                { text: 'Chỉnh sửa', allow : false },
                { text: 'Xoá', allow : false },
              ],
              child: []
            },
            {
              text : 'Currencies',
              icon: '',
              url: '/currencies',
              isSelected: false,
              permission: [
                { text: 'Xem', allow : false },
                { text: 'Thêm mới', allow : false },
                { text: 'Chỉnh sửa', allow : false },
                { text: 'Xoá', allow : false },
              ],
              child: []
            },
            {
              text : 'Quản lý tài chính',
              icon: '',
              url: '',
              isSelected: false,
              permission: [
                { text: 'Xem', allow : false },
                { text: 'Thêm mới', allow : false },
                { text: 'Chỉnh sửa', allow : false },
                { text: 'Xoá', allow : false },
              ],
              child: [
                { text: 'Tất cả tài khoản', icon: '', url :'/users/', isSelected: false,},
                { text: 'Yêu cầu KYC', icon: '', url :'/users/kyc', isSelected: false,},
                { text: 'Top đại gia', icon: '', url :'/user/top?type=1', isSelected: false,},
                { text: 'Top cao thủ', icon: '', url :'/user/top?type=2', isSelected: false,}
              ]
            },
            {
              text : 'Articles',
              icon: '',
              url: '/article',
              isSelected: false,
              permission: [
                { text: 'Xem', allow : false },
                { text: 'Thêm mới', allow : false },
                { text: 'Chỉnh sửa', allow : false },
                { text: 'Xoá', allow : false },
              ],
              child: [
                { text: 'Tất cả bài viết', icon: '', url :'/article/', isSelected: false,},
                { text: 'Chuyên mục bài viết', icon: '', url :'/article-category', isSelected: false,},
              ]
            },
            {
              text : 'Phân quyền',
              icon: '',
              url: '',
              isSelected: false,
              permission: [
                { text: 'Xem', allow : false },
                { text: 'Thêm mới', allow : false },
                { text: 'Chỉnh sửa', allow : false },
                { text: 'Xoá', allow : false },
              ],
              child: [
                { text: 'Thêm quyền quản lý', icon: '', url :'/role/', isSelected: false,},
                { text: 'Phân quyền user', icon: '', url :'/role-user', isSelected: false,},
              ]
            },
            {
              text : 'Send email',
              icon: '',
              url: '/send-mail',
              isSelected: false,
              permission: [
                { text: 'Xem', allow : false },
                { text: 'Thêm mới', allow : false },
                { text: 'Chỉnh sửa', allow : false },
                { text: 'Xoá', allow : false },
              ],
              child: []
            },
            {
              text : 'Copy trading',
              icon: '',
              url: '/copy-trade',
              isSelected: false,
              permission: [
                { text: 'Xem', allow : false },
                { text: 'Thêm mới', allow : false },
                { text: 'Chỉnh sửa', allow : false },
                { text: 'Xoá', allow : false },
              ],
              child: []
            },
            {
              text : 'Ticket',
              icon: '',
              url: '/ticket',
              isSelected: false,
              permission: [
                { text: 'Xem', allow : false },
                { text: 'Thêm mới', allow : false },
                { text: 'Chỉnh sửa', allow : false },
                { text: 'Xoá', allow : false },
              ],
              child: []
            },
            {
              text : 'Market',
              icon: '',
              url: '/market',
              isSelected: false,
              permission: [
                { text: 'Xem', allow : false },
                { text: 'Thêm mới', allow : false },
                { text: 'Chỉnh sửa', allow : false },
                { text: 'Xoá', allow : false },
              ],
              child: []
            },
            {
              text : 'Lịch sử trade',
              icon: '',
              url: '/trade-history',
              isSelected: false,
              permission: [
                { text: 'Xem', allow : false },
                { text: 'Thêm mới', allow : false },
                { text: 'Chỉnh sửa', allow : false },
                { text: 'Xoá', allow : false },
              ],
              child: []
            },
            {
              text : 'Lịch sử chỉnh tay',
              icon: '',
              url: '/custom-edit-history',
              isSelected: false,
              permission: [
                { text: 'Xem', allow : false },
                { text: 'Thêm mới', allow : false },
                { text: 'Chỉnh sửa', allow : false },
                { text: 'Xoá', allow : false },
              ],
              child: []
            },
            {
              text : 'Tracking Balance',
              icon: '',
              url: '/tracking-balance',
              isSelected: false,
              permission: [
                { text: 'Xem', allow : false },
                { text: 'Thêm mới', allow : false },
                { text: 'Chỉnh sửa', allow : false },
                { text: 'Xoá', allow : false },
              ],
              child: []
            },
            {
              text : 'Chỉnh tay',
              icon: '',
              url: '/custom-edit',
              isSelected: false,
              permission: [
                { text: 'Xem', allow : false },
                { text: 'Thêm mới', allow : false },
                { text: 'Chỉnh sửa', allow : false },
                { text: 'Xoá', allow : false },
              ],
              child: []
            },
            {
              text : 'Settings',
              icon: '',
              url: '',
              isSelected: false,
              permission: [
                { text: 'Xem', allow : false },
                { text: 'Thêm mới', allow : false },
                { text: 'Chỉnh sửa', allow : false },
                { text: 'Xoá', allow : false },
              ],
              child: [
                { text: 'Trading Fee', icon: '', url :'/setting/fee', isSelected: false,},
                { text: 'General', icon: '', url :'/setting/general', isSelected: false,},
                { text: 'Noted & Maintenance', icon: '', url :'/setting/noted', isSelected: false,},
              ]
            },
        ]
        }
    },
    methods: {
        onOpenChange(openKeys) {
            const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
            if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                this.openKeys = openKeys;
            } else {
                this.openKeys = latestOpenKey ? [latestOpenKey] : [];
            }
        },
    }
}
</script>

<style>

</style>