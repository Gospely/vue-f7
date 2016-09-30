<template>

	<div class="bar bar-footer">
		<slot name="bar-left"></slot>
		<slot name="title"></slot>
		<slot name="bar-right">
	  		<a class="icon icon-settings pull-right"></a>
		</slot>
	</div>

</template>

<style>
	
</style>

<script>

	export default {

		props: {
		}

	}

</script>