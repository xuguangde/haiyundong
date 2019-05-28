<template>  
    <view class="container"> 
		<view class="user-section">
			<!-- <image class="bg" src="/static/user-bg.jpg"></image> -->
			<view class="user-info-box" @click="navTo('/pages/userinfo/grzx?user=' + nihaoa)" hover-class="common-hover"  :hover-stay-time="50">
				<view class="portrait-box">
					<image class="portrait" :src="userInfoone.head_pic || '/static/missing-face.png'"></image>
				</view>
				<view class="info-box">
					<text class="username">{{userInfoone.nickname || '点击登陆'}}</text>
					<view class="userphone">手机号:{{userInfoone.nickname}}</view>
				</view>
			</view>
			
		</view>
		
		<view 
			class="cover-container"
			:style="[{
				transform: coverTransform,
				transition: coverTransition
			}]"
			@touchstart="coverTouchstart"
			@touchmove="coverTouchmove"
			@touchend="coverTouchend"
		>
			<!-- <image class="arc" src="/static/arc.png"></image> -->
			
			<view class="tj-sction">
				<view class="tj-item" @click="navTo('/pages/yhdj/yhdj')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="num">Lv0</text>
					<text>用户等级</text>
				</view>
				<view class="tj-item" @click="navTo('/pages/Details/Details')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="num">2.021548</text>
					<text>嗨豆</text>
				</view>
				<view class="tj-item" @click="navTo('/pages/hyd/hyd')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="num">1.0</text>
					<text>活跃度</text>
				</view>
				<view class="tj-item" @click="navTo('/pages/td/td')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="num">1</text>
					<text>团队</text>
				</view>
			</view>
			<!-- 订单 -->
			<view class="one">
				<view class="onetwo">
					<view class="shop">
						商场订单
					</view>
					<view class="orderOne" @click="navTo('/pages/order/order?state=0')">
						查看全部订单>
					</view>
				</view>
			</view>
			<view class="order-section">
				
				<!-- <view class="order-item" @click="navTo('/pages/order/order?state=0')" hover-class="common-hover"  :hover-stay-time="50">
					<image class="icons" src="/static/temp/dingdan1.png"></image>
					<text>全部订单</text>
				</view> -->
				<view class="order-item" @click="navTo('/pages/order/order?state=1')"  hover-class="common-hover" :hover-stay-time="50">
					<image class="icons" src="/static/temp/dingdan2.png"></image>
					<text>待付款</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=2')" hover-class="common-hover"  :hover-stay-time="50">
					<image class="icons" src="/static/temp/dingdan3.png"></image>
					<text>待发货</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=3')" hover-class="common-hover"  :hover-stay-time="50">
					<image class="icons" src="/static/temp/dingdan4.png"></image>
					<text>待收货</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=4')" hover-class="common-hover"  :hover-stay-time="50">
					<image class="icons" src="/static/temp/dingdan5.png"></image>
					<text>已完成</text>
				</view>
			</view>
			<!-- 功能模块 -->
			
				<view class="order-sections">
					<view class="order-item" @click="navTo('/pages/wodejiaoyi/order?state=2')" hover-class="common-hover"  :hover-stay-time="50">
						<image class="icon" src="/static/temp/jiaoyi.png"></image>
						<text>我的交易</text>
					</view>
					<view class="order-item" @click="navTo('/pages/td/td')"  hover-class="common-hover" :hover-stay-time="50">
						<image class="icon" src="/static/temp/tuandui.png"></image>
						<text>我的团队</text>
					</view>
					<view class="order-item" @click="navTo('/pages/zm/zm')" hover-class="common-hover"  :hover-stay-time="50">
						<image class="icon" src="/static/temp/tuiguang.png"></image>
						<text>推广招募</text>
					</view>
					<view class="order-item" @click="navTo('/pages/huodong/huodong')" hover-class="common-hover"  :hover-stay-time="50">
						<image class="icon" src="/static/temp/huodong.png"></image>
						<text>我的活动</text>
					</view>
				</view>
				<view class="order-sections">
					<view class="order-item" @click="navTo('/pages/wodeshenfen/wodeshenfen')" hover-class="common-hover"  :hover-stay-time="50">
						<image class="icon" src="/static/temp/shenfen.png"></image>
						<text>我的身份</text>
					</view>
					<view class="order-item" @click="navTo('/pages/help/help')"  hover-class="common-hover" :hover-stay-time="50">
						<image class="icon" src="/static/temp/bangzhu.png"></image>
						<text>帮助中心</text>
					</view>
					<view class="order-item" @click="navTo('/pages/huodong/huodong')" hover-class="common-hover"  :hover-stay-time="50">
						<image class="icon" src="/static/temp/saoyisao.png"></image>
						<text>扫一扫</text>
					</view>
					<view class="order-item" @click="navTo('/pages/sd/sd')" hover-class="common-hover"  :hover-stay-time="50">
						<image class="icon" src="/static/temp/shoudouma.png"></image>
						<text>收豆码</text>
					</view>
				</view>
				<view class="order-sections">
					<view class="order-item" @click="navTo('/pages/sp/sp')" hover-class="common-hover"  :hover-stay-time="50">
						<image class="icon" src="/static/temp/shangpu.png"></image>
						<text>我的商铺</text>
					</view>
					<view class="order-item" @click="navTo('/pages/agorae/agorae')"  hover-class="common-hover" :hover-stay-time="50">
						<image class="icon" src="/static/temp/shichang.png"></image>
						<text>市场</text>
					</view>
					<view class="order-item" >
						
					</view>
					<view class="order-item" >
						
					</view>
				</view>
			
			
		</view>
			
		
    </view>  
