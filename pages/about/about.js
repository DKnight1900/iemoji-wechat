// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagelist: ['https://t1.aixinxi.net/o_1ca2khlkatf5uk6vjgtv4ki7a.png-j.jpg'],
    show_donate: 'none'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var appInstance = getApp()
    this.setData(
      {
        show_donate: appInstance.is_examining ? 'none' : 'block'
      }
    )
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
  
  },

  previewImage: function () {
    wx.previewImage({
      current: 'https://t1.aixinxi.net/o_1ca2khlkatf5uk6vjgtv4ki7a.png-j.jpg', // 当前显示图片的http链接
      urls: this.data.imagelist // 需要预览的图片http链接列表
    })
  },
})