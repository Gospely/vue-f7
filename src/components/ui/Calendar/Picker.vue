<template>
	<text-input 
		text-align="textAlign"
		title="title"
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
			  cols: [
			    {
			      textAlign: self.textAlign,
			      values: self.cols
			    }
			  ]
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

			textAlign: {
				type: String,
				default () {
					return 'center';
				}
			},

			title: {
				type: String,
				default () {
					return '';
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

			model: {
				type: String,
				default () {
					return '';
				}
			}

		}

	}

</script>
