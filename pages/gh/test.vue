<template>
	<view :style="cssVar">
		<view class="box">
			
		</view>
		<view @click="pause">
			Set
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cssVar: {
					'--play-state': 'running',
					'--height': '100px'
				}
			};
		},
		methods: {
			pause () {
				let val = this.cssVar['--play-state']
				this.cssVar['--play-state'] = val == 'running' ? 'paused' : 'running'
				this.cssVar['--height'] = '200px'
			}
		}
	}
</script>

<style lang="less">
	.box {
		width: 100px;
		height: 100px;
		animation: anime 10s;
		background-color: #f00;
		animation-play-state: var(--play-state);
		@keyframes anime {
			100% {
				width: 700px;
				height: var(--height);
			}
		}
	}
</style>
