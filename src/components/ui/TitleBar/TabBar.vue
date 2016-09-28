<template>

	<common-bar>
		<div slot="bar-left">
			<slot name="bar-left"></slot>
		</div>
		<div slot="title">
		  	<div class="buttons-row">
		    	<a v-for="(key, tab) in tabs" @click="dispatchEvent(tab, key)" class="tab-link button" v-bind:class="{'active': tab.active}">{{tab.label}}</a>
		  	</div>
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
			CommonBar
		},

		data: function() {
			return {
				currentActiveTab: 0
			}
		},

		methods: {

			dispatchEvent: function(tab, key) {
				this.$dispatch('tabsItemClicked', {
					current: tab,
					key: key
				});
				this.tabs[this.currentActiveTab].active = false;
				this.tabs[key].active = true;
				this.currentActiveTab = key;
			}

		}

	}

</script>