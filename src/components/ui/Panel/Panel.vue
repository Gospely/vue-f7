<template>

	<div>
		<div class="panel-overlay"></div>
		<div class="panel panel-reveal theme-dark" v-bind:class="{'panel-left': left, 'panel-right': !left}" id='{{id}}'>
		  <div class="content-block">
		  	<slot name="body">
		  		<p>这是一个侧栏</p>
			    <p>你可以在这里放用户设置页面</p>
			    <p><a class="close-panel">关闭</a></p>
		  	</slot>
		  </div>
		</div>
	</div>

</template>

<style>

</style>

<script>

	export default {

		props: {

			left: {
				type: Boolean,
				default () {
					return true;
				}
			},

			id: {
				type: String,
				required: true,
				default () {
					return '';
				}
			}

		},

		methods: {

			open: function(id) {
				id = id || this.id
				$.openPanel('#' + id);
			},

			close: function(id) {
				id = id || this.id;
				$.closePanel('#' + this.id);
			}

		}

	}

</script>
