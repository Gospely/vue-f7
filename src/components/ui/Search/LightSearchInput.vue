<template>

	<div class="searchbar" v-bind:class="{'row': row}">
	    <div class="search-input col-{{inputCol}}">
	      	<label v-show="iconVisible" class="icon icon-search" for="search"></label>
	      	<input type="search" @keyup.enter="enter" v-on:keyup="keyup" v-model="model" id='search' placeholder='{{placeholder}}'/>
	    </div>
	    <a @click="searchBtnClicked" v-show="buttonVisible" class="button button-fill button-primary col-{{btnCol}}">
	    	<span v-show="!useBtnIcon">{{btnLabel}}</span>
			<span v-show="useBtnIcon" class="icon {{btnIcon}}"></span>
	    </a>
	</div>

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

			row: {
				type: Boolean,
				default () {
					return false;
				}
			},

			iconVisible: {
				type: Boolean,
				default () {
					return true;
				}
			},

			buttonVisible: {
				type: Boolean,
				default () {
					return false;
				}
			},

			placeholder: {
				type: String,
				default () {
					return '请输入关键字...'
				}
			},

			inputCol: {
				type: String,
				default () {
					return '';
				}
			},

			btnCol: {
				type: String,
				default () {
					return '';
				}
			},

			btnLabel: {
				type: String,
				default () {
					return '搜索';
				}
			},

			btnIcon: {
				type: String,
				default () {
					return 'icon-search';
				}
			},

			useBtnIcon: {
				type: Boolean,
				default () {
					return false;
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
			},

			searchBtnClicked: {
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