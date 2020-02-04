<!-- 全屏容器 -->
<template>
	<view class="gh-full-page gh-oh gh-bb">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
	.gh-full-page {
		height: calc(100vh - var(--window-top) - var(--window-bottom));
	}
</style>
