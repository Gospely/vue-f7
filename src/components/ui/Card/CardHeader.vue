<template>

	<div class="card-header {{cssClass}}">
		<slot></slot>
	</div>

</template>

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