</template>  
<script>  
	var api = require("../../utils/api.js")
	var util = require("../../utils/util.js")
	import listCell from '@/components/mix-list-cell';
    import {  
        mapState 
    } from 'vuex';  
	let startY = 0, moveY = 0, pageAtTop = true;
    export default {
		components: {
			listCell
		},
		data(){
			return {
				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				moving: false,
				userInfoone: [{head_pic:''},{nickname:''}],
				nihaoa:''
			}
		},
		onLoad(){
			
		},
		onShow() {
			var that = this
			util.request(api.userInfo,{token: uni.getStorageSync('token'),user_id: uni.getStorageSync('userId')}).then(
				res =>{
					if(res.data.retcode == 1){
						that.userInfoone = res.data.data
						that.nihaoa = JSON.stringify(res.data.data)
					} else{
						this.$api.msg('登陆过期，请从新登陆')
						that.nihaoa = 1
					}
				}
			)
			if(uni.getStorageSync('user')){
				this.userInfoone = uni.getStorageSync('user')
			}
		},
		// #ifndef MP
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if(uni.getStorageSync('token')){
				if (index === 0) {
					uni.navigateTo({
						url: '/pages/set/set?user='+ this.nihaoa
					})
				}else if(index === 1){
					// #ifdef APP-PLUS
					const pages = getCurrentPages();
					const page = pages[pages.length - 1];
					const currentWebview = page.$getAppWebview();
					currentWebview.hideTitleNViewButtonRedDot({
						index
					});
					// #endif
					uni.navigateTo({
						url: '/pages/notice/notice'
					})
				}
			}else{
				this.$api.msg("请先登陆")
			}
		},
		// #endif
        computed: {
			...mapState(['hasLogin','userInfo'])
		},
        methods: {
			/**
			 * 统一跳转接口,拦截未登录路由
			 * navigator标签现在默认没有转场动画，所以用view
			 */
			navTo(url){
				if(this.nihaoa ==1){
					this.$api.msg('登陆过期，请重新登陆')
					uni.navigateTo({
						url:'/pages/denglu/denglu'
					})
				} else{
					if(uni.getStorageSync('token')){
						uni.navigateTo({
							url: url
						})
					}else if(url=='/pages/userinfo/grzx?user='){
						uni.navigateTo({
							url: '../denglu/denglu'
						})
					}else{
						this.$api.msg('请先登陆')
					}
				}
					// url// = '/pages/denglu/denglu'; // 测试结束需要改成这个
				
			}, 
	
			/**
			 *  会员卡下拉和回弹
			 *  1.关闭bounce避免ios端下拉冲突
			 *  2.由于touchmove事件的缺陷（以前做小程序就遇到，比如20跳到40，h5反而好很多），下拉的时候会有掉帧的感觉
			 *    transition设置0.1秒延迟，让css来过渡这段空窗期
			 *  3.回弹效果可修改曲线值来调整效果，推荐一个好用的bezier生成工具 http://cubic-bezier.com/
			 */
			coverTouchstart(e){
				if(pageAtTop === false){
					return;
				}
				this.coverTransition = 'transform .1s linear';
				startY = e.touches[0].clientY;
			},
			coverTouchmove(e){
				moveY = e.touches[0].clientY;
				let moveDistance = moveY - startY;
				if(moveDistance < 0){
					this.moving = false;
					return;
				}
				this.moving = true;
				if(moveDistance >= 80 && moveDistance < 100){
					moveDistance = 80;
				}
		
				if(moveDistance > 0 && moveDistance <= 80){
					this.coverTransform = `translateY(${moveDistance}px)`;
				}
			},
			coverTouchend(){
				if(this.moving === false){
					return;
				}
				this.moving = false;
				this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
				this.coverTransform = 'translateY(0px)';
			}
        }  
    }  
