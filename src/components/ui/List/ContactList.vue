<template>

	<div>
		<div v-show="titleVisible" class="content-block-title">{{title}}</div>
	  	<div class="list-block">
		    <ul>
		      	<li @click="dispatchEvent(item, key)" class="item-content" v-bind:class="{'item-link': item.link}" v-for="(key, item) in items">
		        	<div v-show="item.icon" class="item-media">
		        		<i class="icon {{item.icon}}"></i>
		        	</div>
		        	<div class="item-inner">
		          		<div class="item-title">{{item.title}}</div>
		          		<div class="item-after">{{item.after}}</div>
		        	</div>
		      	</li>
		    </ul>
	  	</div>
	</div>

</template>

<style>
	
</style>

<script>


	export default {

		props: {

			title: {
				type: String,
				default () {
					return '标题';
				}
			},

			items: {
				type: Array,
				default () {
					return [];
				}
			},

			titleVisible: {
				type: Boolean,
				default () {
					return true;
				}
			}

		},

		methods: {
			dispatchEvent: function(item, key) {
				console.log('dispatchEvent');
				this.$dispatch('listItemClicked', {
					current: item,
					key: key
				});
			}
		}
		
	}

</script>