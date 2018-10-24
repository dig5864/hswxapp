Page({

  data: {
    tel: 0
  },

  onLoad: function (options) {

  },

  onShow: function () {
    if (!this.data.tel > 0) {
      wx.makePhoneCall({
        phoneNumber: '123456789',
        success: () => {
          setTimeout(() => {
            this.setData({
              tel: 0
            })
          }, 500);
        }
      })
      this.setData({
        tel: 1
      })
    }
  },

  onHide: function () {
    wx.switchTab({
      url: '../index/index'
    })
  }

})