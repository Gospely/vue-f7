<template>

	<common-bar :title="title">
		<div slot="bar-left">
			<slot name="bar-left">
				<a v-show="leftVisible" @click="$dispatch('leftIconClicked')" class="icon pull-left {{leftIcon}}"></a>
			</slot>
		</div>
		<div slot="bar-right">
			<slot name="bar-right">
				<a @click="$dispatch('rightIconClicked')" v-show="rightVisible" class="icon pull-right {{rightIcon}}"></a>
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
			},

			leftIcon: {
				type: String,
				default () {
					return '';
				}
			},

			rightIcon: {
				type: String,
				default () {
					return '';
				}
			}
		},

		components: {
			CommonBar
		}

	}

</script>