// pages/business/business.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        address: "湖北省咸宁市长江产业园书台街九重锦58号咸宁九重锦小区4栋1层",
        dtb: "高品质配送",
        time: "09:00-23:30",
        server: "到店自取（享优惠）",
        scrollList :[
            {
                img: "/img/business/scroll1.png",
                id: 1
            },
            {
                img: "/img/business/scroll2.jpg",
                id: 2
            },
            {
                img: "/img/business/scroll3.jpg",
                id: 3
            },
            {
                img: "/img/business/scroll4.jpg",
                id: 4
            },
            {
                img: "/img/business/scroll5.jpg",
                id: 5
            },
            {
                img: "/img/business/scroll6.jpg",
                id: 6
            }
        ]
    },

    //点击滚动区图片的事件处理函数，如果点的是第一张图片就跳转到story页面
    tapHandlar(e) {
        if(e.target.dataset.info == 1){
            wx.navigateTo({
              url: '/pages/story/story',
            })
        }
    },
    // 点击电话图标的事件处理函数
    phoneClick() {
        
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