// pages/balance/balance.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //余额
        balance:0,
        //套餐盒子序号
        flag:1,
        //数组存放套餐的内容
        comboList:[
            {
                balance: 100,
                text: "送27元单人套餐",
                key: 1
            },
            {
                balance: 200,
                text: "送57元双人套餐",
                key: 2
            },
            {
                balance: 300,
                text: "送86元家庭套餐",
                key: 3
            },
            {
                balance: 500,
                text: "送86元家庭套餐2份",
                key: 4
            }
        ],
        ruleList:[
            {
                key: 1,
                head: "1、",
                text: "充值100元送价值27元单人套餐1份（香辣鸡腿中国汉堡+香辣鸡翅+冰柠可乐）"
            },
            {
                key: 2,
                head: "2、",
                text: "充值200元送价值57元双人套餐1份（多只牛肉中国汉堡+上校鸡块+盐酥鸡米花+香辣鸡腿中国汉堡/藤椒鸡腿中国汉堡+冰柠可乐*2）"
            },
            {
                key: 3,
                head: "3、",
                text: "充值300元送价值86元家庭套餐1份（蜜汁手扒鸡+盐酥鸡米花+香辣鸡腿中国汉堡/藤椒鸡腿中国汉堡*2+粗薯+冰柠可乐*3）"
            },
            {
                key: 4,
                head: "4、",
                text: "充值500元送价值86元家庭套餐2份（蜜汁手扒鸡+盐酥鸡米花+香辣鸡腿中国汉堡/藤椒鸡腿中国汉堡*2+粗薯+冰柠可乐*3）"
            },
            {
                key: 5,
                head: "注：",
                text: "以上储值所赠送套餐兑换券当天可用，有效期自发送起30天有效"
            }
        ],
    },

    //点击充值选项的事件处理函数，传回点击的选项框对应的key，并赋值给flag
    tapHandlar: function(e){
        let id = e.currentTarget.dataset.info;
        this.setData({
            // 让flag等于id
            flag: id
        })
    },
    
    //点击充值按钮的事件处理函数
    btntap() {
        if(this.data.flag == 1){
            this.setData({
                balance: this.data.balance + 100
            })
        }else if(this.data.flag == 2){
            this.setData({
                balance: this.data.balance + 200
            })
        }else if(this.data.flag == 3){
            this.setData({
                balance: this.data.balance + 300
            })
        }else if(this.data.flag == 4){
            this.setData({
                balance: this.data.balance + 500
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