<template>
	<a :clicked="clicked" :key="key" @click="dispatchEvent" class="button" v-bind:class="{'disabled': disabled, 'button-round': rounded, 'button-fill': fill, 'button-big': big, 'button-light': light, 'button-dark': dark, 'button-success': success, 'button-danger': danger, 'button-warning': warning, 'active': active}">
		<slot name="body">{{label}}</slot>
	</a>
</template>

<style>
	
</style>

<script>

	export default {

		props: {
			label: {
				type: String,
				default () {
					return '按钮'
				}
			},

			disabled: {
				type: Boolean,
				default () {
					return false;
				}
			},

			rounded: {
				type: Boolean,
				default () {
					return false;
				}
			},

			big: {
				type: Boolean,
				default () {
					return false;
				}
			},

			fill: {
				type: Boolean,
				default () {
					return false;
				}
			},

			light: {
				type: Boolean,
				default () {
					return false;
				}
			},

			dark: {
				type: Boolean,
				default () {
					return false;
				}
			},

			success: {
				type: Boolean,
				default () {
					return false;
				}
			},

			danger: {
				type: Boolean,
				default () {
					return false;
				}
			},

			warning: {
				type: Boolean,
				default () {
					return false;
				}
			},

			active: {
				type: Boolean,
				default () {
					return false;
				}
			},

			clicked: {
				type: Function,
				default () {
					return function() {};
				}
			},

			click: {
				type: String,
				default () {
					return '';
				}
			},

			key: {
				type: Number,
				default () {
					return 0;
				}
			}
		},

		methods: {
			dispatchEvent: function() {
				var self = this;

				if(self.disabled) {
					return false;
				}

				if(this.click !== '') {
					this.$dispatch(this.click, {
						current: self.$el,
						key: self.key
					});						
					return false;
				}

				this.$dispatch('buttonClicked', {
					current: self.$el,
					key: self.key
				});
			}
		}

	}

</script>