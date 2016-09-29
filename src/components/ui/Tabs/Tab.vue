<template>

	<div>
		<tab-header 
			:type.sync="type"
			:tabs.sync="tabsHeader"
			:with-panel="true"
			:fixed.sync="fixed"
			:offset.sync="offset">
		</tab-header>
		<div class="tabs">
			<div slot="body">
				<slot name="body"></slot>
			</div>
		</div>
	</div>

</template>

<style>
	
</style>

<script>

	import TabHeader from './TabHeader.vue'

	export default {

		props: {

			tabsHeader: {
				type: Array,
				default () {
					return [];
				}
			},

			type: {
				type: String,
				default () {
					return 'tab'
				}
			},

			tabsItem: {
				type: String,
				default () {
					return 'tab'
				}
			},

			fixed: {
				type: Boolean,
				default () {
					return false;
				}
			},

			offset: {
				type: String,
				default () {
					return '';
				}
			}

		},

		components: {
			TabHeader
		}

	}

</script>