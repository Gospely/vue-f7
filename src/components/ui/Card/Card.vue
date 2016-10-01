<template>

    <div class="list-block cards-list">
    	<ul>
			<li class="card">
				<card-header>卡头</card-header>
				<card-content>卡内容</card-content>
				<card-footer>卡尾</card-footer>
			</li>
    	</ul>
    </div>

</template>

<style>

</style>

<script>

	import CardHeader from './CardHeader.vue';
	import CardContent from './CardContent.vue';
	import CardFooter from './CardFooter.vue';

	export default {

		components: {
			CardHeader,
			CardFooter,
			CardContent
		}

	}

</script>
