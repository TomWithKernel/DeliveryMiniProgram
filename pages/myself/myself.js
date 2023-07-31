// pages/my/my.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 判断是否获取了用户信息
        hasUserInfo: false,
        // 判断是否有权限获取用户信息
        canIUseGetUserProfile: false,
      // 数组存放我的页面菜单数据
        List1 :[
          {
            image: "/img/my/balance.png",
            name : "账户余额",
            id : 1
          },
          {
            image : "/img/my/gift.png",
            name : "礼品卡",
            id : 2
          },
          // {
          //   image : "/images/my/information.png",
          //   name : "会员资料",
          //   id : 3
          // },
          // {
          //   image : "/images/my/task.png",
          //   name : "任务专区",
          //   id : 4
          // },
          // {
          //   image : "/images/my/exchange.png",
          //   name : "团购兑换",
          //   id : 5
          // },
          {
            image : "/img/my/shopping.png",
            name : "购物车",
            id : 6
          },
          {
            image : "/img/my/orders.png",
            name : "订单管理",
            id : 7
          },
          {
            image : "/img/my/customer.png",
            name : "联系客服",
            id : 8
          },
          {
            image : "/img/my/scan.png",
            name : "扫一扫",
            id : 9
          },
          {
            image : "/img/my/pay.png",
            name : "余额支付",
            id : 10
          }
        ],
      },

      getUserProfile(e) {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
          desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            console.log(res)
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      },

      //点击菜单各个选项的事件处理函数
      bind1(){
        wx.navigateTo({
          url: '/pages/balance/balance',
        })
      },
      bind2(){
        wx.navigateTo({
          url: '/pages/gift/gift',
        })
      },
      // 点击购物车跳转到点单页面
      bind6(){
        wx.switchTab({
          url: "/pages/index/index"
        })
      },
      // 点击订单跳转到订单页面
      bind7(){
        wx.switchTab({
          url: '/pages/allOrders/allOrders',
        })
      },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      if (wx.getUserProfile) {
        this.setData({
          canIUseGetUserProfile: true
        })
      }
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