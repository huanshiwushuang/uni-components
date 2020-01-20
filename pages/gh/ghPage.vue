<template>
	<view>
		<gh-full-page>
			<gh-no-statusbar class="gh-df gh-fdc">
				<gh-nav>
					<view slot="centerTitle" @click="click('导航')">导航</view>
					<view slot="rightTitle" @click="click('展示')">展示</view>
				</gh-nav>
				<gh-scroll class="content">
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
				</gh-scroll>
			</gh-no-statusbar>
		</gh-full-page>
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
