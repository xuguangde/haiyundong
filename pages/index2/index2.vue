<template>
	<view class="container">
		<!-- 小程序头部兼容 -->
		<!-- #ifdef MP -->
		<view class="mp-search-box">
			<input class="ser-input" type="text" value="输入关键字搜索" disabled />
		</view>
		<!-- #endif -->
		<view class="title">
			<view class="wenzi">
				嗨运动
			</view>
		</view>
		<view class="indexback">
			<view>
				<image class="run" :src="srcone == 1?'/static/temp/run.gif':'/static/temp/runstop.png'"></image>
			</view>
			<view class="runOne">
				<view class="yuan">
					<view class="runTwo">
						{{bushu}} 步
					</view>
					<view class="jindu">
						<view class="jindu1">
							
						</view>
						<view class="jindu2">
							
						</view>
					</view>
					<view class="kaluli">
						消耗{{kaluli}}卡路里
					</view>
				</view>
			</view>
		</view>
		<!-- <button type="primary" @tap="watchOrient">监听设备的方向变化</button> -->
		<!-- 分类 -->
		<view class="cate-section">
			<view @click="tiaozhuan('/pages/zhuangbei/zhuangbei?state=0')" class="cate-item">
				<image src="/static/temp/paoxie.png"></image>
				<text>装备</text>
			</view>
			<navigator url="/pages/pifu/pifu?state=0" class="cate-item">
				<image src="/static/temp/lihe.png"></image>
				<text>皮肤</text>
			</navigator>
			<navigator url="" class="cate-item">
				<image src="/static/temp/huodong1.png"></image>
				<text>活动</text>
			</navigator>
			<navigator url="/pages/notice/notice" class="cate-item">
				<image src="/static/temp/guanxuan.png"></image>
				<text>官宣</text>
			</navigator>
		</view>
		<view class="cunru">
			<view class="centertit">
				<view class="cunrufont">
					<view class="jiangli">
						今日奖励花豆：{{huadou}}
					</view>
					<view class="cunruone" @click="cunru">
						存入
					</view>
				</view>
				<image src="/static/temp/c110.png" mode=""></image>
				
			</view>
		</view>
		<view class="cate-section">
			<view class="cate-item">
				<view class="yanse1">
					LV0
				</view>
				<text>用户等级</text>
			</view>
			<view class="cate-item">
				<view class="yanse">
					{{zonghuadou}}
				</view>
				<text>总花豆</text>
			</view>
			<view class="cate-item">
				<view class="yanse">
					1.00
				</view>
				<text>活跃度</text>
			</view>
		</view>
	</view>
</template>

