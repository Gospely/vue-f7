<template>

	<div>
		<list title="标题测试" :items="items"></list>		

		<list :contact-list="true" :list-group.sync="listGroup"></list>
	</div>

</template>

<style>
	
</style>

<script>

	import List from './ui/List/List.vue';
	import ContactList from './ui/List/ContactList.vue';

	export default {

		components: {
			List
		},

		data () {
			return {

				items: [{
					icon: 'icon-f7',
					title: '商品名称',
					after: '杜蕾斯',
					link: false
				}, {
					icon: false,
					title: '型号',
					after: '极致超薄型',
					link: true
				}, {
					icon: true,
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