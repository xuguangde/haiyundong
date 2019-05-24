<template>
	<view>
		<view class="user-section">
			<image class="bg" src="/static/user-bg.jpg"></image>
			<text class="bg-upload-btn yticon icon-paizhao"></text>
			<view class="portrait-box" @click="headimg">
				<image class="portrait" :src="headpic"></image>
				<text class="pt-upload-btn yticon icon-paizhao"></text>
			</view>
		</view>
		<view class="yi">
			<view class="xia_yix">
					<p class="xia_wenzi_yi">昵称</p>
			</view>
			
			<view class="xia_you_yix">
				<view><input class="input" type="text" v-model="title" placeholder="" placeholder-class="placeholder" /></view>
			</view>
		</view>
			<view class="c-xian"> 
			</view>
		<view class="er" @click="toggleSpec">
			<view class="xia_erx">
					<p class="xia_wenzi_er">性别</p>
			</view>
			<view class="xia_you_erx">
				<view>{{sexone}}></view>
			</view>
		</view>
			<view class="b-xian"> 
			</view>
		<view class="san">
			<view class="xia_sanx">
					<p class="xia_wenzi_san">我的推荐人</p>
			</view>
			
			<view class="xia_you_sanx">
				<view>{{superiorinfo}}</view>
			</view>
		</view>
			<view class="c-xian"> 
			</view>
		<view class="si">
			<view class="xia_six">
					<p class="xia_wenzi_si">我的推荐码</p>
			</view>
			
			<view class="xia_you_six">
				<view>{{actionid}}</view>
			</view>
		</view>
			
			<view 
				class="popup spec" 
				:class="specClass"
				@touchmove.stop.prevent="stopPrevent"
				@click="toggleSpec"
			>
				<!-- 遮罩层 -->
				<view class="mask"></view>
				<view class="layer attr-content">
					<view class="xb">
					<view class="nan" @click="sexqq('1')">男</view>
					<view class="xian"></view>
					<view class="nv" @click="sexqq('2')">女</view>
					</view>
					<button class="btn" @click="toggleSpec"><text class="qx">取消</text></button>
				</view>
			</view>
	</view>
</template>

<script>
	var api = require("../../utils/api.js")
	var util = require("../../utils/util.js")

	import {  
	    mapState,
	    mapMutations   
	} from 'vuex';  
	export default {
		components:{
            
			},
		data() {
			return {
				sexone: '男',
				title:'',
				specClass: 'none',
				specSelected:[],
				actionid: uni.getStorageSync('action_id'),
				superiorinfo:'',
				headpic: '',
				user: '',
			};
		},
		onLoad(options) {
			// console.log(JSON.stringify(options))
			// var jsonData = JSON.stringify(options);// 转成JSON格式
			// var result = this.parseJSON(jsonData);// 转成JSON对象
			// console.log(JSON.parse(options.user))
			this.user = JSON.parse(options.user)
			// console.log(this.user)
			this.title = this.user.nickname
			console.log(this.title)
			this.superiorinfo = this.user.superior_info.nickname
			this.headpic = this.user.head_pic
			this.actionid = this.user.action_code
			this.sex = this.user.sex
			if(this.user.sex == 2){
				this.sexone = '女'
			} else{
				this.sexone = '男'
			}
		},
		methods: {
			sexqq(sexid){
				console.log(sexid)
				this.sex = sexid
				if(sexid == 2){
					this.sexone = '女'
				} else{
					this.sexone = '男'
				}
			},
			toggleSpec() {
				if(this.specClass === 'show'){
					this.specClass = 'hide';
					setTimeout(() => {
						this.specClass = 'none';
					}, 250);
				}else if(this.specClass === 'none'){
					this.specClass = 'show';
				}
			},
			//选择规格
			selectSpec(index, pid){
				let list = this.specChildList;
				list.forEach(item=>{
					if(item.pid === pid){
						this.$set(item, 'selected', false);
					}
				})
			
				this.$set(list[index], 'selected', true);
				//存储已选择
				/**
				 * 修复选择规格存储错误
				 * 将这几行代码替换即可
				 * 选择的规格存放在specSelected中
				 */
				this.specSelected = []; 
				list.forEach(item=>{ 
					if(item.selected === true){ 
						this.specSelected.push(item); 
					} 
				})},
			
			headimg (){ 
				var that = this
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						console.log(res)
						uni.uploadFile({  
							url: api.fileUploads,  
							filePath: res.tempFilePaths[0],
							name:"images",
							formData: {},  
							success: (res) => { 
								console.log(res)
								that.$api.loadIng('上传中')
								var data = JSON.parse(res.data)
								if(JSON.parse(res.data).retcode == 1){
									console.log("上传",res)
									util.requestPost(api.updateUserInfo,{user_id: uni.getStorageSync("userId"),nickname:that.title,head_pic: data.data,sex: that.sex,token: uni.getStorageSync('token')}).then(
										// console.log(res)
										res=> {
											if(res.data.retcode == 1){
												that.headpic = res.data.data.result.head_pic
												console.log(that.headpic)
												that.$forceUpdate()
												uni.hideLoading()
											}
										}
									)
								} else{
									uni.showToast({
										icon:"none",
										title: res.data.msg,
										duration:1500
									})
								}
							},  
							fail: (err) => {  
								console.log(err)  
								
							},  
							complete: (complete) => {  
								
							}  
						});  
					}
				});
			},
		},
		computed:{
			...mapState(['userInfo']),
		}
	}
