<template>

	<div>
		<div v-show="titleVisible" class="content-block-title">{{contentTitle}}</div>

		<div class="list-block media-list">
			<ul>
				<slot>
					<list-item 
						v-for="(key, item) in listItems"
						:media="true"
						:sub-title.sync="item.subTitle"
						:title.sync="item.title"
						:after.sync="item.after"
						:text.sync="item.text"
						:link.sync="item.link"
						>
						<img slot="media" src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" style='width: 4rem;'>
					</list-item>
				</slot>
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
			listItems: {
				type: Array,
				default () {
					return [];
				}
			}
		}

	}

</script>