</script>  
<style lang='scss'>
	%flex-center {
	 display:flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
	}
	%section {
	  display:flex;
	  justify-content: space-around;
	  align-content: center;
	  background: #fff;
	  border-radius: 10upx;
	}
	.info-box{
		margin-left: 20upx;
	}
	.one{
		display: flex;
		justify-content: center;
		width: 750upx;
		height: 40upx;
		background: #fff;
		font-size: 30upx;
		margin-top: 20upx;
		color: #999;
		line-height: 60upx;
		.onetwo{
			display: flex;
			justify-content: space-between;
			width: 700upx;
			
		}
	}
	.userphone{
		color: #999;
		font-size: 30upx;
	}
	.user-section{
		height: 200upx;
		padding: 20upx 30upx 0;
		position:relative;
		.bg{
			position:absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			filter: blur(1px);
			opacity: .7;
		}
	}
	.user-info-box{
		height: 180upx;
		display:flex;
		align-items:center;
		position:relative;
		z-index: 1;
		border-bottom: 2upx #f5f5f5 solid;
		.portrait{
			width: 130upx;
			height: 130upx;
			border:5upx solid #fff;
			border-radius: 50%;
		}
		.username{
			font-size: $font-lg + 6upx;
			color: $font-color-dark;
		}
		.number{
			font-size: $font-lg - 10upx;;
			color: $font-color-dark;
			margin-left: 20upx;
		}
	}

	.vip-card-box{
		display:flex;
		flex-direction: column;
		color: #f7d680;
		height: 240upx;
		background: linear-gradient(left, rgba(0,0,0,.7), rgba(0,0,0,.8));
		border-radius: 16upx 16upx 0 0;
		overflow: hidden;
		position: relative;
		padding: 20upx 24upx;
		.card-bg{
			position:absolute;
			top: 20upx;
			right: 0;
			width: 380upx;
			height: 260upx;
		}
		.b-btn{
			position: absolute;
			right: 20upx;
			top: 16upx;
			width: 132upx;
			height: 40upx;
			text-align: center;
			line-height: 40upx;
			font-size: 22upx;
			color: #36343c;
			border-radius: 20px;
			background: linear-gradient(left, #f9e6af, #ffd465);
			z-index: 1;
		}
		.tit{
			font-size: $font-base+2upx;
			color: #f7d680;
			margin-bottom: 28upx;
			.yticon{
				color: #f6e5a3;
				margin-right: 16upx;
			}
		}
		.e-b{
			font-size: $font-sm;
			color: #d8cba9;
			margin-top: 10upx;
		}
	}
	.cover-container{
		background: $page-color-base;
		position:relative;
		background: #f5f5f5;
		padding-bottom: 20upx;
		.arc{
			position:absolute;
			left: 0;
			top: -34upx;
			width: 100%;
			height: 36upx;
		}
	}
	.tj-sction{
		@extend %section;
		.tj-item{
			@extend %flex-center;
			flex-direction: column;
			height: 140upx;
			font-size: $font-sm;
			color: #75787d;
		}
		.num{
			font-size: 24upx;
			color: $font-color-dark;
			margin-bottom: 8upx;
		}
	}
	.order-section{
		@extend %section;
		padding: 28upx 0;
		.order-item{
			@extend %flex-center;
			width: 120upx;
			height: 120upx;
			border-radius: 10upx;
			font-size: $font-sm;
			color: $font-color-dark;
		}
		.icons{
			width: 48upx;
			height: 48upx;
			margin: 20upx;
		}
		.yticon{
			font-size: 48upx;
			margin-bottom: 18upx;
			color: #4fbeed;
		}
		.icon-shouhoutuikuan{
			font-size:44upx;
		}
	}
		.order-sections{
		@extend %section;
		padding: 28upx 0;
		margin-top: 20upx;
		background: #f5f5f5;
		.order-item{
			@extend %flex-center;
			width: 120upx;
			height: 120upx;
			border-radius: 10upx;
			font-size: $font-sm;
			color: $font-color-dark;
		}
		.icon{
			width: 71upx;
			height: 71upx;
			bottom: 20upx;
		}
		
		.yticon{
			font-size: 48upx;
			margin-bottom: 18upx;
			color: #4fbeed;
		}
		.icon-shouhoutuikuan{
			font-size:44upx;
		}
	}
	.history-section{
		padding: 30upx 0 0;
		margin-top: 20upx;
		background: #fff;
		border-radius:10upx;
		.sec-header{
			display:flex;
			align-items: center;
			font-size: $font-base;
			color: $font-color-dark;
			line-height: 40upx;
			margin-left: 30upx;
			.yticon{
				font-size: 44upx;
				color: #5eba8f;
				margin-right: 16upx;
				line-height: 40upx;
			}
		}
		.h-list{
			white-space: nowrap;
			padding: 30upx 30upx 0;
			image{
				display:inline-block;
				width: 160upx;
				height: 160upx;
				margin-right: 20upx;
				border-radius: 10upx;
			}
		}
	}
	
</style>