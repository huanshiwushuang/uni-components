<!-- 算法参考：cnblogs.com/ranyonsue/p/8119155.html -->
<template>
	<view
		class="gh-scroll gh-df gh-fdc"
		@touchstart="touchstart"
		@touchmove="touchmove"
		@touchend="touchend"
	>
		<!-- 下拉刷新 -->
		<view class="top gh-oh" :style="topStyle">
			<slot name="top"></slot>
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
</template>

<script>
	export default {
		data() {
			return {
				start: null,
				move: [],
				end: null,
				
				topInfo: null,
				topStyle: {
				},
				
				bottomInfo: null,
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
			uni.createSelectorQuery().in(this).select('.top').boundingClientRect((data) => {
				// 设置高度
				this.topStyle = Object.assign({}, this.topStyle, {
					height: data.height+'px'
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
		}
		.gh-scroll-view {
			height: 0;
			flex-grow: 1;
			background-color: #f00;
		}
	}
</style>
