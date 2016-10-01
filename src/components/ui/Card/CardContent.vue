<template>

    <div class="card-content {{cssClass}}">
	    <div class="card-content-inner">
	    	<slot></slot>
	    </div>
    </div>

</template>

<style>

</style>

<script>
	
	export default {
		props: {
			cssClass: {
				type: String,
				default () {
					return '';
				}
			}
		}
	}

</script>