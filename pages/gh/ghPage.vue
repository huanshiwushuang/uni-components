<template>
	<gh-full-page>
		<gh-no-statusbar class="gh-df gh-fdc">
			<gh-nav>
				<view slot="centerTitle">导航</view>
				<view slot="rightTitle">展示</view>
			</gh-nav>
			<gh-scroll-bounce :scroll-y="true" style="height: 0;flex-grow: 1;" topBounceDuration="500ms">
				<view slot="top" class="gh-df gh-jcc gh-aic gh-aife gh-h">
					<image src="../../static/img/loading.gif" class="loading"></image>
				</view>
				<view>
					<view v-for="i in 340" :key="i">
						{{ i }}asdsadsadsad<br>
					</view>
					123
				</view>
				<view slot="bottom">
					bottom
				</view>
			</gh-scroll-bounce>
		</gh-no-statusbar>
	</gh-full-page>
</template>

<script>
	import ghFullPage from '../../components/gh/gh-full-page.vue'
	import ghNav from '../../components/gh/gh-nav.vue'
	import ghNoStatusbar from '../../components/gh/gh-no-statusbar.vue'
	import ghScrollBounce from '../../components/gh/gh-scroll-bounce.vue'
	export default {
		components: {
			ghFullPage,
			ghNav,
			ghNoStatusbar,
			ghScrollBounce
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
		height: 0;
		flex-grow: 1;
	}
	.loading {
		width: 48rpx;
		height: 48rpx;
	}
</style>
