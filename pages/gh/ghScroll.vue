<template>
	<view class="ghScroll gh-oh gh-bb">
		<gh-full-page>
			<gh-no-statusbar class="gh-df gh-fdc">
				<gh-nav>
					<view slot="centerTitle">导航</view>
					<view slot="rightTitle">展示</view>
				</gh-nav>
				<!-- 滚动 -->
				<gh-scroll class="scroll" :moveWeight="1">
					<view>
						aaa
						<view
							v-for="i in 300"
							:key="i"
						>{{i}}123</view>
						bbb
					</view>
				</gh-scroll>
			</gh-no-statusbar>
		</gh-full-page>
	</view>
</template>

<script>
	import ghScroll from '../../components/gh/gh-scroll.vue'
	
	import ghFullPage from '../../components/gh/gh-full-page.vue'
	import ghNav from '../../components/gh/gh-nav.vue'
	import ghNoStatusbar from '../../components/gh/gh-no-statusbar.vue'
	import ghScrollBounce from '../../components/gh/gh-scroll-bounce.vue'
	export default {
		components: {
			ghScroll,
			ghFullPage,
			ghNav,
			ghNoStatusbar,
			ghScrollBounce
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
	.scroll {
		background-color: #f00;
	}
</style>
