<template>
	<view class="container">
		<view class="list-cell">
			<text class="cell-tit">手机号</text>
			<text class="cell-tip">{{user.mobile}}</text>
		</view>
		<view class="list-cell">
			<text class="cell-tit">用户等级</text>
			<text class="cell-tip">LV{{user.level}}</text>
		</view>
		<view class="list-cell">
			<text class="cell-tit">信用等级</text>
			<text class="cell-tip">正常</text>
		</view>
		<view class="list-cell b-b m-t" @click="navTo('/pages/xiugaimm/xiugaimm')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">登陆密码</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<view class="list-cell b-b" @click="navTo('/pages/lognum/paynum')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">支付密码</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<view class="list-cell" @click="navTo('/pages/authentication/authentication')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">实名认证</text>
			<text class="cell-tip">{{user.is_real == 1?'已认证':'未认证'}}</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<!-- <view class="list-cell m-t">
			<text class="cell-tit">消息推送</text>
			<switch checked color="#fa436a" @change="switchChange" />
		</view> -->
		<view class="list-cell m-t b-b" @click="navTo('/pages/skfs/skfs')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">收款方式</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<view class="list-cell m-t b-b" @click="navTo('/pages/address/address')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">收货地址</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<view class="list-cell m-t b-b">
			<text class="cell-tit">版本号</text>
			<text class="cell-tip">当前版本 1.0.3</text>
		</view>
		<!-- <view class="list-cell b-b" @click="navTo('关于Dcloud')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">关于Dcloud</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<view class="list-cell">
			<text class="cell-tit">检查更新</text>
			<text class="cell-tip">当前版本 1.0.3</text>
			<text class="cell-more yticon icon-you"></text>
		</view> -->
		<view class="list-cell log-out-btn" @click="toLogout">
			<text class="cell-tit">退出登录</text>
		</view>
	</view>
</template>

<script>
	import {  
	    mapMutations  
	} from 'vuex';
	export default {
		data() {
			return {
				user:'',
				phone: uni.getStorageSync('mobile'),
				level: uni.getStorageSync('level'),
			};
		},
		onLoad(options) {
			// console.log(JSON.parse(options.user))
			this.user = JSON.parse(options.user)
		},
		methods:{
			...mapMutations(['logout']),

			navTo(url){
				if(!this.hasLogin){
					//url = '/pages/public/login';  测试结束需要改成这个
					url
				}
				uni.navigateTo({  
					url
				})  
			}, 
			//退出登录
			toLogout(){
				uni.showModal({
				    content: '确定要退出登录么',
				    success: (e)=>{
				    	if(e.confirm){
				    		// this.logout();
							uni.clearStorage();
				    		setTimeout(()=>{
								uni.navigateTo({
									url:"../denglu/denglu"
								})
				    		}, 200)
				    	}
				    }
				});
			},
			//switch
			switchChange(e){
				let statusTip = e.detail.value ? '打开': '关闭';
				this.$api.msg(`${statusTip}消息推送`);
			},

		}
	}
</script>

<style lang='scss'>
	page{
		background: $page-color-base;
	}
	.list-cell{
		display:flex;
		align-items:baseline;
		padding: 20upx $page-row-spacing;
		line-height:60upx;
		position:relative;
		background: #fff;
		justify-content: center;
		&.log-out-btn{
			margin-top: 40upx;
			.cell-tit{
				color: $uni-color-primary;
				text-align: center;
				margin-right: 0;
			}
		}
		&.cell-hover{
			background:#fafafa;
		}
		&.b-b:after{
			left: 30upx;
		}
		&.m-t{
			margin-top: 16upx; 
		}
		.cell-more{
			align-self: baseline;
			font-size:$font-lg;
			color:$font-color-light;
			margin-left:10upx;
		}
		.cell-tit{
			flex: 1;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			margin-right:10upx;
		}
		.cell-tip{
			font-size: $font-base;
			color: $font-color-light;
		}
		switch{
			transform: translateX(16upx) scale(.84);
		}
	}
</style>
