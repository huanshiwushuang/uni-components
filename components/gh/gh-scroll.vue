<!-- 算法参考：cnblogs.com/ranyonsue/p/8119155.html -->
<template>
	<view
		class="gh-scroll gh-oh"
		@touchstart="touchstart"
		@touchmove="touchmove"
		@touchend="touchend"
	>
		<view class="gh-scroll-content gh-df gh-fdc gh-h" :style="topStyle">
			<!-- 下拉刷新 -->
			<view class="top gh-pr">
				<view class="top-content gh-pa gh-w">
					<slot name="top"></slot>
				</view>
			</view>
			<!-- 滚动 -->
			<scroll-view
				class="gh-scroll-view"
				v-on="listeners"
				v-bind="$attrs"
			>
				<slot></slot>
			</scroll-view>
			<!-- 上拉加载 -->
			<view class="bottom gh-oh">
				<slot name="bottom"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				start: null,
				move: [],
				end: null,
				
				topStyle: {
				},
				
			};
		},
		computed: {
			listeners () {
				return Object.assign({}, this.$listeners, {
					scroll: this.scroll,
					scrolltoupper: this.scrolltoupper,
					scrolltolower: this.scrolltolower,
				})
			}
		},
		mounted () {
			uni.createSelectorQuery().in(this).select('.top-content').boundingClientRect((data) => {
				// 设置高度
				this.topStyle = Object.assign({}, this.topStyle, {
				})
			}).exec()
		},
		methods: {
			// touch 事件，用于获取手势的瞬时速度
			touchstart (e) {
				this.start = e
			},
			touchmove (e) {
				this.move.push(e)
				if (this.move.length > 2) {
					this.move.shift()
				}
			},
			touchend (e) {
				this.end = e
			},
			// scroll 事件监听
			scroll (e) {
				console.log(e)
				this.$emit('scroll')
			},
			scrolltoupper () {
				this.$emit('scrolltoupper')
				
			},
			scrolltolower () {
				this.$emit('scrolltolower')
			}
		}
	}
</script>

<style lang="less">
	.gh-scroll {
		.top {
			height: 100vh;
			margin-top: -100vh;
			.top-content {
				bottom: 0;
			}
		}
		.gh-scroll-view {
			height: 0;
			flex-grow: 1;
			background-color: #f00;
		}
		.bottom {
			height: 100vh;
			margin-bottom: -100vh;
		}
	}
</style>
