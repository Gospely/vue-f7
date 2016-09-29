<template>

	<input type="{{type}}" placeholder="{{placeholder}}">
	
</template>

<style>
	
</style>

<script>

	export default {

		props: {

			type: {
				type: String,
				default () {
					return 'text';
				}
			},

			placeholder: {
				type: String,
				default () {
					return '';
				}
			}

		}

	}

</script>