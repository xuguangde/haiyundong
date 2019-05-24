<template>
		<view class="container">
			<view class="a-xian"> 
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
					
			</view>
			<view class="b-xian"> </view>
			
			<view class="xia_yix">
				<img src="static/temp/dwqd.jpg" class="top_tp_yi">
				<p class="xia_wenzi_yi">1星达人</p>	
			<view class="xia__zuo_weizi">
				<view>有效值推>25</view>
				<view>团队活跃度>20000</view>
				<view>小区活跃度400</view>
			</view>
		</view>
		<view class="xia_you_yix">
			<p>共享全球手续费30%</p>
			<view class="you_jl">奖励二级跑鞋一双</view>
		</view>
		<view class="c-xian"> 
		</view>
	<view class="xia_yix">
		<img src="static/temp/dwqd.jpg" class="top_tp_yi">
				<p class="xia_wenzi_yi">2星达人</p>	
			<view class="xia__zuo_weizi">
				<view>有效值推>25</view>
				<view>团队活跃度>10000</view>
				<view>小区活跃度2000</view>
			</view>
		</view>
		
		<view class="xia_you_yix">
			<view>共享全球手续费20%</view>
			<view class="you_jl">奖励三级跑鞋一双</view>
		</view>
		<view class="c-xian"> </view>
				<view class="xia_yix">
					<img src="static/temp/dwqd.jpg" class="top_tp_yi">
				<p class="xia_wenzi_yi">3星达人</p>	
			<view class="xia__zuo_weizi">
				<view>有效值推>25</view>
				<view>团队活跃度>80000</view>
				<view>小区活跃度16000</view>
			</view>
		</view>
		
		<view class="xia_you_yix">
			<view>共享全球手续费10%</view>
			<view class="you_jl">奖励四级跑鞋一双</view>
		</view>
		<view class="c-xian"> </view>
				<view class="xia_yix">
					<img src="static/temp/dwqd.jpg" class="top_tp_yi">
				<p class="xia_wenzi_yi">4星达人</p>	
			<view class="xia__zuo_weizi">
				<view>有效值推>25</view>
				<view>团队活跃度>50000</view>
				<view>小区活跃度>100000</view>
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
	.top_tp_yi{
		width: 59upx;
		height:50upx;
		margin-left: 20upx;
		margin-top: 2upx;
	}
	.container{
		width: 750upx;
	}
	.top_muk_yi{
		margin-left:-240upx;
	}
	.top_muk_er{
		margin-left:120upx;
	}
	.top_muk_san{

		margin-left:120upx;
	}
	.top_muk{
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center;
		margin-top:20upx;
		margin-left:260upx;
	}
	
	.yi_p{
		margin-left:40upx;
		color:red; 
		font-size:35upx;font-size:35upx;
	}
	.er_p{
		margin-left:70upx;
		color:red;
		font-size:35upx;
	}
	.san_p{
		margin-left:40upx;
		color:red;
		font-size:35upx;
	}
	.yi_wenzi{
		font-size:26upx;
	}
	.er_wenzi{
		font-size:26upx;
	}
	.san_wenzi{
		font-size:26upx;
	}
	.xia_wenzi_yi{
		margin-left:80upx;
		margin-top: -55upx;
		font-size:35upx;
	}
	.xia__zuo_weizi{
		line-height:38upx;
		margin-top:20upx;
		margin-left:80upx;
		font-size:30upx;
		color: #CCCCCC;
	}
	.xia_yix{
		margin-top: 30upx;
	}
	
	.xia_you_yix{
		font-size: 27upx;
		margin-left: 470upx;
		margin-top: -70upx;
		color: #999999;
	}
	.you_jl{
		margin-left:10upx;
		margin-top: 2upx;
	}
	.a-xian{
		border: #01AAEF;
		height:0.5upx;
		background-color: #EEEEEE;
		margin-top:12upx;
	}
	.b-xian{
		border: #01AAEF;
		height:12upx;
		background-color: #EEEEEE;
		margin-top:22upx;
	}
	.c-xian{
		border: #01AAEF;
		height:2upx;
		background-color: #EEEEEE;
		margin-top:22upx;
	}
</style>
