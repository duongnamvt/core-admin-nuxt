const module = {
    namespaced: true,
    state: () => ({
        data: [
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
        ],
    }),
    mutations: { 
        
    },
    actions: { },
    getters: { 
        getAll(state){
            return state.data
        },
    }
  }
  export default module