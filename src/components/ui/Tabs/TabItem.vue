<template>

    <div class="tabs">
      	<div id="{{id}}" class="tab" v-bind:class="{'active': active}">
        	<div class="content-block">
        		<slot name="body"></slot>
        	</div>
      	</div>
    </div>

</template>

<style>
	
</style>

<script>

	export default {

		props: {

			tabs: {
				type: Array,
				default () {
					return [];
				}
			},

			active: {
				type: Boolean,
				default () {
					return false;
				}
			},

			id: {
				type: String,
				default () {
					return '';
				}
			}

		},

		components: {

		}

	}

</script>