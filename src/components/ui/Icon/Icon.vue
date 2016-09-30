<template>
	<span class="{{iconCls}} {{iconCls}}-{{icon}}"></span>
</template>

<style>

</style>

<script>

	export default {

		props: {

			iconCls: {
				type: String,
				default () {
					return 'icon';
				}
			},

			icon: {
				type: String,
				default () {
					return '';
				}
			}

		}

	}

</script>