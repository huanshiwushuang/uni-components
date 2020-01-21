<!-- 缓动函数:https://kodhus.com/easings/ -->
<template>
	<view class="gh-scroll gh-h gh-oh" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend"
		:style="cssVar"
	>
		<!-- 滚动部分 -->
		<view class="gh-scroll-content" @transitionend="transitionend" :style="contentStyle">
			<slot></slot>
		</view>
	</view>
</template>

<!-- 不考虑单双指,一律以最后一个touch为准 -->
<script>
	export default {
		props: {
			//[时间]-动画持续时间
			scrollDuration: {
				type: String,
				// 默认持续时间
				default () {
					return '500ms'
				}
			},
			// 滚动距离 与 手指移动距离的比, 如: 2 表示手指滑动 1px, 元素滚动 2px
			moveWeight: {
				type: Number,
				default () {
					return 1
				}
			}
		},
		data() {
			return {
				start: null,
				move: [],
				end: null,
				// 滚动的距离
				scrollTop: 0,
				// 滚动的时候, 累加的临时变量
				tmpScrollTop: 0,
			};
		},
		mounted () {
			// setTimeout(() => {
			// 	this.contentStyle = Object.assign({}, this.contentStyle, {
			// 		transform: 'translate(0, 100px)'
			// 	})
			// }, 1000)
		},
		computed: {
			cssVar () {
				return {
					'--scroll-duration': this.scrollDuration
				}
			},
			contentStyle () {
				return {
					transform: 'translate(0, ' + this.scrollTop + 'px)'
				}
			}
		},
		methods: {
			touchstart (e) {
				this.start = e
				// 临时记录, 在 move 里计算
				this.tmpScrollTop = this.scrollTop
				console.log(e)
			},
			touchmove (e) {
				this.move.push(e)
				// 数组只保留最后两次 move
				if (this.move.length > 2) {
					this.move.shift()
				}
				let touch1 = this.start.touches.slice(-1)[0]
				let touch2 = e.touches.slice(-1)[0]
				// moveWeight
				this.scrollTop = this.tmpScrollTop + (touch2.pageY - touch1.pageY)*this.moveWeight
				
				console.log(e)
			},
			touchend (e) {
				this.end = e
				console.log(e)
			},
			transitionend () {
				// uni.showToast({
				// 	title: '123'
				// })
			},
		}
	}
</script>

<style lang="less">
	.gh-scroll {
		.gh-scroll-content {
			// 惯性
			&.inertia {
				transition: transform var(--scroll-duration) cubic-bezier(0.250, 0.460, 0.450, 0.940);
			}
		}
	}
</style>
