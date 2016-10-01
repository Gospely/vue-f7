<template>

	<div>
		<list-title v-show="contentTitle">{{contentTitle}}</list-title>
	    <div class="list-block cards-list">
	    	<ul>
	    		<slot>
		    		<card>
						<card-header>卡头</card-header>
						<card-content>卡内容</card-content>
						<card-footer>卡尾</card-footer>
		    		</card>
		    		<card>
						<card-header>卡头</card-header>
						<card-content>卡内容</card-content>
						<card-footer>卡尾</card-footer>
		    		</card>
	    		</slot>
	    	</ul>
	    </div>		
	</div>

</template>

<style>

</style>

<script>

	import Card from './Card.vue';
	import CardHeader from './CardHeader.vue';
	import CardContent from './CardContent.vue';
	import CardFooter from './CardFooter.vue';
	import ListTitle from '../List/ListTitle';

	export default {

		components: {
			CardHeader,
			CardFooter,
			CardContent,
			Card,
			ListTitle
		},

		props: {
			contentTitle: {
				type: String,
				default () {
					return '标题';
				}
			}
		}

	}

</script>
