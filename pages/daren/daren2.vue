<template>
	<view class="container">
		<view class="top">
			<view class="a-xian"> </view>
		</view>
	
	<view class="top_muk">
		<view class="top_muk_yi">
			<p class="yi_p">--</p>
			<text class="yi_wenzi">达人身份</text>
		</view>
		<view class="top_muk_xian">	
		</view>
		<view class="top_muk_er">
			<p class="er_p">0%</p>
			<text class="er_wenzi">手续费分红比列</text>
		</view>		
		<view class="top_muk_xian2">	
		</view>
		<view class="top_muk_san">
			<p class="san_p">--</p>
			<text class="san_wenzi">昨日分红</text>
		</view>
			<view class="zj-xian"> </view>
	</view>	
	<view class="aaa">
		<view class="xia_yix">
				<p class="xia_wenzi_yi">1星达人</p>	
			<view class="xia__zuo_weizi">
				<view>有效值推>25</view>
				<view>团队活跃度>2000</view>
				<view>小区活跃度</view>
			</view>
		</view>
		
		<view class="xia_you_yix">
			<view>共享全球手续费30%</view>
			<view class="you_jl">奖励二级跑鞋一双</view>
		</view>
		</view>
		<view class="b-xian"> </view>
		<view class="xia_yix">
				<p class="xia_wenzi_yi">2星达人</p>	
			<view class="xia__zuo_weizi">
				<view>有效值推>25</view>
				<view>团队活跃度>2000</view>
				<view>小区活跃度</view>
			</view>
		</view>
		
		<view class="xia_you_yix">
			<view>共享全球手续费20%</view>
			<view class="you_jl">奖励三级跑鞋一双</view>
		</view>
		<view class="b-xian"> </view>
				<view class="xia_yix">
				<p class="xia_wenzi_yi">3星达人</p>	
			<view class="xia__zuo_weizi">
				<view>有效值推>25</view>
				<view>团队活跃度>2000</view>
				<view>小区活跃度</view>
			</view>
		</view>
		
		<view class="xia_you_yix">
			<view>共享全球手续费10%</view>
			<view class="you_jl">奖励四级跑鞋一双</view>
		</view>
		<view class="b-xian"> </view>
				<view class="xia_yix">
				<p class="xia_wenzi_yi">4星达人</p>	
			<view class="xia__zuo_weizi">
				<view>有效值推>25</view>
				<view>团队活跃度>2000</view>
				<view>小区活跃度</view>
			</view>
		</view>
		
		<view class="xia_you_yix">
			<view>共享全球手续费5%</view>
			<view class="you_jl">奖励五级跑鞋一双</view>
		</view>
	</view> 

</template>

<script>
</script>

<style>
/* #ifdef APP-PLUS */
input {  
    padding: 0;  
}  

	.a-xian{
		border: #01AAEF;
		height:0.5upx;
		background-color: #EEEEEE;
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center;
	}
	.b-xian{
		border: #01AAEF;
		height:0.5upx;
		background-color: #EEEEEE;
		margin-top:12upx;
		
		
	}
	.top_muk{
		margin-left:-25upx;
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center;
	}

	.top_muk_yi{
		
		margin-left:70upx;
		width: 100%;
		
	}
	.yi_p{
		color:red;
		font-size:13upx;
		margin-top:20upx;
		margin-left:30upx;

	}
	.yi_wenzi{
		font-size:8upx;
		margin-left:10upx;
	}
	.top_muk_xian{
			border: #01AAEF;
			height:75upx;
			width:0.5upx;
			background-color: #EEEEEE;
			margin-left:220upx;
			margin-top:-80upx;
	}
	.top_muk_xian2{
			border: #01AAEF;
			height:75upx;
			width:0.5upx;
			background-color: #EEEEEE;
			margin-left:520upx;
			margin-top:-80upx;
	}
	.top_muk_er{
		width: 710upx;
		margin-top:-85upx;
		text-align:left;
		margin-left: 15upx;
	}
	.er_p{
		margin-left:330upx;
		font-size:8upx;
		color:red;
	}
	.er_wenzi{
		font-size:8upx;
		margin-left:275upx;
		align-content: center;
	}
	.top_muk_san{
		margin-top:-100upx;
		margin-left:580upx;
	}
	.san_p{
		margin-left:30upx;
		color:red;
	}
	.san_wenzi{
		font-size:8upx;
		margin-left:10upx;
	}
	.zj-xian{
		border: #01AAEF;
		height:10upx;
		background-color: #EEEEEE;	
		margin-top:30upx;
	}
	.xia__zuo_weizi{
		line-height:18upx;
		margin-top:10upx;
		margin-left:80upx;
		font-size:8upx;
		color: #CCCCCC;
	}

	.xia_you_yix{
		line-height:38upx;
		margin-top:-70upx;
		margin-left:520upx;
		font-size:8upx;
		color: #CCCCCC;
	}
	.xia_wenzi_yi{
		margin-left:80upx;
		font-size:25upx;
	}
	.you_jl{
		margin-left:30upx;
	}
	.xia_yix{
		margin-top:20upx;	
	}
	
</style>