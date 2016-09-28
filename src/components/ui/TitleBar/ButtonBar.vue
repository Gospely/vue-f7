<template>


	<common-bar :title="title">
		<div slot="bar-left">
			<slot name="bar-left">
				<button @click="$dispatch('leftButtonClicked')" v-show="leftVisible" class="button pull-left">{{leftBtnTitle}}</button>
			</slot>
		</div>
		<div slot="bar-right">
			<slot name="bar-right">
				<button @click="$dispatch('rightButtonClicked')" v-show="rightVisible" class="button pull-right">{{rightBtnTitle}}</button>
			</slot>
		</div>		
	</common-bar>

</template>

<style>
	
</style>

<script>

	import CommonBar from './CommonBar.vue'

	export default {

		props: {
			title: {
				type: String,
				default () {
					return '标题'
				}
			},

			leftBtnTitle: {
				type: String,
				default () {
					return '按钮'
				}
			},

			rightBtnTitle: {
				type: String,
				default () {
					return '按钮'
				}
			},

			leftVisible: {
				type: Boolean,
				default () {
					return true;
				}
			},

			rightVisible: {
				type: Boolean,
				default () {
					return true;
				}
			}
		},

		components: {
			CommonBar
		}

	}

</script>