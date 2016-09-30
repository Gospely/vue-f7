<template>
	<text-input 
		:label="label"
		date-format="dateFormat"
		min-date="minDate"
		max-date="maxDate"
		on-change="onChange"
		on-open="onOpen"
		on-close="onClose"
		value="value"
		readonly="readonly"
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
		      onChange: self.onChange,
		      onClose: self.onClose,
		      onOpen: self.onOpen,
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

			onChange: {
				type: Function,
				default () {
					return function(p, values, displayValues) {};
				}
			},

			onOpen: {
				type: Function,
				default () {
					return function(p) {};
				}
			},

			onClose: {
				type: Function,
				default () {
					return function(p) {};
				}
			}

		}

	}

</script>