</script>

<style lang="scss">
	
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		
		&.show {
			display: block;
			.mask{
				animation: showPopup 0.2s linear both;
			}
			.layer {
				animation: showLayer 0.2s linear both;
			}
		}
		&.hide {
			.mask{
				animation: hidePopup 0.2s linear both;
			}
			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}
		&.none {
			display: none;
		}
		.mask{
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.4);
		}
		.layer {
			position: fixed;
			z-index: 99;
			bottom: 0;
			width: 100%;
			min-height: 40vh;
			border-radius: 10upx 10upx 0 0;
			background-color: #fff;
			.btn{
				height: 100upx;
				line-height: 80upx;
				
				background: orange;
				font-size: $font-base + 10upx;
				color: #fff;
				margin: 180upx auto 20upx;
			}
		}
		@keyframes showPopup {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes hidePopup {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}
			100% {
				transform: translateY(0%);
			}
		}
		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}
			100% {
				transform: translateY(120%);
			}
		}
	}
	
	.attr-content{
		padding: 10upx 30upx;
		.a-t{
			display: flex;
			image{
				width: 170upx;
				height: 170upx;
				flex-shrink: 0;
				margin-top: -40upx;
				border-radius: 8upx;;
			}
			.right{
				display: flex;
				flex-direction: column;
				padding-left: 24upx;
				font-size: $font-sm + 2upx;
				color: $font-color-base;
				line-height: 42upx;
				.price{
					font-size: $font-lg;
					color: $uni-color-primary;
					margin-bottom: 10upx;
				}
				.selected-text{
					margin-right: 10upx;
				}
			}
		}
		.attr-list{
			display: flex;
			flex-direction: column;
			font-size: $font-base + 2upx;
			color: $font-color-base;
			padding-top: 30upx;
			padding-left: 10upx;
		}
		.item-list{
			padding: 20upx 0 0;
			display: flex;
			flex-wrap: wrap;
			text{
				display: flex;
				align-items: center;
				justify-content: center;
				background: #eee;
				margin-right: 20upx;
				margin-bottom: 20upx;
				border-radius: 100upx;
				min-width: 60upx;
				height: 60upx;
				padding: 0 20upx;
				font-size: $font-base;
				color: $font-color-dark;
			}
			.selected{
				background: #fbebee;
				color: $uni-color-primary;
			}
		}
	}

	.c-xian{
		border: #01AAEF;
		height:2upx;
		background-color: #EEEEEE;
		margin-top:42upx;
	}
	.b-xian{
		border: #01AAEF;
		height:15upx;
		background-color: #EEEEEE;
		margin-top:42upx;
	}
	page{
		background: $page-color-base;
	}
	.user-section{
		display:flex;
		align-items:center;
		justify-content: center;
		height: 460upx;
		padding: 40upx 30upx 0;
		position:relative;
		.bg{
			position:absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			filter: blur(1px);
			opacity: .7;
		}
		.portrait-box{
			width: 200upx;
			height: 200upx;
			border:6upx solid #fff;
			border-radius: 50%;
			position:relative;
			z-index: 2;
		}
		.portrait{
			position: relative;
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
		.yticon{
			position:absolute;
			line-height: 1;
			z-index: 5;
			font-size: 48upx;
			color: #fff;
			padding: 4upx 6upx;
			border-radius: 6upx;
			background: rgba(0,0,0,.4);
		}
		.pt-upload-btn{
			right: 0;
			bottom: 10upx;
		}
		.bg-upload-btn{
			right: 20upx;
			bottom: 16upx;
		}
	}
	.xia_you_yix{
		color:darkgray;
		margin-left: 490upx;
		margin-top: -50upx;
	}
	.xia_you_erx{
		color:darkgray;
		margin-left: 630upx;
		margin-top: -50upx;
	}
	.xia_you_sanx{
		color:darkgray;
		margin-left: 460upx;
		margin-top: -50upx;
	}
	.xia_you_six{
		color:darkgray;
		margin-left: 490upx;
		margin-top: -50upx;
	}
	.xia_yix{
		margin-left: 70upx;
		margin-top: 140upx;
	}
	.xia_erx{
		margin-left: 70upx;
		margin-top: 140upx;
	}
	.xia_sanx{
		margin-left: 70upx;
	}
	.xia_six{
		margin-left: 70upx;
		margin-top: 140upx;
	}
	.yi{
		margin-top: -60upx;
	}
	.er{
		margin-top: -100upx;
	}
	.san{
		margin-top: 40upx;
	}
	.si{
		margin-top: -100upx
	}
	.xb{
		margin-top:120upx;
		 margin-left:330upx;
	}
	.nan{
		font-size:45upx;
	}
	.nv{
		margin-top:40upx;
		font-size:45upx;
	}
	.qx{
		margin-top:10upx;
		display: flex;
		justify-content:center;
	}
	.xian{
		border-bottom: solid 1upx #f5f5f5;
		width:800upx;
		margin-left:-410upx;
		margin-top:40upx;
	}
</style>
