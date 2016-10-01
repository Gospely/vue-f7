<template>

	<div>
		<list-title v-show="titleVisible">{{title}}</list-title>
	  	<div class="list-block" v-bind:class="{'contacts-block': contactList}">
	  		<slot>
			    <ul v-if="!contactList">
			      	<list-item v-for="(key, item) in items" 
			      		:link="item.link"
			      		:title="item.title"
			      		:after="item.after"
			      		:icon="item.icon"
			      		:key="key" 
			      		:item="item">
			      	</list-item>
			    </ul>
			    <div v-else>
				    <div class="list-group" v-for="(key, group) in listGroup">
				    	<ul>
				    		<li class="list-group-title">{{group.title}}</li>
					        <li v-for="(k, item) in group.items">
						      	<list-item 
						      		:link="item.link"
						      		:title="item.title"
						      		:icon="item.icon"
						      		:after="item.after"
						      		:key="k" 
						      		:item="item">
						      	</list-item>
					        </li>
				    	</ul>
				    </div>		    	
			    </div>
	  		</slot>
	  	</div>
	</div>

</template>

<style>
	
</style>

<script>

	import ListItem from './ListItem.vue';
	import ListTitle from './ListTitle.vue';

	export default {

		components: {
			ListItem,
			ListTitle
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
				
		}
		
	}

</script>