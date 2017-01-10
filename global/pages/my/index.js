var app = getApp()
Page( {
  data: {
    userInfo: {},
    projectSource: 'https://github.com/liuxuanqiang/wechat-weapp-mall',
    userListInfo: [ {
        icon: '../../images/iconfont-dingdan.png',
        text: '我的订单',
        isunread: true,
        unreadNum: 2,
        url: "../notify/notify"        
      }, {
        icon: '../../images/iconfont-card.png',
        text: '我的代金券',
        isunread: false,
        unreadNum: 2,
        url: "../feature/feature"
        
      }, {
        icon: '../../images/iconfont-icontuan.png',
        text: '我的拼团',
        isunread: true,
        unreadNum: 1,
         url: "../notify/notify"
      }, {
        icon: '../../images/iconfont-shouhuodizhi.png',
        text: '收货地址管理',
         url: "../feature/feature"
      }, {
        icon: '../../images/iconfont-kefu.png',
        text: '联系客服',
         url: "../feature/feature"
      }, {
        icon: '../../images/iconfont-help.png',
        text: '常见问题',
        url: "../feature/feature"
      }]
  },

  onLoad: function() {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  },
  bindViewTap:function(e){
     wx.navigateTo({
      url: '../profile/profile'
    })
  }
})