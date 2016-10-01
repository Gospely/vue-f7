<template>

	<div>
		<cards content-title="普通卡片">
			
		</cards>

		<list-title>标题233</list-title>
		<card>
			<card-content>纯文本卡片</card-content>
		</card>
	</div>

</template>

<style>
	
</style>

<script>

	import Cards from './ui/Card/Cards.vue';
	import Card from './ui/Card/Card.vue';
	import CardContent from './ui/Card/CardContent.vue';
	import ListTitle from './ui/List/ListTitle.vue';

	export default {

		components: {
			Cards,
			Card,
			CardContent,
			ListTitle
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
				}]

			}
		},

		events: {

		}

	}

</script>