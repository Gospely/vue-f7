<template>

    <div class="list-block cards-list">
    	<ul>
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
    	</ul>
    </div>

</template>

<style>

</style>

<script>

	import Card from './Card.vue';
	import CardHeader from './CardHeader.vue';
	import CardContent from './CardContent.vue';
	import CardFooter from './CardFooter.vue';

	export default {

		components: {
			CardHeader,
			CardFooter,
			CardContent,
			Card
		}

	}

</script>
