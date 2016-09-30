<template>
	<text-input 
		cols="cols"
		:id="id"
		:label="label"
		:label-visible="labelVisible">
	</text-input>
</template>

<style>

</style>

<script>

	import TextInput from '../Form/TextInput.vue';

	export default {

		ready() {

			var self = this;

			$("#" + self.id).picker({
			  toolbarTemplate: '<header class="bar bar-nav">\
			  <button class="button button-link pull-right close-picker">确定</button>\
			  <h1 class="title">' + self.title + '</h1>\
			  </header>',
			  cols: self.cols,
			  cssClass: self.cssClass,
			  opened: self.opened,
			  closed: self.closed,
			  formatValue: self.formatValue,
			  rotateEffect: self.rotateEffect,
			  value: self.model
			});
		},

		components: {
			TextInput
		},

		props: {

			id: {
				type: String,
				required: true,
				default () {
					return '';
				}
			},

			label: {
				type: String,
				default () {
					return '';
				}
			},

			formatValue: {
				type: String,
				default () {
					return '';
				}
			},

			cssClass: {
				type: String,
				default () {
					return '';
				}
			},

			title: {
				type: String,
				default () {
					return '请选择';
				}
			},

			cols: {
				type: Array,
				default () {
					return [];
				}
			},

			changed: {
				type: Function,
				default () {
					return function() {};
				}
			},

			opened: {
				type: Function,
				default () {
					return function() {};
				}
			},

			model: {
				type: String,
				default () {
					return '';
				}
			},

			formatValue: {
				type: String,
				default () {
					return '';
				}
			},

			rotateEffect: {
				type: Boolean,
				default () {
					return false;
				}
			},

			labelVisible: {
				type: Boolean,
				default () {
					return true;
				}
			}

		}

	}

</script>
