<template>
	<view class="content">
		<view class="navbar">
			<view 
				v-for="(item, index) in navList" :key="index" 
				class="nav-item" 
				:class="{current: tabCurrentIndex === index}"
				@click="tabClick(index)"
			>
				{{item.text}}
			</view>
		</view>

		<swiper :current="tabCurrentIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item class="tab-content" v-for="(tabItem,tabIndex) in navList" :key="tabIndex">
				<scroll-view 
					class="list-scroll-content" 
					scroll-y
					@scrolltolower="loadData"
				>
					<!-- 空白页 -->
					<empty v-if="tabItem.orderList.length === 0"></empty>
					
					<!-- 订单列表 -->
					<view 
						v-for="(item,index) in tabItem.orderList" :key="index"
						class="order-item"
					>
					
						<view class="action-box b-t" v-if="item.state != 9">
							<view class="b-ba">
								<view class="b-timg">
									<image :src="item.pic" class="tpyi"></image>
								</view>
								<view class="wenzi_bk">
									<view class="wenzi_yi">{{item.title}}
									<view class="jia_hyd">+1活跃度
									</view>
									</view>
									<view class="wenzi_er" style="margin-top:20upx;">每日步数{{item.blimit}} 奖励花豆{{item.cbeans}}</view>
									<view class="wenzi_er" style="margin-top:20upx;">最多同时使用{{item.meanwhile}}个</view>
								</view>
							</view>
							<view class="">
								<button class="action-btn recom">兑换</button>
							</view>
						</view>
		
					</view>
					 
					<uni-load-more :status="tabItem.loadingType"></uni-load-more>
					
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template> 

<script>
	var api = require("../../utils/api.js")
	var util = require("../../utils/util.js")
	var page = 0
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import empty from "@/components/empty";
	import Json from '@/Json';
	export default {
		components: {
			uniLoadMore,
			empty
		},
		data() {
			return {
				tabCurrentIndex: 0,
				navList: [{
						state: 0,
						text: '装备列表',
						loadingType: 'more',
						orderList: []
					},
					{
						state: 1,
						text: '我的准备',
						loadingType: 'more',
						orderList: []
					},
					{
						state: 2,
						text: '过期装备',
						loadingType: 'more',
						orderList: []
					},
				],
			};
		},
		
		onLoad(options){
			this.tabCurrentIndex = +options.state;
			this.mylist()
		},
		 
		methods: {
			//获取装备列表
			mylist(){
				var that = this;
				util.request(api.getequipment,{data: uni.getStorageSync('userId'),token: uni.getStorageSync('token')}).then(
					res =>{
						console.log("装备列表",res)
						that.navList[0].orderList = res.data.data
						console.log("装备列表",that.navList[0].orderList)
					}
				)
			},
			myZhuangbei(){
				var that = this;
				util.request(api.getuserequipment,{data: uni.getStorageSync('userId'),token: uni.getStorageSync('token')}).then(
					res =>{
						console.log(res)
						that.navList[1].orderList = res.data.data
					}
				)
			},
			overdue(){
				var that = this;
				page++
				util.request(api.getuseroverequipment,{page: page,data: uni.getStorageSync('userId'),token: uni.getStorageSync('token')}).then(
					res =>{
						console.log(res)
						that.navList[2].orderList = res.data.data
					}
				)
			},
			loadData(source){
				//这里是将订单挂载到tab列表下
				let index = this.tabCurrentIndex;
				let navItem = this.navList[index];
				let state = navItem.state;
				console.log("触底2",navItem)
				this.overdue()
				console.log("触底",index)
			}, 
			//swiper 切换
			changeTab(e){
				page = 0
				this.tabCurrentIndex = e.target.current;
				if(this.tabCurrentIndex == 0){
					this.mylist()
				} else if(this.tabCurrentIndex == 1){
					this.myZhuangbei()
				} else if(this.tabCurrentIndex == 2){
					this.overdue()
				}
				this.loadData('tabChange');
			},
			//顶部tab点击
			tabClick(index){
				this.tabCurrentIndex = index;
			},
		},
	}
</script>

