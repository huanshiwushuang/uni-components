<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view @click="toPage('../gh/ghNav')">ghNav</view>
		<view @click="toPage('../gh/ghNoStatusbar')">ghNoStatusbar</view>
		<view @click="toPage('../gh/ghFullPage')">ghFullPage</view>
		<view @click="toPage('../gh/ghPage')">ghPage</view>
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
