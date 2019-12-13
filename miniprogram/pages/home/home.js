// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    advertise: [],
    category: [],
    goods: [],
    active: '',
    isBorder: false,
    pageNum: 1,
    pageSize: 5,
    cate: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.queryAdInfo()
    this.queryCategory()
  },
  queryAdInfo: function() {
    wx.showLoading({
      title: '加载中',
    })
    let self = this
    wx.request({
      url: 'http://192.168.242.1:3000/mini/photo',
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        wx.hideLoading()
        self.setData({
          advertise: res.data
        })
      },
      fail(res) {
        wx.hideLoading()
      }
    })
  },
  queryCategory: function() {
    wx.showLoading({
      title: '加载中',
    })
    let self = this
    wx.request({
      url: 'http://192.168.242.1:3000/mini/category',
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        wx.hideLoading()
        self.setData({
          category: res.data
        })
        self.data.active = self.data.category[0]._id
        self.data.cate = self.data.category[0]._id
        self.queryGoods()
      },
      fail(res) {
        wx.hideLoading()
      }
    })
  },
  queryGoods: function() {
    wx.showLoading({
      title: '加载中',
    })
    let self = this
    wx.request({
      url: 'http://192.168.242.1:3000/mini/good/good',
      method: 'POST',
      data: {
        pageNum: self.data.pageNum,
        pageSize: self.data.pageSize,
        category: self.data.cate
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        wx.hideLoading()
        self.setData({
          goods: [...self.data.goods, ...res.data]
        })
        console.log(self.data.goods)
      },
      fail(res) {
        wx.hideLoading()
      }
    })
  },
  onClick(event) {
    // this.queryGoods()
    // this.data.active = event.detail.name
    // this.data.cate = event.detail.name
    console.log(event)
    // this.setData({
    //   category: []
    // })
    // wx.nextTick(this.queryGoods())

  },
  copy(event) {
    let item = event.target.dataset.item
    wx.setClipboardData({
      data: item.info + "\n" + item.name + "\n" + item.from,
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
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.data.pageNum++;
    this.queryGoods()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})