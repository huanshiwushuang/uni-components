<template>
	<view style="background-color: #f00;">
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		21312321321321<br>
		45<br>
	</view>
</template>

<script>
	import ghFullPage from '../../components/gh/gh-full-page.vue'
	import ghNav from '../../components/gh/gh-nav.vue'
	import ghNoStatusbar from '../../components/gh/gh-no-statusbar.vue'
	import ghScroll from '../../components/gh/gh-scroll.vue'
	export default {
		components: {
			ghFullPage,
			ghNav,
			ghNoStatusbar,
			ghScroll
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

<style lang="less">
	.content {
		background-color: #f00;
		height: 0;
		flex-grow: 1;
	}
</style>
