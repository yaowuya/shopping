// components/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     proActive:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0
  },
  lifetimes:{
    attached: function () {
      // 在组件实例进入页面节点树时执行
      this.setData({
        active:this.data.proActive
      })
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.setData({ active: event.detail });
    },
    gotoUrl:function(event){
      console.log(event.target.dataset.url)
      wx.navigateTo({
        url:'../../'+event.target.dataset.url,
      })
    }
  }
})
