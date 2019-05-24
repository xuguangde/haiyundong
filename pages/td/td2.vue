<template>
	<view class="container">
		<view class="top">
			<view class="a-xian"> </view>
		</view>

	<view class="top_muk">
		<view class="top_muk_yi">
			<p class="yi_p">0</p>
			<text class="yi_wenzi">直推活跃度</text>
		</view>
		<view class="top_muk_xian">	
		</view>
		<view class=".top_muk_yi">
			<p class="yi_p">0</p>
			<text class="yi_wenzi">团队总活跃度</text>
		</view>		
		<view class="top_muk_xian">	
		</view>
		<view class=".top_muk_yi">
			<p class="yi_p">0</p>
			<text class="yi_wenzi">小区活跃度</text>
		</view>

	</view>	


		
		
	</view> 

</template>

<script>
</script>

<style>
	.a-xian{
		border: #01AAEF;
		height:1upx;
		background-color: #EEEEEE;
		
	}
	.top_muk{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.top_muk_yi{
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-grow:1;
		flex-basis: auto;
	}
	.yi_p{
		font-size:28upx;
		color:red;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.yi_wenzi{
		font-size:22upx;
		display: flex;
		align-items: center;
	}
	.top_muk_xian{
			border: #01AAEF;
			height:75upx;
			width:0.5upx;
			background-color: #EEEEEE;

	}
	.top_muk_xian2{
			border: #01AAEF;
			height:75upx;
			width:0.5upx;
			background-color: #EEEEEE;
	}
	.top_muk_er{
		width:700upx;
		text-align: left;
		margin-top:-80upx;
		margin-left:30upx;
	}
	.er_p{
		position:relative;
		top: -3px;
		margin-left:330upx;
		font-size:28upx;
		color:red;
		display: flex;
		align-items: flex-start;
	}
	.er_wenzi{
		font-size:22upx;
		position:relative;
		top: 12px;
		margin-left:280upx;
		display: flex;
		align-items: flex-start;
	}
	.top_muk_san{
		position:relative;
		top: -38px;
		margin-left:580upx;
	}
	.san_p{
		position:relative;
		display: flex;
		top: -6px;
		align-items: flex-start;
		margin-left:40upx;
		font-size:28upx;
		color:red;
	}
	.san_wenzi{
		position:relative;
		top: 9px;
		left: 0px;
		font-size:22upx;
		display: flex;
		align-items: flex-start;
	}

</style>