<template>
	<div>
		<tab :fixed="true" :tabs-header.sync="tabsHeader" offset="44">
	        <div slot="body">
	          <tab-item id="tab3" :active="true">
	            <div slot="body">
		            <p><a class="button button-fill" @click="open">打开左侧栏</a></p>
	            </div>
	          </tab-item>
	          <tab-item id="tab4">
	            <div slot="body">
	              <p style="height:600px">This is tab 3 content start</p>
	              <p >This is tab 3 content end</p>
	            </div>
	          </tab-item>
	        </div>
      	</tab>
	</div>
</template>

<style>

</style>

<script>

	import Tab from './ui/Tabs/Tab.vue';
	import TabItem from './ui/Tabs/TabItem.vue';
  	import Panel from './ui/Panel/Panel.vue';

	export default {
	  data () {

	    return {

	      tabsHeader: [{
	        active: true,
	        label: 'shit',
	        tab: 'tab3',
	      }, {
	        active: false,
	        label: 'fuck',
	        tab: 'tab4'
	      }]

	    }

	  },

	  ready() {
	  },

	  methods: {

	      open: function() {
	        Panel.methods.open('test-panel');
	      }

	  },

	  components: {
	    Tab,
	    TabItem
	  }
	}

</script>
