<template>

  	<div @click="dispatchEvent" class="item-content" v-bind:class="{'item-link': link}">
		<div v-show="icon" class="item-media">
			<slot name="media"><i class="icon {{icon}}"></i></slot>
		</div>
		<div class="item-inner">
	  		<div class="item-title">{{title}}</div>
	  		<div class="item-after">{{after}}</div>
		</div>
	</div>

</template>

<style>

</style>

<script>

	import BaseList from './BaseList.vue';

	export default {

		mixins: [BaseList],

		ready () {

		},

		methods: {

			dispatchEvent: function() {
				var self = this;
				this.$dispatch('listItemClicked', {
					current: self.item,
					key: self.key
				});
			}

		}

	}

</script>