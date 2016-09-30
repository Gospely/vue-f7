<template>

  	<div class="buttons-{{type}}">
    	<a v-for="(key, tab) in tabs" @click="dispatchEvent(tab, key)" class="tab-link button" v-bind:class="{'active': tab.active}">{{tab.label}}</a>
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

		},

		data: function() {
			return {
				currentActiveTab: 0
			}
		},

		ready () {

			console.log($(window).scroll);



		},

		methods: {

			dispatchEvent: function(tab, key) {

				if(key == this.currentActiveTab) {
					return false;
				}

				if(this.withPanel) {
					$('#' + this.tabs[this.currentActiveTab].tab).removeClass('active');

					$('#' + this.tabs[key].tab).addClass('active');
				}else {
					this.$dispatch('tabsItemClicked', {
						current: tab,
						key: key
					});

				}

				this.tabs[this.currentActiveTab].active = false;
				this.tabs[key].active = true;
				this.currentActiveTab = key;
			}

		}

	}

</script>