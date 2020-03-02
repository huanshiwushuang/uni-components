<!-- 自定义容器，无status-bar -->
<template>
	<view class="gh-no-statusbar gh-bb gh-h">
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
	.gh-no-statusbar {
		// border 配合 class gh-bb
		border-top: var(--status-bar-height) solid transparent;
	}
</style>
