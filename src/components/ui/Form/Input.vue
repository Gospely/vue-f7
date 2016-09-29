<template>

	<div class="item-input">
      	<input type="{{type}}" placeholder="{{placeholder}}">
    </div>

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