<template>
<view class="container">
	<view class="a_xian">
	</view>
	<view class="qb">
	<view class="srk_yi">
	<view class="top_wenzi_yi">
		姓名
		<input type="text" maxlength="100" placeholder="输入商铺联系人姓名(必填)" class="srk_fd_yi">
	</view>
	<view class="c_xian">
	</view>
	<view class="srk_er">
	<view class="top_wenzi_er">
		邮箱
		<input type="text" maxlength="100" placeholder="输入邮箱(选填)" class="srk_fd_si">
	</view>
	<view class="c_xian">
	</view>
	</view>
	<view class="srk_san">
	<view class="top_wenzi_san">
		联系人电话
		<input type="text" maxlength="100" placeholder="输入联系人电话(必填)" class="srk_fd_er">
	</view>
	</view>
	<view class="c_xian">
	</view>
	<view class="srk_si">
	<view class="top_wenzi_si">
		店名
		<input type="text" maxlength="100" placeholder="输入商铺名(必填)" class="srk_fd_san">
	</view>
	</view>
	<view class="c_xian">
	</view>
	<view class="srk_wu">
	<view class="top_wenzi_wu">
		地址
		<input type="text" maxlength="100" placeholder="请选择" class="srk_fd_wu">
	</view>
	</view>
	<view class="c_xian">
	</view>
		<button class="sfyz_an_qd">下一步</button>
</view>
</view>
</template>

<script>
</script>

<style>
	.qb{
		margin-top: 80upx;
	}
	.a_xian{
		background-color:#EEEEEE;
		border: 1upx #EEEEEE solid;
		height: 20upx;
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
		margin-left: 40upx;
		margin-top: 30upx;
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
		margin-left:230upx ;
	}
	.srk_fd_er{
		margin-top: -50upx;
		margin-left:230upx ;
	}
	.srk_fd_san{
		margin-top: -50upx;
		margin-left:230upx ;
	}
	.srk_fd_si{
		margin-top: -50upx;
		margin-left:230upx ;
	}
	.srk_fd_wu{
		margin-top: -50upx;
		margin-left:230upx ;
	}
	.sfyz_an_qd{
		font-size:32upx;
		color: #F7F7F7;
		border: #01AAEF;
		width:720upx;
		height:100upx;
		background-color: #01AAEF;
		margin-top:100upx;
	}
</style>
