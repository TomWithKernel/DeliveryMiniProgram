var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    confirmOrder:0,                                   //确认订单标志
    number: 0,                                        //商品数量
    orderList: [],                                    //购物车
    totalPrice: 0,                                    //订单总金额
    menuindex: "a0",                                  //右侧菜单跳转地址
    menu: 0,                                          //左侧菜单序号
    arrayList: ['特惠爆款', '推荐', '折扣', '中国汉堡', '带你吃鸡', '美味小食', '点餐必备', '多人套餐', '热饮套餐', '清凉饮品', '暖心热饮'],
    list: [{
        image: "/img/boxLeftFood/row1/1.png",
        name: "上校鸡块",
        count: 0,
        price: 5
      },
      {
        image: "/img/boxLeftFood/row1/8.png",
        name: "盐酥鸡",
        count: 0,
        price: 8
      },
      {
        image: "/img/boxLeftFood/row1/10.png",
        name: "上校鸡块+香辣翅尖",
        count: 0,
        price: 15
      },
      {
        image: "/img/boxLeftFood/row1/7.png",
        name: "【堡堡有福】香辣鸡腿堡x2",
        count: 0,
        price: 23
      },

      {
        image: "/img/boxLeftFood/row1/2.png",
        name: "脆皮炸鸡",
        count: 0,
        price: 20
      },
      {
        image: "/img/boxLeftFood/row1/3.png",
        name: "板烧凤梨汉堡",
        count: 0,
        price: 18
      },
      {
        image: "/img/boxLeftFood/row1/4.png",
        name: "香辣鸡腿堡+香辣鸡翅+上校鸡块+可乐",
        count: 0,
        price: 29
      },
      {
        image: "/img/boxLeftFood/row1/5.png",
        name: "香辣鸡腿堡+盐酥鸡+可乐",
        count: 0,
        price: 24
      },
      {
        image: "/img/boxLeftFood/row1/6.png",
        name: "香辣鸡腿堡x2+辣翅+翅尖+可乐x2",
        count: 0,
        price: 53
      },
      {
        image: "/img/boxLeftFood/row1/11.png",
        name: "多汁牛肉汉堡+奥尔良烤翅+可乐",
        count: 0,
        price: 29
      },
      {
        image: "/img/boxLeftFood/row1/12.png",
        name: "【双人套餐】香辣鸡腿堡+牛肉堡+薯条+盐酥鸡+可乐",
        count: 0,
        price: 48
      },
    ],
  },

  // 左侧菜单样式事件
  switchRightTab: function (e) {
    let id = e.target.dataset.id;
    this.setData({
      menu: id,
      menuindex: 'a' + e.currentTarget.dataset.id
    })
  },

  // 跳转评价页面
  gotoMessage() {
    wx.navigateTo({
      url: '/pages/appraise/appraise'
    })
  },

  // 跳转商家店铺页面
  gotoMerchants() {
    wx.navigateTo({
      url: '/pages/business/business',
    })
  },

  // 跳转结算页面
  gotoAccount() {
    
    var OrderList={                 //购物车商品+总金额
      ArrayList : this.data.list,
      price:this.data.totalPrice
    }
    if(this.data.number > 0){
      wx.navigateTo({
        url: '/pages/account/account?param='+JSON.stringify(OrderList),
      })
    }
    
  },

  // 商品加
  commodity_addition(e) {
    var info = e.currentTarget.dataset.info;
    var price = e.currentTarget.dataset.info.price;
    var id = e.currentTarget.dataset.index;
    var array = this.data.list;
    var foodNum = this.data.number;
    foodNum += 1;
    array[id].count++;
    app.globalData.foodNum = foodNum;
    this.setData({
      list: array,
      totalPrice: this.data.totalPrice + price,
      number: foodNum
    })
  },

  // 商品减
  commodity_subtract(e) {
    var info = e.currentTarget.dataset.info;
    var price = e.currentTarget.dataset.info.price;
    var id = e.currentTarget.dataset.index;
    var array = this.data.list;
    var foodNum = this.data.number;
    if(foodNum>0){
      foodNum -= 1;
    }
    app.globalData.foodNum = foodNum;
    if (array[id].count > 0) {
      array[id].count--;
      this.setData({
        list: array,
        totalPrice: this.data.totalPrice - price,
        number:foodNum
      })
    }
  },

  


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
    var confirmOrder = app.globalData.confirmOrder;
    var list1 = this.data.list;
    if(confirmOrder==1){
      for(var i=0;i<list1.length;i++){
        list1[i].count=0;
      }
      app.globalData.foodNum = 0;
        this.setData({
         list:list1,
         totalPrice:0
       })
    }
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