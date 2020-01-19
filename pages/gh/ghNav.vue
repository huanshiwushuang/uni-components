<template>
	<view>
		<gh-nav class="nav">
			<view slot="centerTitle" @click="click('导航')">导航</view>
			<view slot="rightTitle" @click="click('右侧')">右侧</view>
		</gh-nav>
	</view>
</template>

<script>
	import ghNav from '@/components/gh/gh-nav.vue'
	export default {
		components: {
			ghNav
		},
		data() {
			return {
				
			};
		},
		methods: {
			click (title) {
				uni.showToast({
					title
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.nav {
		padding: 0 32rpx;
	}
</style>
