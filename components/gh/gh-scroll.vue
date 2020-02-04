<!-- 缓动函数:https://kodhus.com/easings/ -->
<!-- 缓动函数使用方法：https://www.jqhtml.com/33760.html -->
<!-- 补间引擎：https://github.com/tweenjs/tween.js -->
<!-- 分为：是否需要精确监听滚动距离， -->
<!-- 	不需要：则使用 transition 模拟，无法获取滚动过程中的距离 -->
<!-- 	需要：使用补间引擎执行动画 -->
<!-- 		是否有requestAnimationFrame函数 -->
<!-- 			有：使用 requestAnimationFrame 执行屏幕刷新，更新动画 -->
<!-- 			没有：使用setTimeout 模拟执行动画更新 -->
<template>
	<view class="gh-scroll gh-h gh-oh" @touchstart="touchstart" @touchmove.stop="touchmove" @touchend="touchend" :style="cssVar">
		<!-- 滚动部分 -->
		<view class="gh-scroll-content" :style="contentStyle">
			<slot></slot>
		</view>
	</view>
</template>

<!-- 不考虑单双指,一律以最后一个touch为准 -->
<!-- 手指滑动离开时的瞬时速度 + 灵敏度 = 滚动的距离 -->
<script>
	export default {
		props: {
			//[时间]-动画持续时间
			scrollDuration: {
				type: String,
				// 默认持续时间
				default () {
					return '1s'
				}
			},
			// [灵敏度]-滚动距离 与 手指移动距离的比, 如: 2 表示手指滑动 1px, 元素滚动 2px
			moveRate: {
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
				// 位移的 X 轴距离
				translateX: 0,
				// 位移的 Y 轴距离
				translateY: 0,
				// 滚动的时候, 累加的临时变量
				tmpTranslateY: 0,
				contentRect: {
					target: null
				},
			};
		},
		mounted () {
			this.initDOM()
			// console.log(performance.now())
			// return
			var that = this
			
			function animate(time) {
				// console.log(time)
			    id = that.$gh.requestAnimationFrame(animate);
				// setTimeout(() => {
				// 	time += 1000/60
				// 	animate(time)
				// }, 1000/60)
				// debugger
			    that.$TWEEN.update();
				
			}
			var id = that.$gh.requestAnimationFrame(animate);
			// setTimeout(() => {
			// 	animate(time)
			// }, 2000)
			
			const coords = { x: 0, y: 0 }; 
			const tween = new that.$TWEEN.Tween(coords) 
			        .to({ x: 300, y: 200 }, 1000) 
			        .easing(that.$TWEEN.Easing.Quadratic.Out) 
			        .onUpdate(() => { 
			            // box.style.setProperty('transform', `translate(, ${coords.y}px)`);
						that.translateX = coords.x
						that.translateY = coords.y
						
						console.log(coords.y)
						// 这里
						setTimeout(() => {
							that.$gh.cancelAnimationFrame(id)
						}, 2000)
			        })
			        .start(); 
		},
		computed: {
			cssVar () {
				return {
					'--scroll-duration': this.scrollDuration
				}
			},
			contentStyle () {
				return {
					transform: 'translate3d(' + this.translateX + 'px, ' + this.translateY + 'px, 0)'
				}
			}
		},
		methods: {
			initDOM () {
				// 可滚动区域 rect 获取
				this.contentRect.target = uni.createSelectorQuery().in(this).select('.gh-scroll-content')
				this.updateContentRect()
			},
			// 更新可滚动区域宽高info
			updateContentRect () {
				this.contentRect.target.boundingClientRect(data => {
					this.contentRect = Object.assign({}, this.contentRect, data)
				}).exec()
			},
			animationFrame (num) {
				// console.log(num)
				// uni.showToast({
				// 	title: this.translateY+''
				// })
			},
			// [惯性]-缓动函数
			easeOutQuad (t, b, c, d) {
				return -c *(t/=d)*(t-2) + b;
			},
			// touch 函数
			touchstart (e) {
				this.start = e
				// 临时记录, 在 move 里计算
				this.tmpTranslateY = this.translateY
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
				// moveRate
				this.translateY = this.tmpTranslateY + (touch2.pageY - touch1.pageY)*this.moveRate
				
				
				// console.log(this.translateY)
				// #ifdef APP-PLUS
				// #endif
				// #ifndef APP-PLUS
				// window.requestAnimationFrame(this.animationFrame)
				// #endif
			},
			touchend (e) {
				this.end = e
				// console.log(e)
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
			// 惯性-inertia
			// transition: transform var(--scroll-duration) cubic-bezier(0.250, 0.460, 0.450, 0.940);
			// @keyframes inertia {
			// 	0% {
			// 		transform: translate(0);
			// 	}
			// }
		}
	}
</style>
