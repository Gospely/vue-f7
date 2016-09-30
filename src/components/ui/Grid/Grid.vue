<template>

	<div class="row" v-bind:class="{'no-gutter': !gutter}">
		<slot></slot>
    </div>

</template>

<style>

</style>

<script>

	export default {

		props: {

			gutter: {
				type: Boolean,
				default () {
					return true;
				}
			}

		}

	}

</script>
