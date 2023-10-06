// pages/index/index.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
	  shenfen:'',
    deviceList:[
		{
            icon:"images/human.png",
            title:"人文社科",
            left:2,
            click:"cokeCola"
        },
        {
            icon:"images/nature.png",
            title:"自然科学",
            left:0,
            click:"pepsiCola"
        },
        {
            icon:"images/economy.png",
            title:"经济管理",
            left:0,
            click:"nongFu"  
        },
        {
            icon:"images/profession.png",
            title:"专业书籍",
            left:0,
            click:"hongNiu"
        }
	], 
    deviceId: '',
    mydeviceId: ''
  },


	borrow1(){
    // let key='自然科学';
   	wx.navigateTo({
      url: '/pages/borrow/index?key=自然科学',
  })
},
	borrow2(){
  	wx.navigateTo({
    url: '/pages/borrow/index?key=人文社科',
 })
},
	borrow3(){
   	wx.navigateTo({
      url: '/pages/borrow/index?key=经济管理',
  })
},
	borrow4(){
   	wx.navigateTo({
      url: '/pages/borrow/index?key=专业书籍',
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let addDeviceId = options.device_id;
	this.setData({
		shenfen:app.globalData.ident
	})
	
   
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
		console.log(app.globalData.userID)
		this.setData({
			shenfen:app.globalData.ident

		})
    if (app.globalData.isLogin) {
      wx.request({
        url: 'https://www.yiyu951.xyz/device/getDeviceList',
        method: 'POST',
        data: {
          openid: wx.getStorageSync('openid')
        },

        success: (res) => {
          console.log(res.data)
          this.setData({
			deviceList: res.data,
			
          })
        }
      })
    }
  },


  check_device: function () {},
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


  add_device: function () {
    wx.navigateTo({
	  url: '/pages/returnbook/return',
	})
  },

  addbook(){
	wx.navigateTo({
		url: '/pages/addbook/add',
	  })
  }
})