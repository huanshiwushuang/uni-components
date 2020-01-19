<template>
	<view class="content">
		<view @click="toPage('../gh/ghNav')">ghNav</view>
		<view @click="toPage('../gh/ghNoStatusbar')">ghNoStatusbar</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			toPage (url) {
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style>
	
</style>
