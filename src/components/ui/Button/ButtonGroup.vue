<template>

    <p class="buttons-row">
    	<btn :active.sync="btn.active" :key="key" v-for="(key, btn) in groups" :label.sync="btn.label"></btn>
    </p>

</template>

<style>
	
</style>

<script>

	import Btn from './Button.vue';

	export default {

		props: {
			groups: {
				type: Array,
				default () {
					return [];
				}
			}
		},

		components: {
			Btn
		},

		data () {
			return {
				currentActivebtn: 0
			}
		},

		methods: {
			fuck: function() {
				console.log('ssdff');
			},

			dispatchEvent: function(btn, key) {
				this.$dispatch('buttonGroupClicked', {
					current: btn,
					key: key
				});
			}

		},

		events: {
		    'buttonClicked': function(el) {
		    	if(el.key == this.currentActivebtn) {
		    		return false;
		    	}

		    	this.groups[el.key].active = true;
		    	this.groups[this.currentActivebtn].active = false;
		    	this.currentActivebtn = el.key;
		    	this.dispatchEvent(el.current, el.key);
		    }
		}

	}

</script>