<template>

	<div>
		<div v-show="titleVisible" class="content-block-title">{{title}}</div>
	  	<div class="list-block" v-bind:class="{'contacts-block': contactList}">
		    <ul v-if="!contactList">
		      	<list-item v-for="(key, item) in items" 
		      		:link="item.link"
		      		:title="item.title"
		      		:after="item.after"
		      		:key="key" 
		      		:item="item">
		      	</list-item>
		    </ul>
		    <div v-else>
			    <div class="list-group" v-for="(key, group) in listGroup">
			    	<ul>
			    		<li @click="dispatchEvent(item, key)" class="list-group-title">{{group.title}}</li>
				        <li v-for="(k, item) in group.items">
					      	<list-item 
					      		:link="item.link"
					      		:title="item.title"
					      		:after="item.after"
					      		:key="k" 
					      		:item="item">
					      	</list-item>
				        </li>
			    	</ul>
			    </div>		    	
		    </div>
	  	</div>
	</div>

</template>

<style>
	
</style>

<script>

	import ListItem from './ListItem.vue';

	console.log(ListItem);

	export default {

		components: {
			ListItem
		},

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
			},

			contactList: {
				type: Boolean,
				default () {
					return false;
				}
			},

			listGroup: {
				type: Array,
				default() {
					return [];
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