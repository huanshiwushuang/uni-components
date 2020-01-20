<!-- 算法参考：cnblogs.com/ranyonsue/p/8119155.html -->
<template>
	<view class="gh-scroll">
		<scroll-view
			class="gh-h"
			v-on="listeners"
			v-bind="$attrs"
		>
			<slot></slot>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		computed: {
			listeners () {
				return Object.assign({}, this.$listeners, {
					scroll: this.scroll
				})
			}
		},
		methods: {
			scroll (e) {
				// 触发父控件滚动方法
				console.log(e)
				this.$emit('scroll')
			}
		}
	}
</script>

<style lang="less">
	.gh-scroll {
		
	}
</style>
