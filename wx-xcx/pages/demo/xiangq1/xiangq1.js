// pages/demo/xiangq1/xiangq1.js

var shuj = require('../../../data/list.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },

  shouc: function () {
    var value = wx.getStorageSync('name')  //获取本地缓存

    var did = this.data.lbid;     //找到id存到setdata是哪个id,
    var bool = value[did]; //获取缓存原来id的值
    bool = !bool;     //取反  
    value[did] = bool;    //缓存 改 数据

    wx.setStorageSync('name', value);  //保存数据到缓存

    this.setData({
      bool: bool    //更新视图
    })

//视图交互反馈
    wx.showToast({
      title: bool? '收藏成功':'取消收藏',
      icon: 'success',
      duration: 1000
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    var id = options.myid;  //把上一页的myid传到这页面来0 1 2               逻辑层是js    视图辰是data数据html里
    this.setData({      //动态绑定数据，可将动态数据传到data里面，可用   setData 函数用于将数据从逻辑层发送到视图层，同时改变对应的 this.data 的值。 
      list: shuj.list[id],  //  this.list  获取数据里的文章 TXT  用this.[ss] 表示动态数据   
      lbid: id
    });
    var value = wx.getStorageSync('name')  //获取看看有没有缓存的值

    if (value) {      //如果有缓存的值
      console.log(value+"zhen");  //      
      var hcbool = value[id]   //获取缓存里的真假
      this.setData({
        bool: hcbool      //更新视图
      });
    } else {
      console.log("jia");
      var obj = {};   //创建一个空对象
      obj[id] = false; //对象的第id个 是假
      wx.setStorageSync('name', obj)     //创建本地同步缓存  健和值
    }

    //利用本地存储完成小说收藏
    // wx.setStorageSync('name', value)     //创建本地同步缓存  健和值
    // var value = wx.getStorageSync('name')  //获取值 
    //value[1] = true;  //修改



  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})