<template>
		<view class="container">
		<view class="b-xian"> </view>
		<view class="srk_yi_xm"></view>
			<view class="srk_yi">姓名<input type="text" maxlength="100" placeholder="输入姓名" class="srk_xm"></view>
		<view class="c-xian"> </view>
		<view class="srk_er_xm"></view>
			<view class="srk_er">身份证<input type="text" maxlength="100" placeholder="输入身份证" class="srk_xm_er"></view>
		<view class="c-xian"> </view>
		<view class="srk_san_xm"></view>
			<view class="srk_san">支付宝账号<input type="text" maxlength="100" placeholder="请输入您的支付宝" class="srk_xm_san"></view>
			<button class="sfyz_an_qd">确定</button>
		</view>
		
</template>

<script>
</script>

<style>
	.srk_yi{
		margin-left:40upx;
		margin-top: 25upx;
		font-size:29upx;
	}
	.srk_er{
		margin-top: 25upx;
		margin-left:40upx;
		font-size:29upx;
	}
	.srk_san{
		margin-top: 25upx;
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
		margin-top:-50upx;	
		margin-left:210upx;
		font-size:28upx;
		color: #999999;
	}
	.srk_xm_san{
		margin-top:-50upx;	
		margin-left:210upx;
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
		height:5upx;
		background-color: #EEEEEE;
		margin-top:25upx;	
	}
	.sfyz_an_qd{
		font-size:29upx;
		color: #F7F7F7;
		border: #01AAEF;
		width:720upx;
		height:70upx;
		background-color: #01AAEF;
		margin-top:60upx;		
		
	}
</style>
