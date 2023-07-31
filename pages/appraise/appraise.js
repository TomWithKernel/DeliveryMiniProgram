// pages/appraise/appraise.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 存放用户评价
        aprList: [
            {
                username: "窗外雾",
                headshot: "/img/appraise/headshot.png",
                value: 5,
                apr: "第一次吃，味道非常好，汉堡皮软而紧实，是大部分都爱吃的，以后肯定是第一选择，五星",
                data: "2022.11.14",
                id: 1
            },
            {
                username: "阿白89882",
                headshot: "/img/appraise/headshot.png",
                value: 5,
                apr: "确实好吃，是我认知中最好吃的汉堡店铺了。香辣鸡腿中国汉堡+培根煎蛋中国汉堡+红枣黑米浆，这三在一块图量大顶饱，饮品香，汉堡好吃，挺不错的",
                data: "2022.11.06",
                id: 2 
            },
            {
                username: "女装店主556",
                headshot: "/img/appraise/headshot.png",
                value: 5,
                apr: "就喜欢吃凤梨这款，汁水很多，百吃不厌",
                data: "2022.09.20",
                id: 3
            },
            {
                username: "匿名用户",
                headshot: "/img/appraise/headshot.png",
                value: 3,
                apr: "可乐没封口，鸡翅炸糊了",
                data: "2022.10.28",
                id: 4
            },
            {
                username: "kLi177677295",
                headshot: "/img/appraise/headshot.png",
                value: 5,
                apr: "外卖包装超精致，看起来还有设计感，食物很美味，又很干净卫生。爱了爱了，下次还会来！",
                data: "2022.09.25",
                id: 5
            },
            {
                username: "章生吧？",
                headshot: "/img/appraise/headshot.png",
                value: 5,
                apr: "鸡不错，汉堡很扎实，点了好多次了",
                data: "2022.09.28",
                id: 6
            },
            {
                username: "大白糖卷小丸子",
                headshot: "/img/appraise/headshot.png",
                value: 5,
                apr: "简直是宝藏，太好吃了，给的量也太足了！一周两次都吃不腻",
                data: "2022.10.06",
                id: 7
            },
            {
                username: "皮皮耕",
                headshot: "/img/appraise/headshot.png",
                value: 5,
                apr: "分量超足，味道好，蔬菜给的很多，沙拉酱甜度恰好，炸鸡非常酥脆。特别是这个黑芝麻！特别香！！吃完整个也不会觉得腻！无限回购",
                data: "2022.09.18",
                id: 8
            },
            {
                username: "棋韵茗茶",
                headshot: "/img/appraise/headshot.png",
                value: 3,
                apr: "老顾客了，外卖不知道点多少次了，一般都不评价！连着两次都是烤焦的送过来，做的真的越来越差！",
                data: "2022.10.06",
                id: 9
            },
            {
                username: "余卉1994",
                headshot: "/img/appraise/headshot.png",
                value: 5,
                apr: "好吃呀，味道不咸不淡，外壳炸的也酥脆，还不错，比华莱士好吃很多倍。",
                data: "2022.09.18",
                id: 10
            }
        ],
        // 商家平均分
        totalvalue: 4.6
    },

    //评分组件change事件处理函数
    onChange(event) {
        this.setData({
          value: event.detail,
        });
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