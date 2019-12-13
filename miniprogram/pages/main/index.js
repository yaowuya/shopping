// pages/main/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
   
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  copy:function(){
    wx.setClipboardData({
      data:`
【京东配送】膳魔师 儿童吸管保温杯 
360ml GR001
京东价：¥199
内购价：¥99 儿童吸管保温杯
抢券+下单：https://u.jd.com/bXJPKh
      `,
      success() {
        console.log('success')
      }
    })
    wx.getClipboardData({
      success(res) {
        console.log(res.data)
      }
    })
  },
  query:function(){
    wx.request({
      url: 'http://192.168.242.1:3000/mini/category',
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})