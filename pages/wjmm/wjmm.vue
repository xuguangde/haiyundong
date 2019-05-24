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
					<input type="password" @input="password" maxlength="100" placeholder="请设置您的密码" class="srk_xm_san">
				</view>
				<view class="l-xian"> </view>
				<view class="srk_san_xm"></view>
				<view class="srk_san">
					<image src="/static/temp/tu4.png" class="tper"></image>
					<input type="password"  @input="passwordOne" maxlength="100" placeholder="请确认您的新密码" class="srk_xm_san">
				</view>
				<view class="i-xian"> </view>
				<button class="sfyz_an_qd" @tap="yes">确认</button>
				<view class="KJ"></view>
			</view>
			<view class="yzm">
				<view class="hq-yzm" @tap="yzm">获取验证码</view>
			</view>
			<view class="you_xia">
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
				code: '',
				phoneOne: '',
				mimaOne: '',
				mimaTwo: ''
			};
		},
		methods: {
			phone(e){
				this.phoneOne = e.detail.value
			},
			num (e){
				this.code = e.detail.value
			},
			password (e){
				this.mimaOne = e.detail.value
			},
			passwordOne (e){
				this.mimaTwo = e.detail.value
			},
			yes (){
				console.log("你好")
				var that = this;
				if(that.mimaOne != that.mimaTwo){
					uni.showToast({
						title: '密码不一致',
						icon: 'none',
						duration: 1500
					})
				} else{
					console.log(api.forgetPassword)
					util.request(api.forgetPassword,{mobile:that.phoneOne,password: that.mimaOne,repassword: that.mimaTwo,check_code: that.code}).then(
						res =>{
							if(res.data.retcode == 1){
								uni.showToast({
									title: '修改成功',
									icon: 'none',
									duration: 1500
								})
								setTimeout(function (){
									uni.navigateTo({
										url: "../denglu/denglu"
									})
									},2000);
							}else{
								uni.showToast({
									title: res.data.msg,
									icon: 'none',
									duration: 1500
								})
							}
						}
					)
				}
			}
		}
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
		margin-left: 660upx;
		margin-top:15upx;
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
