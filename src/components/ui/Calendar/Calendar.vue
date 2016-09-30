<template>
	<text-input 
		:label="label"
		:id="id" 
		:label-visible="labelVisible"></text-input>
</template>

<style>

</style>

<script>

	import TextInput from '../Form/TextInput.vue';

	export default {

		ready() {

			var self = this;

			$("#" + self.id).calendar({
		      value: [self.value],
		      onChange: self.changed,
		      onClose: self.closed,
		      onOpen: self.opened,
		      minDate: self.minDate,
		      maxDate: self.maxDate,
		      dateFormat: self.dateFormat,
		      inputReadOnly: self.readonly
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

			readonly: {
				type: Boolean,
				default () {
					return true;
				}
			},

			label: {
				type: String,
				default () {
					return '';
				}
			},

			labelVisible: {
				type: Boolean,
				default () {
					return true;
				}
			},

			value: {
				type: String,
				default () {
					return '2015-12-05';
				}
			},

			dateFormat: {
				type: String,
				default () {
					return 'yyyy-mm-dd';
				}
			},

			minDate: {
				type: String,
				default () {
					return undefined;
				}
			},

			maxDate: {
				type: String,
				default () {
					return undefined;
				}
			},

			changed: {
				type: Function,
				default () {
					return function(p, values, displayValues) {};
				}
			},

			opened: {
				type: Function,
				default () {
					return function(p) {};
				}
			},

			closed: {
				type: Function,
				default () {
					return function(p) {};
				}
			}

		}

	}

</script>
