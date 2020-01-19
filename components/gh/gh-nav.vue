<!-- 【兼容性问题】 -->
<!-- 在APP里。中间插槽如需可以点击，需要在调用处给予样式 pointer-events: auto -->
<template>
	<view class="gh-nav df aic pr jcsb">
		<view class="left df aic">
			<!-- 左侧插槽 -->
			<slot name="left">
				<i class="back-btn uni-btn-icon" @click="clickBack"></i>
			</slot>
		</view>
		<view class="center df jcc aic pa">
			<view class="center-content">
				<!-- 中间插槽 -->
				<slot name="center">
					<!-- 中间标题插槽 -->
					<view class="centerTitle">
						<slot name="centerTitle"></slot>
					</view>
				</slot>
			</view>
		</view>
		<view class="right df aic">
			<!-- 右侧插槽 -->
			<slot name="right">
				<!-- 右边标题插槽 -->
				<view class="rightTitle">
					<slot name="rightTitle"></slot>
				</view>
			</slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			// 点击-返回按钮
			clickBack () {
				uni.navigateBack()
			},
		}
	}
</script>

<style lang="less">
	.gh-nav {
		height: 94rpx;
		font-weight:500;
		font-family:PingFang SC;
		padding: 0 30rpx;
		.left {
			.back-btn {
				color: #000;
				font-size: 50rpx;
				margin-left: -14rpx;
				margin-top: -2rpx;
			}
		}
		.center {
			left: 0;
			right: 0;
			pointer-events: none;
			.center-content {
				pointer-events: auto;
				.centerTitle {
					font-size:36rpx;
					color: #333;
				}
			}
		}
		.right {
			.rightTitle {
				font-size:28rpx;
				color: #333;
			}
		}
	}
</style>
