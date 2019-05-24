<template>
<view class="container">
	<view class="a_xian">
	</view>
	<view class="top_wenzi_yi">类型</view>
	<view class="top_wenzi_er">买入</view>
	<view class="b_xian">
	</view>
	<view class="srk_yi">
	<view class="top_wenzi_san">
		单价
		<input type="text" maxlength="100" placeholder="请输入单价(M0.8-M1.42)" class="srk_fd_yi">
	</view>
	<view class="c_xian">
	</view>
	</view>
	<view class="srk_er">
	<view class="top_wenzi_si">
		花豆数量
		<input type="text" maxlength="100" placeholder="请输入数量" class="srk_fd_er">
	</view>
	</view>
	<view class="c_xian">
	</view>
	<view class="srk_san">
	<view class="top_wenzi_wu">
		总价
		<input type="text" maxlength="100" placeholder="M0 = R0" class="srk_fd_san">
	</view>
	</view>
	<view class="c_xian">
	</view>
		<button class="sfyz_an_qd">发布</button>
</view>
</template>

<script>
</script>

<style>
	.a_xian{
		background-color:#EEEEEE;
		border: 1upx #EEEEEE solid;
		height: 20upx;
	}
	.b_xian{
		background-color: #EEEEEE;
		border: 1upx #EEEEEE solid;
		height: 20upx;
		margin-top: 30upx;
	}
	.c_xian{
		border: 1upx #EEEEEE solid;
		height:0.1upx;
		margin-top: 30upx;
	}
	.top_wenzi_yi{
		margin-top: 30upx;
		margin-left: 40upx;
	}
	.top_wenzi_er{
		margin-top: -50upx;
		margin-left:150upx ;
	}
	.top_wenzi_san{
		margin-top: -50upx;
		margin-left:650upx ;
	}
	.top_wenzi_san{
		margin-left: 40upx;
		margin-top: 30upx;
	}
	.top_wenzi_si{
		margin-left: 40upx;
		margin-top: 30upx;
	}
	.top_wenzi_wu{
		margin-left: 40upx;
		margin-top: 30upx;
	}
	.srk_fd_yi{
		margin-top: -50upx;
		margin-left:190upx ;
	}
	.srk_fd_er{
		margin-top: -50upx;
		margin-left:190upx ;
	}
	.srk_fd_san{
		margin-top: -50upx;
		margin-left:190upx ;
	}
	.sfyz_an_qd{
		font-size:32upx;
		color: #F7F7F7;
		border: #01AAEF;
		width:720upx;
		height:80upx;
		background-color: #01AAEF;
		margin-top:50upx;
	}
</style>
