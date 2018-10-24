//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World  ',
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    userInfo: {},
    hasUserInfo: false,
  },

  onShareAppMessage: function (res) {
  },

  //事件处理函数
  bindViewTap: function() {
    this.setData({motto: 'xx'})
    wx.showShareMenu({
      
    })
  },
  
  gotoToProductView: function() {
    wx.navigateTo({
      url: '../about/aboutMe',
    })
  },

  onLoad: function () {
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
