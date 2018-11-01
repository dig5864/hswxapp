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

  onShareAppMessage: function(res) {},

  //事件处理函数
  bindViewTap: function() {
    this.setData({
      motto: 'xx'
    })
    wx.showShareMenu({

    })
  },

  gotoToAboutView: function() {
    wx.navigateTo({
      url: '../about/aboutMe',
    })
  },

  gotoToProductView: function() {
    wx.switchTab({
      url: '../products/products',
    })
  },

  gotoCallView: function() {
    wx.switchTab({
      url: '../call/callMe',
    })
  },

  onLoad: function() {},

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  openMap: function() {
    wx.openLocation({
      latitude: 29.291368,
      longitude: 119.987891,
      scale: 18,
      address: '浙江省金华市义乌市西城路'
    })
  }
})