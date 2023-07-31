// pages/order/order.js
var util = require('../../utils/util');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    price: 0,
    address: "",
    comment: "",
    hourOne: 0,
    minOne: 0,
    hourTwo: 0,
    minTwo: 0,
    time: 0,
    year: 0,
    month: 0,
    date: 0,
    hour: 0,
    min: 0,
    sec: 0,
    InforNum: "",
    orderNum: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var TIME = util.formatTime(new Date());
    var year = (new Date()).getFullYear();
    var month = (new Date()).getMonth();
    var date = (new Date()).getDate();
    var hour = (new Date()).getHours(); //获取现在的小时
    var min = (new Date()).getMinutes(); //获取现在的分钟
    var sec = (new Date()).getSeconds();
    var hour1 = 0;
    var min1 = 0;
    var hour2 = 0;
    var min2 = 0;
    var flag = 0;
    if (min >= 30) {
      flag = 1;
      min1 = (min + 30) - 60;
      //hour1 = hour + 1;
    } else {
      min1 = min + 30;
      //hour1 = hour;
    }
    hour2 = hour + 1;
    min2 = min;
    if (hour1 < 10) {
      //hour1 = ('0' + hour1);
    }
    if (min1 < 10) {
      min1 = ('0' + min1);
    }
    if (hour2 < 10) {
      hour2 = ('0' + hour2);
    }
    if (min2 < 10) {
      min2 = ('0' + min2);
    }
    if (sec < 10){
      sec = ('0' + sec);
    }
    var InforNum = 'TST' + Math.random() * 100000000000000000;
    var orderNum = 'TST' + Math.random() * 100000000000000000;

    app.globalData.confirmOrder = 1;

    this.setData({
      time: TIME,
      hourOne: hour,
      minOne: min,
      hourTwo: hour2,
      minTwo: min2,
      year: year,
      month: month,
      date: date,
      hour: hour,
      min: min,
      sec: sec,
      InforNum: InforNum,
      orderNum: orderNum
    });

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
    var that = this;
    var listReceive = app.globalData.list; //接收过来的订单
    var priceReceive = app.globalData.price; //接收过来的金额
    var addressReceive = app.globalData.address;
    var commentReceive = app.globalData.comment;
    console.log(listReceive)
    this.setData({
      list: listReceive,
      price: priceReceive,
      address: addressReceive,
      comment: commentReceive
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
    var allOrder = [];
    allOrder = wx.getStorageSync('allOrder'); // 获取历史订单记录
    console.log(typeof wx.getStorageSync('allOrder'))
    if( wx.getStorageSync('allOrder').length<=0){
      console.log("--");
      allOrder=[];
    }
    var thisOrder = { //将要存储的订单信息
      orderTime: [this.data.year, this.data.month, this.data.date, this.data.hourOne, this.data.minOne, this.data.sec],
      orderInforNum: this.data.InforNum,
      orderorderNum: this.data.orderNum,
      orderList: this.data.list,
      orderPrice: this.data.price,
      orderAddress: this.data.address,
      orderComment: this.data.comment,
    }
    console.log('============allOrder============');
    console.log(allOrder);
    console.log('============thisOrder============');
    console.log(thisOrder);
    allOrder.push(thisOrder);
    console.log('============allOrder============');
    console.log(allOrder);
    wx.setStorageSync('allOrder', allOrder); //本地存储订单数据

    // 返回按钮倒退2页
    wx.navigateBack({
      delta: 2
    })

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