<style lang="scss">
	.jia_hyd{
		color: chocolate;
		width:300upx;
		margin-top: -40upx;
		margin-left: 160upx;
	}
	.b-ba{
		display: flex;
		justify-content: center;
	}
	.wenzi_yi{
		font-size:32upx;
		width:200upx;
	}
	.wenzi_er{
		font-size:27.5upx;
		color: #999
	}
	.wenzi_bk{
		font-size:22upx;
	}
	.zhu{
		display: flex;
		align-items: flex-start;
		font-size:28upx
	}
	.hd{
		font-size:23upx
	
	}
	.tpyi{
		margin-top: 15upx;
		height: 70upx;
		width: 70upx;
	}
	page, .content{
		background: $page-color-base;
		height: 100%;
	}
	
	.swiper-box{
		height: calc(100% - 40px);
	}
	.list-scroll-content{
		height: 100%;
	}
	.imgpifu{
		width: 50upx;
		height: 50upx;
	}
	.pifuimg{
		display: flex;
		
	}
	.navbar{
		display: flex;
		height: 40px;
		padding: 0 5px;
		background: #fff;
		box-shadow: 0 1px 5px rgba(0,0,0,.06);
		position: relative;
		z-index: 10;
		.nav-item{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 15px;
			color: $font-color-dark;
			position: relative;
			&.current{
				color: $base-color;
				&:after{
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 44px;
					height: 0;
					border-bottom: 2px solid $base-color;
				}
			}
		}
	}
	
	.uni-swiper-item{
		height: auto;
	}
	.order-item{
		display: flex;
		justify-content: center;
		background: #fff;
		margin-top: 16upx;
		.i-top{
			display: flex;
			align-items: center;
			height: 80upx;
			padding-right:30upx;
			font-size: $font-base;
			color: $font-color-dark;
			position: relative;
			.time{
				flex: 1;
			}
			.state{
				color: $base-color;
			}
			.del-btn{
				padding: 10upx 0 10upx 36upx;
				font-size: $font-lg;
				color: $font-color-light;
				position: relative;
				&:after{
					content: '';
					width: 0;
					height: 30upx;
					border-left: 1px solid $border-color-dark;
					position: absolute;
					left: 20upx;
					top: 50%;
					transform: translateY(-50%);
				}
			}
		}
		/* 多条商品 */
		.goods-box{
			height: 160upx;
			padding: 20upx 0;
			white-space: nowrap;
			.goods-item{
				width: 120upx;
				height: 120upx;
				display: inline-block;
				margin-right: 24upx;
			}
			.goods-img{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		/* 单条商品 */
		.goods-box-single{
			display: flex;
			padding: 20upx 0;
			.goods-img{
				display: block;
				width: 120upx;
				height: 120upx;
			}
			.right{
				flex: 1;
				display: flex;
				flex-direction: column;
				padding: 0 30upx 0 24upx;
				overflow: hidden;
				.title{
					font-size: $font-base + 2upx;
					color: $font-color-dark;
					line-height: 1;
				}
				.attr-box{
					font-size: $font-sm + 2upx;
					color: $font-color-light;
					padding: 10upx 12upx;
				}
				.price{
					font-size: $font-base + 2upx;
					color: $font-color-dark;
					&:before{
						content: '￥';
						font-size: $font-sm;
						margin: 0 2upx 0 8upx;
					}
				}
			}
		}
		
		.price-box{
			display: flex;
			justify-content: flex-end;
			align-items: baseline;
			padding: 20upx 30upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;
			.num{
				margin: 0 8upx;
				color: $font-color-dark;
			}
			.price{
				font-size: $font-lg;
				color: $font-color-dark;
				&:before{
					content: '￥';
					font-size: $font-sm;
					margin: 0 2upx 0 8upx;
				}
			}
		}
		.action-box{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 180upx;
			width: 90%;
			.b-timg{
				margin-right: 30upx;
			}
		}
		.action-btn{
			width: 160upx;
			height: 60upx;
			margin: 0;
			padding: 0;
			text-align: center;
			line-height: 60upx;
			font-size: $font-sm + 2upx;
			color: $font-color-dark;
			background: #fff;
			border-radius: 100px;
			&:after{
				border-radius: 100px;
			}
			&.recom{
				background: #fff9f9;
				color: $base-color;
				&:after{
					border-color: #f7bcc8;
				}
			}
		}
	}
	
	
	/* load-more */
	.uni-load-more {
		display: flex;
		flex-direction: row;
		height: 80upx;
		align-items: center;
		justify-content: center
	}
	
	.uni-load-more__text {
		font-size: 28upx;
		color: #999
	}
	
	.uni-load-more__img {
		height: 24px;
		width: 24px;
		margin-right: 10px
	}
	
	.uni-load-more__img>view {
		position: absolute
	}
	
	.uni-load-more__img>view view {
		width: 6px;
		height: 2px;
		border-top-left-radius: 1px;
		border-bottom-left-radius: 1px;
		background: #999;
		position: absolute;
		opacity: .2;
		transform-origin: 50%;
		animation: load 1.56s ease infinite
	}
	
	.uni-load-more__img>view view:nth-child(1) {
		transform: rotate(90deg);
		top: 2px;
		left: 9px
	}
	
	.uni-load-more__img>view view:nth-child(2) {
		transform: rotate(180deg);
		top: 11px;
		right: 0
	}
	
	.uni-load-more__img>view view:nth-child(3) {
		transform: rotate(270deg);
		bottom: 2px;
		left: 9px
	}
	
	.uni-load-more__img>view view:nth-child(4) {
		top: 11px;
		left: 0
	}
	
	.load1,
	.load2,
	.load3 {
		height: 24px;
		width: 24px
	}
	
	.load2 {
		transform: rotate(30deg)
	}
	
	.load3 {
		transform: rotate(60deg)
	}
	
	.load1 view:nth-child(1) {
		animation-delay: 0s
	}
	
	.load2 view:nth-child(1) {
		animation-delay: .13s
	}
	
	.load3 view:nth-child(1) {
		animation-delay: .26s
	}
	
	.load1 view:nth-child(2) {
		animation-delay: .39s
	}
	
	.load2 view:nth-child(2) {
		animation-delay: .52s
	}
	
	.load3 view:nth-child(2) {
		animation-delay: .65s
	}
	
	.load1 view:nth-child(3) {
		animation-delay: .78s
	}
	
	.load2 view:nth-child(3) {
		animation-delay: .91s
	}
	
	.load3 view:nth-child(3) {
		animation-delay: 1.04s
	}
	
	.load1 view:nth-child(4) {
		animation-delay: 1.17s
	}
	
	.load2 view:nth-child(4) {
		animation-delay: 1.3s
	}
	
	.load3 view:nth-child(4) {
		animation-delay: 1.43s
	}
	
	@-webkit-keyframes load {
		0% {
			opacity: 1
		}
	
		100% {
			opacity: .2
		}
	}
</style>
