<template>

	<div class="card" v-bind:class="{'facebook-card': facebook}">
		<slot></slot>
	</div>

</template>

<script>

	export default {

		props: {
			facebook: {
				type: Boolean,
				default () {
					return false;
				}
			}
		}

	}

</script>
