<template>

	<header class="bar bar-nav">
		<slot name="bar-left"></slot>
		<slot name="title">
		  	<h1 class="title">{{title}}</h1>
		</slot>
		<slot name="bar-right"></slot>
	</header>

</template>

<style>
	
</style>

<script>

	export default {

		props: {
			title: {
				type: String,
				default () {
					return '标题'
				}
			}
		}

	}

</script>