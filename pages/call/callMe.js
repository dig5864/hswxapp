Page({

  data: {
    tel: 0,
    telNumber: '15657955066'
  },

  onLoad: function(options) {

  },

  onShow: function() {
    if (this.data.tel == 0)
      wx.makePhoneCall({
        phoneNumber: this.data.telNumber,
        complete: () => {
          this.setData({
            tel: 1
          });
        }
      })
  },

  onHide: function() {
    wx.switchTab({
      url: '../index/index'
    })
    this.setData({
      tel: 0
    })
  }

})