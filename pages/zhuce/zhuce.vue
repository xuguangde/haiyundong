<template>
		<view class="container">
				<view class="tp">
					<image src="/static/temp/tu11.png" class="top_tp"></image>
				</view>
				<view class="srk_er_xm">
				</view>
			<view class="dl_sr">
					<view class="srk_er">
						<image src="/static/temp/tu2.png" class="tpyi"></image>
						<input type="text" @input="phone" maxlength="100" placeholder="请输入手机号" class="srk_xm_er">
					</view>
				<view class="c-xian"> </view>
				<view class="srk_san_xm"></view>
				<view class="srk_san">
					<image src="/static/temp/huaj.png" class="tper"></image>
					<input type="text" @input="num" maxlength="100" placeholder="请输入您的验证码" class="srk_xm_san">
				</view>
				<view class="p-xian"> </view>
				<view class="srk_san_xm"></view>
				<view class="srk_san">
					<image src="/static/temp/tu3.png" class="tper"></image>
					<input type="password" @input="mimatta" maxlength="100" placeholder="请设置您的密码" class="srk_xm_san">
				</view>
				<view class="l-xian"> </view>
				<view class="srk_san_xm"></view>
				<view class="srk_san">
					<image src="/static/temp/tu4.png" class="tper"></image>
					<input type="text" @input="yaoqingma" maxlength="100" placeholder="请输入您的邀请码" class="srk_xm_san">
				</view>
				<view class="i-xian"> </view>
				<button class="sfyz_an_qd" @click="zhuce"> 注册</button>
				<view class="KJ"></view>
			</view>
			<view class="yzm">
				<view class="hq-yzm">获取验证码</view>
			</view>
			<view class="you_xia">
				<view class="zh_wenzi">已有账号?</view>
				<navigator url="../denglu/denglu" class="zc_wenzi">去登录</navigator>
			</view>
		</view>
</template>

<script>
	var api = require("../../utils/api.js")
	var util = require("../../utils/util.js")
	export default {
	
		data() {
			return {
				numOne:'',
				yaoqingmaOne: '',
				phoneOne: '',
				mimaOne: ''
			};
		},
		
		onLoad() {
			util.request(api.getUserLevel,{}).then(
				res =>{
					console.log("等级列表",res)
				}
			).catch()
		},
		
		onShow() {
			
		},
		
		methods: {
			phone(e){
				console.log(e.detail.value)
				var phone = e.detail.value
				var that = this;
				var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
				if (phone.length > 11) {
				  uni.showToast({
					title: '手机号长度有误！',
					icon: 'none',
					duration: 1500
				  })
				} else if (phone.length == 11){
					if (!(myreg.test(phone))) {
						uni.showToast({
						  title: '手机号有误！',
						  icon: 'none',
						  duration: 1500
						})
					} else {
						  that.phoneOne = e.detail.value
						  console.log(that.phone)
						}
					}
				},
				num(e){
					this.numOne = e.detail.value
				},
				mimatta(e){
					console.log("密码",e)
					var that = this
					that.mimaOne = e.detail.value
				},
				yaoqingma(e){
					this.yaoqingmaOne = e.detail.value
				},
				zhuce(){
					var that = this;
					util.request(api.userReg,{
						username: that.phoneOne,
						password: that.mimaOne,
						code: that.numOne,
						first_leader: that.yaoqingmaOne
					}).then(
						res =>{
							if(res.data.retcode == 1){
								util.request(api.userLogin,{username: that.phoneOne,password: that.mimaOne}).then(
									res =>{
										if(res.data.retcode == 1){
											uni.switchTab({
												url:"../user/user"
											})
											uni.setStorage({
												key: 'user',
												data: res.data.data
											})
											uni.setStorage({
												key: 'token',
												data: res.data.data.token
											})
											uni.setStorage({
												key: 'userId',
												data: res.data.data.user_id
											})
											console.log("ID",uni.getStorage('userId'))
											uni.setStorage({
												key: 'mobile',
												data: res.data.data.mobile
											})
											uni.setStorage({
												key: 'level',
												data: res.data.data.level
											})
											uni.setStorage({
												key: 'head_pic',
												data: res.data.data.head_pic
											})
											uni.setStorage({
												key: 'action_id',
												data: res.data.data.action_id
											})
											uni.showToast({
											  title: '注册成功！',
											  icon: 'none',
											  duration: 1500
											})
										}
										console.log("登陆成功",res)
									}
								)
								
							} else{
								this.$api.msg(res.data.msg)
							}
							console.log(res.data.retcode)
						}
					)
				}
			},
			
		}
