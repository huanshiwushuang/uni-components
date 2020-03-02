<!-- 缓动函数速查表: https://kodhus.com/easings/ -->
<!-- 缓动函数使用方法：https://www.jqhtml.com/33760.html -->
<!-- 补间引擎：https://github.com/tweenjs/tween.js -->

<!-- 1、使用 js 动态计算，配合补间引擎 tween.js，可以精确控制滚动位置，获取滚动的位置 -->
	<!-- 但是：微信小程序和 APP 不支持 requestAnimationFrame，使用 setInterval 性能又特别低 -->
<!-- 2、考虑使用 transition、animation 提高动画性能 -->
	<!-- 但是：无法精确地瞬间停止，也无法获取准确的滚动位置，包括使用 animation-play-state -->
	<!-- 目前：考虑动态改变，贝塞尔函数 cubic-bezier，来达到瞬间停止的目的 -->

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
				// 手指移动触摸点
				start: null,
				move: [],
				end: null,
				// 位移的 X 轴距离
				translateX: 0,
				// 位移的 Y 轴距离
				translateY: 0,
				// 滚动的时候, 累加的临时变量
				tmpTranslateX: 0,
				tmpTranslateY: 0,
				// 可滚动区域 Rect
				contentRect: {
					target: null
				},
			};
		},
		computed: {
			cssVar () {
				return {
					'--scroll-duration': this.scrollDuration,
				}
			},
			contentStyle () {
				return {
					transform: 'translate3d(' + this.translateX + 'px, ' + this.translateY + 'px, 0)'
				}
			}
		},
		methods: {
			// ****************************************************************************
			// 初始化操作
			// ****************************************************************************
			initDOM () {
				// 可滚动区域 rect 获取
				this.contentRect.target = uni.createSelectorQuery().in(this).select('.gh-scroll-content')
				this.updateContentRect()
			},
			// 更新-可滚动区域宽高 info
			updateContentRect () {
				this.contentRect.target.boundingClientRect(data => {
					this.contentRect = Object.assign({}, this.contentRect, data)
				}).exec()
			},
			// ****************************************************************************
			// 用户操作
			// ****************************************************************************
			// 重置触摸
			resetTouch () {
				this.start = null
				this.move = []
				this.end = null
			},
			// 触摸开始
			touchstart (e) {
				this.resetTouch()
				this.start = e
				// 临时记录, 在 move 里计算
				// this.tmpTranslateX = this.translateX
				// this.tmpTranslateY = this.translateY
				// 触摸 start 算入 move 中，方便下面 touchmove 用 move 计算跟随手指移动的位置
				this.move.push(e)
			},
			// 触摸移动
			touchmove (e) {
				this.move.push(e)
				// 数组只保留最后两次 move
				if (this.move.length > 2) {
					this.move.shift()
				}
				// 当有多根手指触摸滑动，只取最后按下的一根
				let move1 = this.move[0].touches.slice(-1)[0]
				let move2 = this.move[1].touches.slice(-1)[0]
				// 计算斜率，判断移动方向：水平 | 垂直 | 倾斜
				let tmpY = Math.abs(move2.clientY - move1.clientY)
				tmpY = move2.clientY > move1.clientY ? -tmpY : tmpY
				let xl = tmpY/(move2.clientX - move1.clientX)
				// 思考：只看第1、2象限，当移动轨迹的斜率(tan)满足在 30°~60° || 120°~150° 时，视为斜着移动(无惯性)
				// 		当移动的轨迹在
				console.log(xl)
				if (([Infinity, -Infinity].includes(xl)) || (xl >= this.calcK(-89.999999999) && xl <= this.calcK(-60)) || (xl >= this.calcK(60) && xl <= this.calcK(89.999999999))) {
					console.log('垂直')
				} else if ((xl === 0) || (xl >= this.calcK(-30) && xl <= this.calcK(30))) {
					console.log('水平')
				} else if (xl > this.calcK(-60) && xl < this.calcK(-30)) {
					console.log('左上右下')
				} else {
					console.log('左下右上')
				}
				// console.log(move1)
				// console.log(move2)
				// moveRate: 移动的灵敏度
				// 控制滚动位置不能超越 content 的 宽高
				// this.translateX = this.tmpTranslateX + (move1.clientX - touchStart.clientX)*this.moveRate
				// this.translateY = this.tmpTranslateY + (move1.clientY - touchStart.clientY)*this.moveRate
				// 特别注意：需要不停的计算最后一个移动点 和 开始触摸点的斜率，以便在横向和纵向滚动都可以滚动时，斜着滑动可以按照一定的规则，不立即横向和纵向立即同步滚动。
				
				
			},
			// 计算并返回角度对应的斜率
			calcK (t) {
				return Math.tan(t*Math.PI/180)
			},
			// 触摸结束
			touchend (e) {
				this.end = e
			},
			transitionend () {
			},
			// ****************************************************************************
			// 自定义函数
			// ****************************************************************************
			// 惯性-缓动函数
			easeOutQuad (t, b, c, d) {
				return -c *(t/=d)*(t-2) + b;
			}
		},
		mounted () {
			this.initDOM()
		},
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
			@keyframes animation {
				0% {
					// translate3d(var(--))
				}
			}
		}
	}
</style>
