// pages/choices/index.js

var select=['管理员','读者']
var identity=''
var username='',password='';

Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		show:false,//控制下拉列表的显示隐藏，false隐藏、true显示
		selectData:['管理员','读者'],//下拉列表的数据
		index:0,//选择的下拉列表下标
		array: ['管理员','读者'],
		currentChoose: 0
	},

	bindPickerChange: function (e) {
		console.log('picker发送选择改变，携带值为', e.detail.value)
		this.setData({
		  currentChoose: e.detail.value
		})

	  },
	 // 点击下拉显示框
	 selectTap(){
		this.setData({
		 show: !this.data.show
		});
	},
	 // 点击下拉列表
	 optionTap(e){
		let Index=e.currentTarget.dataset.index;//获取点击的下拉列表的下标
		this.setData({
		 index:Index,
		 show:!this.data.show,
		 s1:select[Index],
		});
		},

		//获取借书证号
		getidentity(res){
			identity=res.detail.value;
			console.log(identity);
		},

		//获取输入框中输入的用户名
		getusername(res){
			username=res.detail.value;
			console.log(username);
		},
		//获取输入框输入的密码
		getpassword(res){
			password=res.detail.value;
			console.log(password);
		},	

		//管理员登录
		login(){
			var that=this;
			if (username === '' || password=== '') {
			  wx.showToast({
				title: '输入不能为空',
				icon : 'error'
			  })
			}else{
			getApp().globalData.shenfen=select[that.data.currentChoose];
			getApp().globalData.ident=select[that.data.currentChoose];
			getApp().globalData.userID=username;
			console.log(getApp().globalData.ident);
			  wx.request({
				url: 'http://localhost:8888/login',
				method:'POST',
				data:{
				  username:username,
				  password:password,
				  role:select[that.data.currentChoose]
				},
				header: {
				  'content-type':'application/json'
				 },
				success(res){
				  console.log(res.data);
				  if (res.data == true) {
					wx.showToast({
					  title: '确认成功',
					  icon : 'success'
				  }); 
				  wx.switchTab({
					url: '/pages/main/index',
				 })
			}//if
		  }//success
		})//request
	}//else
 },

	 //读者登录
     
     

     //注册
    register() {

	
		wx.redirectTo({
		  url: '/pages/enroll/index',
		})

//     wx.request({
//       url : 'http://localhost:8888/register',
//       method : 'Get',
//       data : {
//         username : username,
//         password : password
//       },
//       success (res){
//         if (res.data == true) {
//         wx.showToast({
//           title: '注册成功',
//           icon : 'success'
//           });
//         //   wx.navigateTo({
//         //     url: '/pages/hello/helloworld',
//         //   })
//     }
//   }
// })
	

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