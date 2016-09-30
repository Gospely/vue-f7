<template>

	<li>
        <div class="item-content">
          	<div v-show="iconVisible" class="item-media"><i class="icon {{icon}}"></i></div>
          	<div class="item-inner">
            <div v-show="labelVisible" class="item-title label">{{label}}</div>
            <div class="item-input">
              	<input id="{{id}}" class="{{cls}}" debounce="debounce" v-model="model" @keyup.tab="tab" @keyup.delete="deleted" @keyup.esc="esc" @keyup.space="space" @keyup.up="up" @keyup.enter="enter" @keyup.down="down" @keyup.left="left" @keyup.right="right" @keyup="keyup" type="{{type}}" placeholder="{{placeholder}}">
            </div>
          </div>
        </div>
    </li>

</template>

<style>
	
</style>

<script>

	export default {

		props: {
			label: {
				type: String,
				default () {
					return '表单';
				}
			},

			labelVisible: {
				type: Boolean,
				default () {
					return true;
				}
			},

			iconVisible: {
				type: Boolean,
				default () {
					return true;
				}
			},

			icon: {
				type: String,
				default () {
					return '';
				}
			},

			id: {
				type: String,
				default () {
					return '';
				}
			},

			cls: {
				type: String,
				default () {
					return '';
				}
			},

			type: {
				type: String,
				default () {
					return 'text';
				}
			},

			placeholder: {
				type: String,
				default () {
					return '';
				}
			},

			model: {
				type: String,
				default () {
					return '';
				}
			},

			keyup: {
				type: Function,
				default () {
					return function() {};
				}
			},

			enter: {
				type: Function,
				default () {
					return function() {};
				}
			},

			tab: {
				type: Function,
				default () {
					return function() {};
				}
			},

			deleted: {
				type: Function,
				default () {
					return function() {};
				}
			},

			esc: {
				type: Function,
				default () {
					return function() {};
				}
			},

			space: {
				type: Function,
				default () {
					return function() {};
				}
			},

			up: {
				type: Function,
				default () {
					return function() {};
				}
			},

			down: {
				type: Function,
				default () {
					return function() {};
				}
			},

			left: {
				type: Function,
				default () {
					return function() {};
				}
			},

			right: {
				type: Function,
				default () {
					return function() {};
				}
			},

			debounce: {
				type: Number,
				default () {
					return 0;
				}
			}

		}

	}

</script>