<template>
    <view class="content">
        <!-- <page-head :title="title"></page-head> -->
        <view class="uni-padding-wrap">
            <view class="uni-common-mt" style="background:#FFF; padding:20upx;">
                <rich-text :nodes="strings"></rich-text>
            </view>
        </view>
    </view>
</template>

<script>
	// import pageHead from '@/components/page-head.vue';
	export default {
		// components: {
		// 	pageHead
		// },
    data() {
        return {
			// title: '你好',
            nodes: [{
                name: 'div',
                attrs: {
                    class: 'div-class',
                    style: 'line-height: 60px; color: red; text-align:center;'
                },
                children: [{
                    type: 'text',
                    text: 'Hello&nbsp;uni-app!'
                }]
            }],
            strings: ''
        }
		
    },
	onLoad(options) {
		console.log(options)
		this.strings = options.text
		uni.setNavigationBarTitle({
			title: options.title
		})
	},
}
</script>

<style>
</style>
