<template>

	<div class="popup {{cls}}">
	  <div class="content-block">
	  	<slot>
		    <p>About</p>
		    <p><a class="close-popup">Close popup</a></p>
		    <p>Lorem ipsum dolor ...</p>
	  	</slot>
	  </div>
	</div>

</template>

<style>
	
</style>

<script>

	export default {

		props: {

			cls: {
				type: String,
				default () {
					return '';
				}
			}

		}

	}

</script>
