<!-- 自定义容易，无status-bar -->
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
		margin-top: var(--status-bar-height);
	}
</style>
