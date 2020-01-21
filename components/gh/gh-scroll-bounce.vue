<!-- 阅读：cnblogs.com/ranyonsue/p/8119155.html -->
<!-- 数学的 H5 应用：拖动阻尼：https://www.jianshu.com/p/3e3aeab63555 -->
<!-- CSS Variables：https://segmentfault.com/q/1010000015375955 -->
<template>
	<view class="gh-scroll-bounce gh-oh" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend"
		:style="cssVar"
	>
		<view :class="['gh-scroll-bounce-content', 'gh-df', 'gh-fdc', 'gh-h', { bounce: isTriggerBounce }]" :style="contentStyle">
			<!-- 下拉刷新 -->
			<view class="top gh-pr">
				<view class="top-content gh-pa gh-w">
					<slot name="top"></slot>
				</view>
			</view>
			<!-- 滚动 -->
			<scroll-view
				class="gh-scroll-bounce-view"
				v-bind="$attrs"
				@scrolltoupper="scrolltoupper"
				@scrolltolower="scrolltolower"
				@scroll="scroll"
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
		props: {
			// 单位：毫秒
			topBounceDuration: {
				type: String,
				// top 回弹效果默认持续时间
				default () {
					return '500ms'
				}
			},
			// 默认回弹高度，根据滑动瞬时速度 和 top部分 的高度计算
			topBounceMaxHeight: String
		},
		data() {
			return {
				// 手指是否还在触摸
				isTouching: false,
				// touch start event
				startData: null,
				// scroll events
				scrollData: [],
				// touch end event
				endData: null,
				// 滚动瞬时速度，用于计算弹性效果
				speed: 0,
				// Css Variables，用于弹性效果的keyframes动画
				cssVar: {
					'--bounce-height': '100px',
				},
				// 是否触发弹性效果，用于控制class
				isTriggerBounce: false,
			};
		},
		computed: {
			contentStyle () {
				return {
					'animation-duration': this.topBounceDuration
				}
			}
		},
		mounted() {
			this.initDOM()
		},
		watch: {
			speed (newVal, oldVal) {
				var a = uni.createSelectorQuery().in(this).select('.gh-scroll-bounce')
				// console.log(a.style)
				// console.log(a.style.setProperty)
			}
		},
		methods: {
			initDOM () {
				// uni.createSelectorQuery().in(this).select('.top-content').boundingClientRect((data) => {
					// 设置高度
					// this.contentStyle = Object.assign({}, this.contentStyle, {})
				// }).exec()
				
				// this.$refs.root.style
			},
			// touch 事件，用于获取手势的瞬时速度
			touchstart(e) {
				this.startData = e
				this.isTouching = true
			},
			touchmove(e) {},
			touchend(e) {
				this.endData = e
				this.isTouching = false
			},
			// scroll 事件监听
			scroll(e) {
				console.log(e)
				this.scrollData.push(e)
				if (this.scrollData.length > 2) {
					this.scrollData.shift()
				}
				this.$emit('scroll')
			},
			scrolltoupper() {
				if (!this.isTouching) {
					this.speed = this.getCalcSpeed()
				}
				this.isTriggerBounce = true
				console.log('123')
				console.log(this.isTriggerBounce)
				setTimeout(() => {
					this.isTriggerBounce = false
				}, 500)
				this.$emit('scrolltoupper')
			},
			scrolltolower() {
				if (!this.isTouching) {
					this.speed = this.getCalcSpeed()
				}
				this.$emit('scrolltolower')
			},
			// 获取滚动的瞬时速度
			getCalcSpeed () {
				if (this.scrollData.length >= 2) {
					let one = this.scrollData[0]
					let two = this.scrollData[1]
					// 根据最后两次滚动计算
					let speed = Math.abs(one.detail.scrollTop - two.detail.scrollTop) / Math.abs(one.timeStamp - two.timeStamp)
					return speed
				}
			}
		}
	}
</script>

<style lang="less">
	.gh-scroll-bounce {
		.top {
			height: 100vh;
			margin-top: -100vh;

			.top-content {
				bottom: 0;
			}
		}

		.gh-scroll-bounce-view {
			height: 0;
			flex-grow: 1;
			background-color: #f00;
		}

		.bottom {
			height: 100vh;
			margin-bottom: -100vh;
		}
		
		// 弹性动画 class
		.bounce {
			animation: bounce 500ms ease-out alternate;
		}
		@keyframes bounce {
			0% {
				transform: translate(0, 0);
			}
			50% {
				transform: translate(0, var(--bounce-height));
			}
			100% {
				transform: translate(0, 0);
			}
		}
	}
</style>
