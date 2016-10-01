<template>

	<div>
		<list title="标题测试" :items="items"></list>
		<list :contact-list="true" :list-group.sync="listGroup"></list>

		<media-list :list-items.sync="listItems" content-title="曲目">
		</media-list>

		<radio-list name="fuck" content-title="单选" :radio-items.sync="radioItems"></radio-list>

		<check-list content-title="多选" :check-items.sync="radioItems"></check-list>
	</div>

</template>

<style>
	
</style>

<script>

	import List from './ui/List/List.vue';
	import MediaList from './ui/List/MediaList.vue';
	import ListItem from './ui/List/ListItem.vue';
	import RadioList from './ui/List/RadioList.vue';
	import CheckList from './ui/List/CheckList.vue';

	export default {

		components: {
			List,
			MediaList,
			RadioList,
			CheckList,
			ListItem
		},

		data () {
			return {

				items: [{
					icon: 'icon-f7',
					title: '商品名称',
					after: '杜蕾斯',
					link: false
				}, {
					icon: '',
					title: '型号',
					after: '极致超薄型',
					link: true
				}, {
					icon: '',
					title: '库存',
					after: '123件',
					link: true
				}],

				listGroup: [{
					title: 'A',
					items: [{
						title: '标题1',
						after: 'fuck',
						link: false
					}]
				}, {
					title: 'B',
					items: [{
						title: '标题1',
						link: true,
						icon: 'icon-f7'
					}]
				}],

				listItems: [{
					subTitle: '标题',
					title: 'fuck',
					after: 'shit',
					text: '文本内容...',
					link: true
				}, {
					subTitle: '标题fuck',
					title: 'bitch',
					after: 'shit',
					text: '文本内容...',
					link: false
				}],

				radioItems: [{
					subTitle: '标题',
					title: 'fuck',
					after: 'shit',
					text: '文本内容...',
					link: true
				}, {
					subTitle: '标题fuck',
					title: 'bitch',
					after: 'shit',
					text: '文本内容...',
					link: false
				}]

			}
		},

		events: {
			'listItemClicked': function(item) {
				console.log(item);
			}
		}

	}

</script>