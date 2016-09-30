<template>

	<div>
		<div v-show="titleVisible" class="content-block-title">{{title}}</div>
	  	<div class="list-block" v-bind:class="{'contacts-block': contactList}">
		    <ul v-if="!contactList">
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
		    <div v-else>
			    <div class="list-group" v-for="(key, group) in listGroup">
			    	<ul>
			    		<li @click="dispatchEvent(item, key)" class="list-group-title">{{group.title}}</li>
				        <li v-for="(k, item) in group.items">
				          	<div class="item-content" v-bind:class="{'item-link': item.link}">
					        	<div v-show="item.icon" class="item-media">
					        		<i class="icon {{item.icon}}"></i>
					        	</div>
				            	<div class="item-inner">
				              		<div class="item-title">{{item.title}}</div>
					          		<div class="item-after">{{item.after}}</div>
				            	</div>
				         	</div>
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