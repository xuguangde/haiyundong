<template>
		<view class="container">
		<view class="b-xian"> </view>
		<view class="srk_yi_xm"></view>
			<text class="srk_yi">旧密码
				<input type="text" maxlength="100" placeholder="填写旧密码" class="srk_xm">
			</text>
		<view class="c-xian"> </view>
		<view class="srk_er_xm"></view>
			<text class="srk_er">新密码<input type="text" maxlength="100" placeholder="输入新密码" class="srk_xm_er"></text>
		<view class="c-xian"> </view>
		<view class="srk_san_xm"></view>
			<text class="srk_san">确认密码<input type="text" maxlength="100" placeholder="再次输入确认" class="srk_xm_san"></text>
			<button class="sfyz_an_qd">确定</button>
		</view>
		
</template>

<script>
	uni.request(api.)
</script>

<style>
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
		height:0.5upx;
		background-color: #EEEEEE;
		margin-top:-30upx;	
	}
	.sfyz_an_qd{
		font-size:29upx;
		color: #F7F7F7;
		border: #01AAEF;
		width:720upx;
		height:70upx;
		background-color: #01AAEF;
		margin-top:10upx;		
		
	}
</style>
