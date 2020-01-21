<template>
	<view class="content gh-df gh-fdc">
		<image class="logo" src="/static/logo.png"></image>
		<view @click="toPage('../gh/ghNav')">ghNav</view>
		<view @click="toPage('../gh/ghNoStatusbar')">ghNoStatusbar</view>
		<view @click="toPage('../gh/ghFullPage')">ghFullPage</view>
		<view @click="toPage('../gh/ghScroll')">ghScroll</view>
		<view style="height: 0;flex-grow: 1;background-color: #00f;overflow: auto;" @scroll.native="scroll">
			<view>
				555
				<view v-for="i in 300" :key="i">123</view>
				666
			</view>
		</view>
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
			},
			scroll (e) {
				console.log(e.srcElement)
			}
		}
	}
</script>

<style>
	page, .content {
		height: 100vh;
	}
</style>