</script>

<style>
	.you_xia{
		font-size: 19upx;
		margin-top:10upx;
		margin-left: -10upx;
		display: flex;
		align-items: flex-start;
	}
	.yzm{
		margin-top: 40upx;
		display: flex;
		align-items: flex-start;
	}
	.hq-yzm{
		border-radius: 10upx;
		border:1upx #F56C6C solid;
		height:55upx;
		color: #F7F7F7;
		width:150upx;
		font-size: 25upx;
		background-color: #F85E52; 
		line-height: 53upx;
		text-indent:15upx;
		margin-top:-390upx;
		margin-left:550upx;
		display: flex;
		align-items: flex-start;
	}
	.KJ{
		display: flex;
		align-items: flex-start;
		margin-top: -50upx;
	}
	.jiecu{
		margin-top: 200upx;
	}
	.BD_wenzi{
		font-size: 10upx;
		color: #999999;
		margin-left: 250upx;
	
	}
	.zc_wenzi{
		margin-left: 10upx;
		margin-top:30upx;
		font-size: 23upx;
		color: #FE8E2E;
		display: flex;
		align-items: flex-start;
	}
	.zh_wenzi{
		display: flex;
		align-items: flex-start;
		margin-top:30upx;
		margin-left: 560upx;
		font-size: 23upx;
		color: #999999;
	}
	.wjmm_wenzi{	
		margin-left: 20upx;
		font-size: 19upx;
		color: #999999;
	}
	.tp{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: flex-start;
		display: flex;
		width: 750upx;
		align-items: flex-start;
	}
	.top_tp{
		width: 750upx;
		display: flex;
		align-items: flex-start;
	}
	.top_tp_er{
		margin-top:10upx;
		z-index:9999;
	}

	.srk_er_xm{
		margin-top: 300upx;
		display: flex;
		align-items: flex-start;
	}
	
	
	.srk_yi{
		font-size:30upx;
		margin-left:40upx;
		font-size:29upx;
	}
	.srk_er{
		font-size:30upx;
		margin-left:40upx;
		font-size:29upx;
	}
	.srk_san{
		margin-top: 60upx;
		font-size:30upx;
		margin-left:40upx;
		font-size:29upx;
	}
	.srk_xm{
		margin-top:-50upx;	
		margin-left:110upx;
		font-size:28upx;
		color: #999999;
	}
	.srk_xm_er{
		height:80upx;
		margin-top:-50upx;	
		margin-left:110upx;
		font-size:28upx;
		color: #999999;
	}
	.srk_xm_san{
		height:auto;
		margin-top:-50upx;	
		margin-left:110upx;
		font-size:28upx;
		color: #999999;
	}
	.srk_yi_xm{
		margin-top:10upx;	
	}
	.srk_er_xm{
		margin-top:10upx;	
	}
	.srk_san_xm{
		margin-top:10upx;	
	}
	.b-xian{
		border: #01AAEF;
		height:15upx;
		background-color: #EEEEEE;
		margin-top:12upx;	
	}
	.c-xian{
		border: #01AAEF;
		height:0.5upx;
		background-color: #EEEEEE;
		margin-top:2upx;	
	}
	.i-xian{
		border: #01AAEF;
		height:0.5upx;
		background-color: #EEEEEE;
		margin-top:2upx;	
	}

	.l-xian{
		border: #01AAEF;
		height:3upx;
		background-color: #EEEEEE;
		margin-top:2upx;	
	}
	.p-xian{
		border: #01AAEF;
		height:3upx;
		background-color: #EEEEEE;
		margin-top:2upx;	
	}
	.sfyz_an_qd{
		font-size:29upx;
		color: #F7F7F7;
		border: #01AAEF;
		width:720upx;
		height:80upx;
		background-color: #01AAEF;
		margin-top:50upx;
		
	}
	.dl_sr{
		margin-top: 100upx;
	}
	.tpyi{
		height: 30upx;
		width: 30upx;
	}
	.tper{
		height: 30upx;
		width: 30upx;
	}
</style>