<script>
	var id = null;
	var api = require("../../utils/api.js");
	var util = require("../../utils/util.js");
	export default {
		data() {
			return {
				titleNViewBackground: '',
				swiperCurrent: 0,
				swiperLength: 0,
				carouselList: [],
				goodsList: [],
				bushu:0,
				value:'',
				kaluli:0.000,
				srcone: 1,
				huadou:0.000,
				zonghuadou: 0,
			};
		},
		
		onLoad() {
			this.loadData();
			this.watchOrient()
			this.bushu = uni.getStorageSync("bushu");
			this.kaluli = uni.getStorageSync("kaluli")
		},
		
		onShow() {
			var myDate = new Date();
			console.log(uni.getStorageSync('userId'))
			console.log(myDate.getHours())
			uni.getStorage({
				key:'getDate',
				success() {
					if(myDate.getDate() != uni.getStorageSync('getDate')){
						uni.setStorage({
							key:"bushu",
							data:0
						}) 
						uni.setStorage({
							key:"kaluli",
							data:0.00
						})
						uni.setStorage({
							key:'getDate',
							data: myDate.getDate()
						})
						uni.setStorage({
							key: 'bushuone',
							data: 0
						})
					}
				},
				fail() {
					uni.setStorage({
						key:"bushu",
						data:0
					}) 
					uni.setStorage({
						key:"kaluli",
						data:0.00
					})
					uni.setStorage({
						key:'getDate',
						data: myDate.getDate()
					})
					uni.setStorage({
						key: 'bushuone',
						data: 0
					})
				}
			})
		},
		
		methods: {
			/**
			 * 请求静态数据只是为了代码不那么乱
			 * 分次请求未作整合
			 */
			tiaozhuan(url){
				uni.navigateTo({
					url: url
				})
			},
			cunru (){
				var that = this;
				uni.getStorage({
					key:'userId',
					success() {
						util.request(api.saveBeans,{user_id: uni.getStorageSync('userId'),steps: 11,token: uni.getStorageSync('token')}).then(
							res =>{
								console.log(res.data.data)
								that.zonghuadou = res.data.data
								uni.setStorage({
									key:'bushuone',
									data: that.bushu
								})
							}
						)
					},
					fail() {
						this.$api.msg('请先登陆')
					}
				})
			},
			//获取步数
			watchOrient: function () {
				console.log("你好")
				var that = this;
				if (id) {
					return;
				}
				id = plus.orientation.watchOrientation(function (o) {
					if(o.gamma > 25 || o.gamma < -25){
						setTimeout(function() {
							that.srcone = 1
							that.bushu++
							that.kaluli = (0.004 * that.bushu).toFixed(3)
							that.huadou = (0.000098 * that.bushu).toFixed(5)
						}, 300);
						// console.log()
						uni.setStorage({
							key:"bushu",
							data:that.bushu
						})
						uni.setStorage({
							key:"kaluli",
							data:that.kaluli,
						})
					} else{
						that.srcone = 0
					}
				}, function (e) {
					plus.orientation.clearWatch(id);
					id = null;
					console.log("监听失败:" + e.message);
				});
			},
			async loadData() {
				let carouselList = await this.$api.json('carouselList');
				this.titleNViewBackground = carouselList[0].background;
				this.swiperLength = carouselList.length;
				this.carouselList = carouselList;
				
				let goodsList = await this.$api.json('goodsList');
				this.goodsList = goodsList || [];
			},
			//轮播图切换修改背景色
			swiperChange(e) {
				const index = e.detail.current;
				this.swiperCurrent = index;
				this.titleNViewBackground = this.carouselList[index].background;
			},
			//详情页
			// navToDetailPage(item) {
			// 	//测试数据没有写id，用title代替
			// 	let id = item.title;
			// 	uni.navigateTo({
			// 		url: `/pages/product/product?id=${id}`
			// 	})
			// },
		},
		// #ifndef MP
		// 标题栏input搜索框点击
		onNavigationBarSearchInputClicked: async function(e) {
			this.$api.msg('点击了搜索框');
		},
		//点击导航栏 buttons 时触发
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.$api.msg('点击了扫描');
			} else if (index === 1) {
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				})
			}
		}
		// #endif
	}
</script>

