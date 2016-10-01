<template>
	
	<a class="link">{{label}}</a>	

</template>

<script>

	export default {

		props: {
			label: {
				type: String,
				default () {
					return '链接'
				}
			}
		}

	}

</script>
