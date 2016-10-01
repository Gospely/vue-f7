<template>

	<div>
		<div v-show="titleVisible" class="content-block-title">{{contentTitle}}</div>

		<div class="list-block media-list">
			<ul>
				<li>
				<slot>
					<list-item
						v-for="(key, radio) in radioItems"
						:media="true"
						:optional="true"
						:sub-title.sync="radio.subTitle"
						:title.sync="radio.title"
						:after.sync="radio.after"
						:text.sync="radio.text"
						:link.sync="radio.link"
						:name.sync="name"
						icon="icon-form-checkbox"
						>
					</list-item>
				</slot>
				</li>
			</ul>
		</div>

	</div>

</template>

<style>

</style>

<script>

	import BaseList from './BaseList.vue';
	import ListItem from './ListItem.vue';	

	export default {

		mixins: [BaseList],

		components: {
			ListItem
		},

		props: {
			radioItems: {
				type: Array,
				default () {
					return [];
				}
			}
		}

	}

</script>