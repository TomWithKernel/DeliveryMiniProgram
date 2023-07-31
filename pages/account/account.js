// pages/evaluate/evaluate.js
var util = require('../../utils/util');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {                       
    address:"0",                     //地址
    telNum:0,                       //电话号
    comment:"",                     //备注
    MyOrderData:[],                 //购物车数据
    totalPrice:0,                   //总金额
    method:0,
    time:0,
    hourOne:0,
    minOne:0,
    hourTwo:0,
    minTwo:0,
    telephoneNum:'请输入电话号码',
    iscpn:false,
    warning:0,
    warningMethod:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var TIME = util.formatTime(new Date());
    var year= (new Date()).getFullYear();
    var month= (new Date()).getMonth();
    var day= (new Date()).getDay();
    var hour= (new Date()).getHours();        //获取现在的小时
    var min= (new Date()).getMinutes();       //获取现在的分钟
    var sec = (new Date()).getSeconds();
    var hour1=0;
    var min1=0;
    var hour2=0;
    var min2=0;
    var flag=0;
    if (min>=30) {
      flag=1;
      min1=(min+30)-60;
      hour1=hour+1;
    }else{
      min1=min+30;
      hour1=hour;
    }
    hour2=hour+1;
    min2=min;
    if(hour1<10){
      hour1=('0'+hour1);
    }
    if(min1<10){
      min1=('0'+min1);
    }
    if(hour2<10){
      hour2=('0'+hour2);
    }
    if(min2<10){
      min2=('0'+min2);
    }
    this.setData({
      time: TIME,
      hourOne:hour1,
      minOne:min1,
      hourTwo:hour2,
      minTwo:min2
    });
    
    
    var OrderData = [];                                    //接收的list（包括商品数量为0的商品）
    OrderData = JSON.parse(options.param);
    var price = OrderData.price;
    var reallyOrder = [];                                    //真正的订单
    for(let i = 0;i<OrderData.ArrayList.length;i++)
    {
      if(OrderData.ArrayList[i].count!=0){
        reallyOrder.push(OrderData.ArrayList[i]);
      }
    }

    this.setData({
      totalPrice:price,
      MyOrderData:reallyOrder
    })
    
  },

  switchTab(e){
    let id = e.target.dataset.id;
    this.setData({
        method: id
      })
  },

  handleCpn(){
    this.setData({
      iscpn:!this.data.iscpn
    })
  },

  closeTab(){
    console.log('closeTab')
  },

  //地址绑定
  inputAddress(e){
    var address = e.detail.value;
    console.log('地址:'+address);
     this.setData({
      address:address
     })
  },

  // 自取电话绑定
  inputNum(e){
    var telNum = e.detail.value;
    console.log('电话:'+telNum);
     this.setData({
      telNum:telNum
     })
  },

  // 备注绑定
  inputMsg(e){
    var comment = e.detail.value;
    console.log('备注:'+comment);
     this.setData({
       comment:comment
     })
  },

  //提交订单->订单页面
  gotoOrder() {
    var warning = 0;
    var warningMethod = 0;
    app.globalData.list=this.data.MyOrderData;
    app.globalData.price=this.data.totalPrice;
    app.globalData.address=this.data.address;
    app.globalData.comment=this.data.comment;
    app.globalData.telphone=this.data.telNum;
    if(this.data.method == 0){
      if(this.data.address == 0){
        warning = 1;
        warningMethod = 0;
        this.setData({
          warning:warning,
          warningMethod:warningMethod
        })
      }else{
        wx.navigateTo({
          url: '/pages/order/order'
        })
      }
    }else{
      if(this.data.telNum == 0){
        warning = 1;
        warningMethod = 1;
        this.setData({
          warning:warning,
          warningMethod:warningMethod
        })
      }else{
        wx.navigateTo({
          url: '/pages/pickUpCode/pickUpCode'
        })
      }
    }
    
    
  },

  check(){
    var warning = 0;
    this.setData({
      warning:warning
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