<template>

  	<label @click="dispatchEvent" class="item-content" v-bind:class="{'item-link': link, 'label-checkbox': optional}">
        <input type="{{optionType}}" v-show="optional" name="{{name}}">
		<div v-show="icon" class="item-media">
			<slot name="media"><i class="icon {{icon}}"></i></slot>
		</div>
		<div class="item-inner">
			<div class="item-title-row" v-if="media">
		  		<div class="item-title">{{title}}{{name}}</div>
		  		<div class="item-after">{{after}}</div>
			</div>
  			<div v-else class="item-title">{{title}}</div>
  			<div v-else v-show="!media" class="item-after">{{after}}</div>
	  		<div v-show="subTitle" class="item-subtitle">{{subTitle}}</div>
	  		<div v-show="text" class="item-text">{{text}}</div>
		</div>
	</label>

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