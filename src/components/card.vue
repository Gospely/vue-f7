<template>

	<div>
		<cards>
			
		</cards>
	</div>

</template>

<style>
	
</style>

<script>

	import Cards from './ui/Card/Cards.vue';

	export default {

		components: {
			Cards
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