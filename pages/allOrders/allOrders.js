// pages/allOrders/allOrders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allOrder: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var allOrder = wx.getStorageSync('allOrder'); // 获取历史订单记录
    var allorder = [];
    for(let i = allOrder.length-1;i>=0;i--){
        allorder.push(allOrder[i]);
    }
    this.setData({
      allOrder:allorder
    })
    console.log('=============page:allOrders===================')
    console.log(this.data.allOrder)
  },

  nextOrder(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    var allOrder = wx.getStorageSync('allOrder'); // 获取历史订单记录
    var allorder = [];
    for(let i = allOrder.length-1;i>=0;i--){
        allorder.push(allOrder[i]);
    }
    this.setData({
      allOrder:allorder
    })
    console.log('=============page:allOrders===================')
    console.log(this.data.allOrder)
  },

  nextOrder(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})