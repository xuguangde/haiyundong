<template>
		<view class="container">
		<view class="b-xian"> </view>
		<view class="srk_yi_xm"></view>
		<view class="srk_yi">
			旧密码
			<input type="password" @input="oldPassword" maxlength="100" placeholder="填写旧密码" class="srk_xm">
		</view>
		<view class="c-xian"> </view>
		<view class="srk_er_xm"></view>
		<view class="srk_er">
			新密码
			<input type="password" @input="newPassword"  maxlength="100" placeholder="填写新密码" class="srk_xm_er">
		</view>
		<view class="c-xian"></view>
		<view class="srk_san_xm"></view>
		<view class="srk_san">
			确认密码
			<input type="password" @input="renewPassword"  maxlength="100" placeholder="再次输入确认" class="srk_xm_san">
		</view> 
		<button class="sfyz_an_qd" @click="yes">确定</button>
	</view>
		
</template>

<script>
	var api = require("../../utils/api.js")
	var util = require("../../utils/util.js")
	var old_password = '';
	var new_password = '';
	var renew_password = '';
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
			util.request(api.password,{}).then(
				res =>{
					console.log("等级列表",res)
				}
			).catch()
		},
		
		onShow() {
			
		},
		
		methods: {
				
				oldPassword(e){
					console.log(e)
					old_password = e.detail.value
				},
				newPassword(e){
					console.log(e)
					new_password = e.detail.value
				},
				renewPassword(e){
					console.log(e)
					renew_password = e.detail.value
				},
				yes (){
					util.request(api.password,{token: uni.getStorageSync('token'),user_id: uni.getStorageSync('userId'),old_password: old_password,new_password: new_password,renew_password:renew_password}).then(
						res =>{
							console.log("等级列表",res)
							if (res.data.retcode == 1){
								uni.showToast({
									icon: 'none',
									title: res.data.msg,
									duration: 1500
								})
								setTimeout(function(){
									uni.navigateTo({
										url: "../denglu/denglu"
									})
								},2000)
							} else{
								uni.showToast({
									icon: 'none',
									title: res.data.msg,
									duration: 1500
								})
							}
						}
					).catch()
				}
			}
		}
</script>

<style>
	.srk_yi{
		font-size:30upx;
		margin-top: 30upx;
		margin-left:40upx;
		font-size:29upx;
	}
	.srk_er{
		margin-top: 30upx;
		font-size:30upx;
		margin-left:40upx;
		font-size:29upx;
	}
	.srk_san{
		margin-top: 30upx;
		font-size:30upx;
		margin-left:40upx;
		font-size:29upx;
	}
	.srk_xm{
		margin-top:-50upx;	
		margin-left:160upx;
		font-size:28upx;
		color: #999999;
	}
	.srk_xm_er{
		margin-top:-50upx;	
		margin-left:160upx;
		font-size:28upx;
		color: #999999;
	}
	.srk_xm_san{
		margin-top:-50upx;	
		margin-left:160upx;
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
		margin-top:20upx;	
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
</style>
