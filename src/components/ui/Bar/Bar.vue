<template>

	<nav class="bar bar-tab">
	  <a class="tab-item external" v-bind:class="{'active': tab.active}" v-for="(key, tab) in tabItems" @click="dispatchEvent(tab, key)">
	    <span class="icon {{tab.icon}}" v-show="tab.icon"></span>
	    <span v-bind:class="{'tab-label': tab.icon}">{{tab.label}}</span>
	    <span class="badge" v-show="tab.badge > 0">{{tab.badge}}</span>
	  </a>
	</nav>

</template>

<style>
	
</style>

<script>

	export default {

		props: {
			tabItems: {
				type: Array,
				default () {
					return [];
				}
			}
		},

		data () {

			return {
				currentActiveTab: 0
			}

		},

		methods: {

			dispatchEvent: function(tab, key) {
				this.tabItems[this.currentActiveTab].active = false;
				this.tabItems[key].active = true;
				this.currentActiveTab = key;
				this.$dispatch('BarItemsClicked', {
					current: tab,
					key: key
				});
			}

		}

	}

</script>