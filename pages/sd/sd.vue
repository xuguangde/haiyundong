<template>
	<view class="container">
		<view class="ewm_bk">
		<view class="ww"><text>二维码收豆</text></view>
		<view class="ma"><image  class="erweima" src="/static/temp/tuiguang.png"></image></view>
		<!-- <view class="top_wenz_yi">(长按二维码保存到本地)</view>
		<view class="top_wenzi_er">你的每一步都算数</view>
		<view class="top_wenzi_san">二维码仅限商家面对面扫码，请勿远程扫码，谨防受骗</view> -->
		</view>
	</view>
</template>

<script>
</script>

<style>
	.ma{
		display: flex;
		justify-content: center;
	}
	.container{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #4fbeed;
		min-height: 100vh;
		width: 100%;
	}
	.ewm_bk{
		background: #FFFFFF;
		width: 90%;
		border-radius: 10upx;
	}
	.ww{
		line-height: 70upx;
		text-align: center;
		height: 70upx;
		background: #eaeaea;
		border-radius: 10upx 10upx 0 0;
		color: #4FBEED;
	}
	.ma{
		  justify-content: center; 
           align-items: center; 
	}
	.erweima{
		width: 200upx;
		height: 200upx;
	}
</style>
