// pages/gift/gift.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        available: 0,
        history: 0,
        flag: 0
    },
    //可使用的点击事件处理函数
    tapHandlar1() {
        this.setData({
            flag: 0
        })
    },
    //历史礼品卡的点击事件处理函数
    tapHandlar2() {
        this.setData({
            flag: 1
        })
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