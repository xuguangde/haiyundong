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
				<view class="c-xian">
				</view>
				<view class="srk_san_xm"></view>
				<view class="srk_san">
					<image src="/static/temp/tu3.png" class="tper"></image>
					<input type="password" @input="mima" maxlength="100" placeholder="请输入您的密码" class="srk_xm_san">
				</view>
				<view class="c-xian">
				</view>
				<button class="sfyz_an_qd" @tap="login">登录</button>
				<navigator class="wjmm_wenzi" url="../wjmm/wjmm">忘记密码?</navigator>
				<view class="KJ">
				</view>
				<view class="you_wz">
					<view class="zh_wenzi">没账号?</view>
					<navigator url="../zhuce/zhuce" class="zc_wenzi">去注册</navigator>
				</view>
				</view>
				<view class="jiecu">
				<view class="BD_wenzi">解除设备绑定（每年三次）</view>
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
				password: ''
			};
		},
		
		methods:{
			
			phone(e) {
				this.phoneOne = e.detail.value
			},
			mima(e) {
				this.password = e.detail.value
			},
			login (){
				uni.showLoading({
					title:'登录中',
				})
				util.request(api.userLogin,{username: this.phoneOne,password: this.password}).then(
					res =>{
						console.log(res)
						if(res.data.retcode == 1){
							uni.switchTab({
								url: "../user/user"
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
							console.log(res.data.data.user_id)
							uni.setStorage({
								key: 'userId',
								data: res.data.data.user_id
							})
							this.$api.msg('登陆成功')
							uni.hideLoading()
						}
					}
				)
				
			}
			
		}
	}
</script>

<style>
	.you_wz{
		margin-top:30upx;
	}
	.KJ{
		display: flex;
		align-items: flex-start;
		margin-top: -50upx;
	}
	.jiecu{
		margin-top: 200upx;
		margin-left: 50upx;
	}
	.BD_wenzi{
		font-size: 23upx;
		color: #999999;
		margin-left: 230upx;

	}
	.zc_wenzi{
		margin-left: 660upx;
		margin-top:-32upx;
		font-size: 23upx;
		color: #FE8E2E;
	}
	.zh_wenzi{
		margin-top:20upx;
		margin-left: 570upx;
		font-size: 23upx;
		color: #999999;
	}
	.wjmm_wenzi{	
		margin-left: 20upx;
		font-size: 23upx;
		color: #999999;
		margin-top:20upx;
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
		margin-left:210upx;
		font-size:28upx;
		color: #999999;
	}
	.srk_xm_er{
		height:80upx;
		margin-top:-65upx;	
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
		margin-top:10upx;	
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
