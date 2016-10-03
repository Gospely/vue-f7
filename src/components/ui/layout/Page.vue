<template>
		
	<div class="content" id="{{id}}" v-bind:class="{'pull-to-refresh-content': pullRefresh, 'infinite-scroll': scrollRefresh, 'infinite-scroll-top': scrollPosition == 'top', 'infinite-scroll-bottom': scrollPosition == 'bottom'}" data-ptr-distance="{{ptrDistance}}" data-distance="{{scrollDistance}}">
		<pull-refresh v-show="pullRefresh"></pull-refresh>
		<slot></slot>
		<scroll-preloader v-show="scrollRefresh"></scroll-preloader>
	</div>

</template>

<style>

</style>

<script>

	import PullRefresh from '../Loader/PullRefresh.vue'
	import ScrollPreloader from '../Loader/ScrollPreloader.vue';

	export default {

		props: {
			pullRefresh: {
				type: Boolean,
				default () {
					return false;
				}
			},

			id: {
				type: String,
				default () {
					return '';
				}
			},

			scrollRefresh: {
				type: Boolean,
				default () {
					return false;
				}
			},

			ptrDistance: {
				type: String,
				default () {
					return '44';
				}
			},

			scrollDistance: {
				type: String,
				default () {
					return '50';
				}
			},

			scrollPosition: {
				type: String,
				default () {
					return 'bottom';
				}
			}
		},

		ready() {

			var self = this;

			if(this.pullRefresh) {
		      	$.init();
				$(document).on('refresh', '#' + this.id,function(e) {
					self.$dispatch('pullRefresh');
				});
			}

			if(this.scrollRefresh) {
		      	$.init();
		      	$(document).on('infinite', '#' + this.id,function(e) {
					self.$dispatch('scrollRefresh');
				});
			}
		},

		components: {
			PullRefresh,
			ScrollPreloader
		}

	}

</script>