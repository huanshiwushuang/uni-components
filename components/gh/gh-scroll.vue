<template>
	<view class="gh-scroll">
		<scroll-view
			class="gh-h"
			:scroll-y="true"
		>
			<slot></slot>
		</scroll-view>
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
	.gh-scroll {
		
	}
</style>
