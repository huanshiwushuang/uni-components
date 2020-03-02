<!-- 自定义导航 -->
<template>
	<view class="gh-nav gh-df gh-aic gh-pr gh-jcsb gh-h">
		<view class="left gh-df gh-aic">
			<!-- 左侧插槽 -->
			<slot name="left">
				<i class="back-btn uni-btn-icon" @click="clickBack"></i>
			</slot>
		</view>
		<view class="center gh-df gh-jcc gh-aic gh-pa gh-h">
			<view class="center-content">
				<!-- 中间插槽 -->
				<slot name="center">
					<!-- 中间标题插槽 -->
					<view class="centerTitle">
						<slot name="centerTitle">gh-title</slot>
					</view>
				</slot>
			</view>
		</view>
		<view class="right gh-df gh-aic">
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

<!-- 插槽：left：默认显示返回按钮 -->
<!-- 插槽：centerTitle：为中间的标题 -->
<!-- 插槽：center：自定义中间的内容 -->
<!-- 插槽：rightTitle：为右边的标题 -->
<!-- 插槽：right：自定义右边的内容 -->
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
		.left {
			.back-btn {
				font-size: 54rpx;
				margin-left: -19rpx;
				color: #000;
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
					/* #ifndef APP-PLUS */
					font-weight: bold;
					/* #endif */
				}
			}
		}
		.right {
			.rightTitle {
				font-size:28rpx;
			}
		}
	}
</style>
