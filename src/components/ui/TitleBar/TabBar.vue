<template>

	<common-bar>
		<div slot="bar-left">
			<slot name="bar-left"></slot>
		</div>
		<div slot="title">
			<tab-header type="row" :tabs.sync="tabs"></tab-header>
		</div>
		<div slot="bar-right">
			<slot name="bar-right"></slot>			
		</div>
	</common-bar>

</template>

<style>
	
</style>

<script>

	import CommonBar from './CommonBar.vue'
	import TabHeader from '../Tabs/TabHeader.vue'

	export default {

		props: {

			tabs: {
				type: Array,
				default () {
					return [];
				}
			}

		},

		components: {
			CommonBar,
			TabHeader
		}
	}

</script>