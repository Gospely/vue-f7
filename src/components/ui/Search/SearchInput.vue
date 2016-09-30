<template>

	<header-secondary-bar>
		<div class="searchbar">
		    <a class="searchbar-cancel">退出</a>
		    <div class="search-input">
		      	<label class="icon icon-search" for="search"></label>
		      	<input type="search" @keyup.enter="enter" v-on:keyup="keyup" v-model="model" placeholder='{{placeholder}}'/>
		    </div>
		</div>
	</header-secondary-bar>

</template>

<style>
	
</style>

<script>

	import HeaderSecondaryBar from '../Bar/HeaderSecondaryBar.vue';
	import VInput from '../Form/Input.vue';

	export default {

		props: {

			cancel: {
				type: String,
				default () {
					return '取消';
				}
			},

			placeholder: {
				type: String,
				default () {
					return '请输入关键字...'
				}
			},

			model: {
				type: String,
				default () {
					return '';
				}
			},

			keyup: {
				type: Function,
				default () {
					return function() {};
				}
			},

			enter: {
				type: Function,
				default () {
					return function() {};
				}
			}

		},

		components: {
			HeaderSecondaryBar,
			VInput
		}

	}

</script>