<style lang="scss">
	
	page {
		background: $page-background;
	}
	.yanse{
		color: $font-color-index;
		
	}
	.yanse1{
		color: #fff;
		border-radius: 20upx;
		height: 40upx;
		width: 100upx;
		background: #e97332;
		text-align: center;
		line-height: 40upx;
	}
	.centertit{
		display: flex;
		justify-content: center;
	}
	.cunru{
		background: #fff;
		height: 100upx;
		display: flex;
		justify-content: center;
		font-size: 30upx;
		color: $font-color-index;
		line-height: 60upx;
		// text-align: center;
		align-items: center;
		width: 100%;
		.cunrufont {
			width: 100%;
			display: flex;
			justify-content: center;
			color: #fff;
			z-index: 9999;
			// text-align: center;
			position: absolute;
			// align-content: center;
			align-items: center;
			.jiangli{
				width: 360upx;
			}
			.cunruone{
				color: $font-color-index;
				border-radius: 8upx;
				height: 40upx;
				width: 100upx;
				background: #fff;
				text-align: center;
				line-height: 40upx;
			}
		}
		image {
			height: 60upx;
			width: 700upx;
		}
	}
	.indexback{
		display: flex;
		background: #4FBEED;
		flex-direction: row;
		justify-content: flex-start;
		height: 600upx;
		.run{
			height: 800upx;
			width: 390upx;
		}
		.runOne{
			width: 360upx;
			height: 200upx;
			background: #fff;
			border-radius: 200upx 0 0 200upx;
			// border-bottom-left-radius: 50%;
			color: #e97332;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			margin-top: 200upx;
			.runTwo{
				font-size: 30upx;
				margin-bottom: 10upx;
			}
			.kaluli{
				font-size: 25upx;
				margin-top: 30upx;
			}
			.yuan{
				width: 320upx;
				margin-left: 30upx;
				.jindu1{
					height: 4upx;
					width: 300upx;
					background: #d0d0d0;
					position: absolute;
				}
				.jindu2{
					height: 4upx;
					width: 100upx;
					background: #e97332;
					position: absolute;
				}
			}
			
		}
	}
	.title {
		width: 100%;
		height: 100upx;
		line-height: 150upx;
		display: flex;
		justify-content: center;
		background: #4FBEED;
		.wenzi{
			font-size: 30upx;
		}
	}
	.m-t{
		margin-top: 16upx;
	}
	/* 头部 轮播图 */
	.carousel-section {
		position: relative;
		padding-top: 10px;

		.titleNview-placing {
			height: var(--status-bar-height);
			padding-top: 44px;
			box-sizing: content-box;
		}

		.titleNview-background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 426upx;
			transition: .4s;
		}
	}
	.carousel {
		width: 100%;
		height: 350upx;

		.carousel-item {
			width: 100%;
			height: 100%;
			padding: 0 28upx;
			overflow: hidden;
		}

		image {
			width: 100%;
			height: 100%;
			border-radius: 10upx;
		}
	}
	.swiper-dots {
		display: flex;
		position: absolute;
		left: 60upx;
		bottom: 15upx;
		width: 72upx;
		height: 36upx;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);
		background-size: 100% 100%;

		.num {
			width: 36upx;
			height: 36upx;
			border-radius: 50px;
			font-size: 24upx;
			color: #fff;
			text-align: center;
			line-height: 36upx;
		}

		.sign {
			position: absolute;
			top: 0;
			left: 50%;
			line-height: 36upx;
			font-size: 12upx;
			color: #fff;
			transform: translateX(-50%);
		}
	}
	/* 分类 */
	.cate-section {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap:wrap;
		padding: 30upx 22upx; 
		background: #fff;
		margin-bottom: 30upx;
		.cate-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: $font-sm + 2upx;
			color: $font-color-dark;
			image {
				width: 60upx;
				height: 60upx;
				margin-bottom: 14upx;
			}
		}
		/* 原图标颜色太深,不想改图了,所以加了透明度 */
		// image {
		// 	width: 88upx;
		// 	height: 88upx;
		// 	margin-bottom: 14upx;
		// 	border-radius: 50%;
		// 	opacity: .7;
		// 	box-shadow: 4upx 4upx 20upx rgba(250, 67, 106, 0.3);
		// }
	}
	.ad-1{
		width: 100%;
		height: 350upx;
		padding: 10upx 0;
		background: #fff;
		image{
			width:100%;
			height: 100%; 
		}
	}
	/* 秒杀专区 */
	.seckill-section{
		padding: 4upx 30upx 24upx;
		background: #fff;
		.s-header{
			display:flex;
			align-items:center;
			height: 92upx;
			line-height: 1;
			.s-img{
				width: 140upx;
				height: 30upx;
			}
			.tip{
				font-size: $font-base;
				color: $font-color-light;
				margin: 0 20upx 0 40upx;
			}
			.timer{
				display:inline-block;
				width: 40upx;
				height: 36upx;
				text-align:center;
				line-height: 36upx;
				margin-right: 14upx;
				font-size: $font-sm+2upx;
				color: #fff;
				border-radius: 2px;
				background: rgba(0,0,0,.8);
			}
			.icon-you{
				font-size: $font-lg;
				color: $font-color-light;
				flex: 1;
				text-align: right;
			}
		}
		.floor-list{
			white-space: nowrap;
		}
		.scoll-wrapper{
			display:flex;
			align-items: flex-start;
		}
		.floor-item{
			width: 150upx;
			margin-right: 20upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			line-height: 1.8;
			image{
				width: 150upx;
				height: 150upx;
				border-radius: 6upx;
			}
			.price{
				color: $uni-color-primary;
			}
		}
	}
	
	.f-header{
		display:flex;
		align-items:center;
		height: 140upx;
		padding: 6upx 30upx 8upx;
		background: #fff;
		image{
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			margin-right: 20upx;
		}
		.tit-box{
			flex: 1;
			display: flex;
			flex-direction: column;
		}
		.tit{
			font-size: $font-lg +2upx;
			color: #font-color-dark;
			line-height: 1.3;
		}
		.tit2{
			font-size: $font-sm;
			color: $font-color-light;
		}
		.icon-you{
			font-size: $font-lg +2upx;
			color: $font-color-light;
		}
	}
	/* 团购楼层 */
	.group-section{
		background: #fff;
		.g-swiper{
			height: 650upx;
			padding-bottom: 30upx;
		}
		.g-swiper-item{
			width: 100%;
			padding: 0 30upx;
			display:flex;
		}
		image{
			width: 100%;
			height: 460upx;
			border-radius: 4px;
		}
		.g-item{
			display:flex;
			flex-direction: column;
			overflow:hidden;
		}
		.left{
			flex: 1.2;
			margin-right: 24upx;
			.t-box{
				padding-top: 20upx;
			}
		}
		.right{
			flex: 0.8;
			flex-direction: column-reverse;
			.t-box{
				padding-bottom: 20upx;
			}
		}
		.t-box{
			height: 160upx;
			font-size: $font-base+2upx;
			color: $font-color-dark;
			line-height: 1.6;
		}
		.price{
			color:$uni-color-primary;
		}
		.m-price{
			font-size: $font-sm+2upx;
			text-decoration: line-through;
			color: $font-color-light;
			margin-left: 8upx;
		}
		.pro-box{
			display:flex;
			align-items:center;
			margin-top: 10upx;
			font-size: $font-sm;
			color: $font-base;
			padding-right: 10upx;
		}
		.progress-box{
			flex: 1;
			border-radius: 10px;
			overflow: hidden;
			margin-right: 8upx;
		}
	}
	/* 分类推荐楼层 */
	.hot-floor{
		width: 100%;
		overflow: hidden;
		margin-bottom: 20upx;
		.floor-img-box{
			width: 100%;
			height:320upx;
			position:relative;
			&:after{
				content: '';
				position:absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background: linear-gradient(rgba(255,255,255,.06) 30%, #f8f8f8);
			}
		}
		.floor-img{
			width: 100%;
			height: 100%;
		}
		.floor-list{
			white-space: nowrap;
			padding: 20upx;
			padding-right: 50upx;
			border-radius: 6upx;
			margin-top:-140upx;
			margin-left: 30upx;
			background: #fff;
			box-shadow: 1px 1px 5px rgba(0,0,0,.2);
			position: relative;
			z-index: 1;
		}
		.scoll-wrapper{
			display:flex;
			align-items: flex-start;
		}
		.floor-item{
			width: 180upx;
			margin-right: 20upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			line-height: 1.8;
			image{
				width: 180upx;
				height: 180upx;
				border-radius: 6upx;
			}
			.price{
				color: $uni-color-primary;
			}
		}
		.more{
			display:flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			flex-shrink: 0;
			width: 180upx;
			height: 180upx;
			border-radius: 6upx;
			background: #f3f3f3;
			font-size: $font-base;
			color: $font-color-light;
			text:first-child{
				margin-bottom: 4upx;
			}
		}
	}
	/* 猜你喜欢 */
	.guess-section{
		display:flex;
		flex-wrap:wrap;
		padding: 0 30upx;
		background: #fff;
		.guess-item{
			display:flex;
			flex-direction: column;
			width: 48%;
			padding-bottom: 40upx;
			&:nth-child(2n+1){
				margin-right: 4%;
			}
		}
		.image-wrapper{
			width: 100%;
			height: 330upx;
			border-radius: 3px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				opacity: 1;
			}
		}
		.title{
			font-size: $font-lg;
			color: $font-color-dark;
			line-height: 80upx;
		}
		.price{
			font-size: $font-lg;
			color: $uni-color-primary;
			line-height: 1;
		}
	}
	

</style>
