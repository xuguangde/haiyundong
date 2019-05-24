<template>
	<view class="container">
	<view class="c-xian" @click="navTo('/pages/hdxq/hdxq')" hover-class="cell-hover" :hover-stay-time="50">
	</view>
	<view class="mx_yi" @click="navTo('/pages/hdxq/hdxq')" hover-class="cell-hover" :hover-stay-time="50">
				<p class="mx_yi_wenzi">每日跑步收益</p>
				<text class="mx_yi_sj">2019-05-07 17:39:20</text>
				<text class="mx_yi_hdou">+0.0000475</text>
			</view>
				<view class="c-xian" @click="navTo('/pages/hdxq/hdxq')" hover-class="cell-hover" :hover-stay-time="50">
				</view>
				<view class="mx_yi" @click="navTo('/pages/hdxq/hdxq')" hover-class="cell-hover" :hover-stay-time="50">
				<p class="mx_yi_wenzi">每日跑步收益</p>
				<text class="mx_yi_sj">2019-05-07 17:39:20</text>
				<text class="mx_yi_hdou">+0.0000475</text>
			</view>
			<view class="c-xian" @click="navTo('/pages/hdxq/hdxq')" hover-class="cell-hover" :hover-stay-time="50">
			</view>
			<view class="mx_yi" @click="navTo('/pages/hdxq/hdxq')" hover-class="cell-hover" :hover-stay-time="50">
				<p class="mx_yi_wenzi">每日跑步收益</p>
				<text class="mx_yi_sj">2019-05-07 17:39:20</text>
				<text class="mx_yi_hdou">+0.0000475</text>
			</view>
			<view class="c-xian">
			</view>
			<view class="mx_yi">
				<p class="mx_yi_wenzi">每日跑步收益</p>
				<text class="mx_yi_sj">2019-05-07 17:39:20</text>
				<text class="mx_yi_hdou">+0.0000475</text>
			</view>
			<view class="c-xian">
			</view>
			<view class="mx_yi">
				<p class="mx_yi_wenzi">每日跑步收益</p>
				<text class="mx_yi_sj">2019-05-07 17:39:20</text>
				<text class="mx_yi_hdou">+0.0000475</text>
			</view>
			<view class="c-xian">
			</view>
			<view class="mx_yi">
				<p class="mx_yi_wenzi">每日跑步收益</p>
				<text class="mx_yi_sj">2019-05-07 17:39:20</text>
				<text class="mx_yi_hdou">+0.0000475</text>
			</view>
			<view class="c-xian">
			</view>
			<view class="mx_yi">
				<p class="mx_yi_wenzi">每日跑步收益</p>
				<text class="mx_yi_sj">2019-05-07 17:39:20</text>
				<text class="mx_yi_hdou">+0.0000475</text>
			</view>
			<view class="c-xian">
			</view>
			<view class="mx_yi">
				<p class="mx_yi_wenzi">每日跑步收益</p>
				<text class="mx_yi_sj">2019-05-07 17:39:20</text>
				<text class="mx_yi_hdou">+0.0000475</text>
			</view>
			<view class="c-xian">
			</view>
			<view class="mx_yi">
				<p class="mx_yi_wenzi">每日跑步收益</p>
				<text class="mx_yi_sj">2019-05-07 17:39:20</text>
				<text class="mx_yi_hdou">+0.0000475</text>
			</view>
			<view class="c-xian">
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
				
			};
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
				    		this.logout();
				    		setTimeout(()=>{
				    			uni.navigateBack();
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

<style>

	.c-xian{
		border: #01AAEF;
		height:0.5upx;
		background-color: #EEEEEE;
		margin-top:12upx;	
	}
	.mx_yi_wenzi{
		font-size:29upx;
	}
	.mx_yi_sj{
		font-size:20upx;
		color:#999999;
	}
	.mx_yi{
		margin-top:20upx;
		margin-left: 20upx;
	}
	.mx_yi_hdou{
		color: #FF0000;
		font-size: 28upx;
		margin-left: 330upx;
		margin-top:-100upx;
	}
</style>
