<template>

	<div>
		<cards content-title="普通卡片">
			
		</cards>

		<list-title>标题233</list-title>
		<card>
			<card-content>纯文本卡片</card-content>
		</card>

		<cards content-title="风格卡片">
			<card>
				<card-header css-class="color-white no-border no-padding">
	  			    <img class='card-cover' src="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" alt="">
	  			</card-header>
	  			<card-content>
	  				<p class="color-gray">发表于 2015/01/15</p>
			        <p>此处是内容...</p>
	  			</card-content>
	  			<card-footer>
	  				<link label="赞"></link>
	  				<link label="更多"></link>
	  			</card-footer>
			</card>
		</cards>


		<cards content-title="Facebook">
			<card :facebook="true">
				<card-header css-class="no-border">
					<div class="facebook-avatar"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="34" height="34"></div>
				      <div class="facebook-name">夜萧</div>
				      <div class="facebook-date">星期一 3:47pm</div>
	  			</card-header>
	  			<card-content>
		  			<img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="100%">
	  				<p class="color-gray">发表于 2015/01/15</p>
			        <p>此处是内容...</p>
	  			</card-content>
	  			<card-footer css-class="no-border">
	  				<link label="赞"></link>
	  				<link label="更多"></link>
	  			</card-footer>
			</card>
		</cards>
	</div>

</template>

<style>
	
</style>

<script>

	import Cards from './ui/Card/Cards.vue';
	import Card from './ui/Card/Card.vue';
	import CardContent from './ui/Card/CardContent.vue';
	import CardHeader from './ui/Card/CardHeader.vue';
	import CardFooter from './ui/Card/CardFooter.vue';
	import ListTitle from './ui/List/ListTitle.vue';
	import Link from './ui/Button/Link.vue';

	export default {

		components: {
			Cards,
			Card,
			CardContent,
			CardHeader,
			CardFooter,
			ListTitle,
			Link
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