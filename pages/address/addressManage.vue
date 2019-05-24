<template>
	<view class="content">
		<view class="row b-b">
			<text class="tit">联系人</text>
			<input class="input" type="text" v-model="addressData.consignee" placeholder="收货人姓名" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">手机号</text>
			<input class="input" type="number" v-model="addressData.mobile" placeholder="收货人手机号码" placeholder-class="placeholder" />
		</view>
		<view class="row b-b" @click="showMulLinkageThreePicker">
			<text class="tit">地址</text>
			<text class="input">
				{{addressData.pickerText}}
			</text>
			<text class="yticon icon-shouhuodizhi"></text>
		</view>
		<view class="row b-b"> 
			<text class="tit">门牌号</text>
			<input class="input" type="text" v-model="addressData.address" placeholder="楼号、门牌" placeholder-class="placeholder" />
		</view>
		
		<view class="row default-row">
			<text class="tit">设为默认</text>
			<switch :checked="addressData.defaule" color="#4fbeed" @change="switchChange" />
		</view>
		<button class="add-btn" @click="confirm">提交</button>
		
		<button v-if="deletetwo==1" class="add-btn" @click="deleteOne">删除地址</button>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		 @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
	
</template>

<script>
	var api = require("../../utils/api.js")
	var util = require("../../utils/util.js")
	import mpvueCityPicker from '../../components/mpvueCityPicker.vue'
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				deletetwo:'',
				addressData: {
					consignee: '',
					mobile: '',
					addressName: '在地图选择',
					address: '',
					area: '',
					default: false,
					pickerText: '选择地址'
				},
				nameone:'',
				phoneone:'',
				titone:'',
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
			}
		},
		onLoad(option){
			let title = '新增收货地址';
			console.log(option)
			if(option.type==='edit'){
				this.deletetwo = 1
				title = '编辑收货地址'
				this.addressData = JSON.parse(option.data)
				console.log(this.addressData)
				this.addressData.pickerText = this.addressData.province+"-"+this.addressData.city+"-"+this.addressData.district
				if(this.addressData.is_default == 1){
					this.addressData.defaule = true
				} else {
					this.addressData.defaule = false
				}
			} else{
				this.addressData.address_id = ''
			}
			this.manageType = option.type;
			this.id = option.id
			console.log()
			uni.setNavigationBarTitle({
				title
			})
		},
		methods: {
			// 三级联动选择
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			switchChange(e){
				// console.log(e)
				if(e.detail.value == true){
					//  设置默认地址
					util.request(api.setDefaultAddress,{address_id: this.addressData.address_id,token: uni.getStorageSync('token'),user_id: uni.getStorageSync('userId')}).then(
						res =>{
							console.log(res)
						}
					)
				}
				this.addressData.default = e.detail;
			},
			//接收子组件参数
			onConfirm(e) {
				console.log(e)
				this.addressData.pickerText = e.label
				this.$forceUpdate();   //手动调用更新
				console.log(this.addressData)
			},
			//地图选择地址
			chooseLocation(){
				uni.chooseLocation({
					success: (data)=> {
						this.addressData.addressName = data.name;
						this.addressData.address = data.name;
						console.log(data)
					}
				})
			},
			//删除地址
			deleteOne(){
				util.request(api.del_address,{id: this.addressData.address_id,user_id: uni.getStorageSync('userId'),token: uni.getStorageSync('token')}).then(
					res => {
						console.log(res)
						if(res.data.retcode == 1){
							this.$api.msg(`地址删除成功`);
							setTimeout(()=>{
								uni.navigateBack()
							}, 800)
						}
					}
				)
				
			},
			//提交
			confirm(){
				// 修改或新增收货地址
				util.requestPost(api.addAddress,{user_id: uni.getStorageSync('userId'),token: uni.getStorageSync('token'),city:this.addressData.pickerText,consignee: this.addressData.consignee,address_id: this.addressData.address_id,mobile:this.addressData.mobile,address:this.addressData.address}).then(
					res =>{
							console.log(res)
						}
				)
				
				let data = this.addressData;
				if(!data.consignee){
					this.$api.msg('请填写收货人姓名');
					return;
				}
				if(!/(^1[3|4|5|7|8][0-9]{9}$)/.test(data.mobile)){
					this.$api.msg('请输入正确的手机号码');
					return;
				}
				if(!data.pickerText){
					this.$api.msg('请在地图选择所在位置');
					return;
				}
				if(!data.address){
					this.$api.msg('请填写门牌号信息');
					return;
				}
				
				//this.$api.prePage()获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
				this.$api.prePage().refreshList(data, this.manageType);
				this.$api.msg(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
				setTimeout(()=>{
					uni.navigateBack()
				}, 800)
			},
		}
	}
</script>

<style lang="scss">
	page{
		background: $page-color-base;
		padding-top: 16upx;
	}

	.row{
		display: flex;
		align-items: center;
		position: relative;
		padding:0 30upx;
		height: 110upx;
		background: #fff;
		
		.tit{
			flex-shrink: 0;
			width: 120upx;
			font-size: 30upx;
			color: $font-color-dark;
		}
		.input{
			flex: 1;
			font-size: 30upx;
			color: $font-color-dark;
		}
		.icon-shouhuodizhi{
			font-size: 36upx;
			color: $font-color-light;
		}
	}
	.default-row{
		margin-top: 16upx;
		.tit{
			flex: 1;
		}
		switch{
			transform: translateX(16upx) scale(.9);
		}
	}
	.add-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		margin: 60upx auto;
		font-size: $font-lg;
		color: #fff;
		background-color: #4fbeed;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(79, 190, 237, 0.6);
	}
</style>
