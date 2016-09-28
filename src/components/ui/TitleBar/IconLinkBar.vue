<template>

	<common-bar :title="title">
		<div slot="bar-left">
			<slot name="bar-left">
				<button @click="$dispatch('leftClicked')" v-show="leftVisible" class="button button-link button-nav pull-left">
				    <span class="icon {{leftIcon}}"></span>
				    {{leftBtnTitle}}
				</button>
			</slot>
		</div>
		<div slot="bar-right">
			<slot name="bar-right">
				<button @click="$dispatch('rightClicked')" v-show="rightVisible" class="button button-link button-nav pull-right">
			    	{{rightBtnTitle}}
			    	<span class="icon {{rightIcon}}"></span>
			  	</button>
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