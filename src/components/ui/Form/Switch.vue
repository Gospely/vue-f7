<template>

    <li>
        <div class="item-content">
          	<div v-show="iconVisible" class="item-media"><i class="icon {{icon}}"></i></div>
          	<div class="item-inner">
            <div v-show="labelVisible" class="item-title label">开关</div>
            <div class="item-input">
              	<label class="label-switch">
                	<input v-model="on" v-on:change="changed(on)" type="checkbox">
                	<div class="checkbox"></div>
              	</label>
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
					return '开关';
				}
			},

			iconVisible: {
				type: Boolean,
				default () {
					return true;
				}
			},

			labelVisible: {
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

			on: {
				type: Boolean,
				default () {
					return false;
				}
			},

			changed: {
				type: Function,
				default () {
					return function() {};
				}
			}

		},

		methods: {
			change: function() {
				console.log(this.on);
			}
		}

	}

</script>