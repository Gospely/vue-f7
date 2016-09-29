<template>

  	<div v-if="!withPanel" class="buttons-{{type}}">
    	<a v-for="(key, tab) in tabs" @click="dispatchEvent(tab, key)" class="tab-link button" v-bind:class="{'active': tab.active}">{{tab.label}}</a>
  	</div>

  	<div v-else class="buttons-{{type}}">
    	<a v-for="(key, tab) in tabs" href="tab.tab" class="tab-link button" v-bind:class="{'active': tab.active}">{{tab.label}}</a>
  	</div>

</template>

<style>
	
</style>

<script>

	export default {

		props: {

			tabs: {
				type: Array,
				default () {
					return [];
				}
			},

			type: {
				type: String,
				default () {
					return 'tab';
				}
			},

			withPanel: {
				type: Boolean,
				default () {
					return false;
				}
			}

		},

		components: {

		},

		data: function() {
			return {
				currentActiveTab: 0
			}
		},

		methods: {

			dispatchEvent: function(tab, key) {

				if(key == this.currentActiveTab) {
					return false;
				}

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