<template>
	<div>
		<tab :fixed="true" :tabs-header.sync="tabsHeader" offset="44">
	        <tab-item id="tab3" :active="true">
	            <p><a class="button button-fill" @click="open">打开左侧栏</a></p>
	            <p><btn click="openAlert" label="弹出文本"></btn></p>
	            <p><btn click="openAlertTitle" label="弹出文本和标题"></btn></p>
	            <p><btn click="openAlertTitleAndCB" label="弹出文本标题和回调"></btn></p>
	            <p><btn click="openConfirm" label="确认框"></btn></p>
	            <p><btn click="openConfirmAndCB" label="确认框取消按钮回调"></btn></p>
	            <p><btn click="openConfirmTitleAndCB" label="确认框带有标题的回调"></btn></p>
	            <p><btn click="openPrompt" label="提示框"></btn></p>
	        </tab-item>
	        <tab-item id="tab4">
	        	<grid>
	        		<grid-row col="33">33%</grid-row>
	        		<grid-row col="33">33%</grid-row>
	        		<grid-row col="33">33%</grid-row>
	        	</grid>

	        	<grid>
	        		<grid-row col="50">50%</grid-row>
	        		<grid-row col="50">50%</grid-row>
	        	</grid>

	        	<h3>No gutter</h3>

	        	<grid :gutter="false">
	        		<grid-row col="20">20%</grid-row>
	        		<grid-row col="80">80%</grid-row>
	        	</grid>

	        </tab-item>
      	</tab>
	</div>
</template>

<style>

</style>

<script>

	import Tab from './ui/Tabs/Tab.vue';
	import TabItem from './ui/Tabs/TabItem.vue';
  	import Panel from './ui/Panel/Panel.vue';

  	import Grid from './ui/Grid/Grid.vue';
  	import GridRow from './ui/Grid/GridRow.vue';

  	import btn from './ui/Button/Button.vue';

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

	  events: {

		'openAlert': function() {
	      	$.alert('文本');
	    },

		'openAlertTitle': function() {
	      	$.alert('文本', '标题');
	    },

	    'openAlertAndCB': function() {
	      	$.alert('文本', function() {
	      		$.alert('button clicked');
	      	});
	    },

	    'openAlertTitleAndCB': function() {
	      	$.alert('文本', '标题', function() {
	      		$.alert('button clicked');
	      	});
	    },

	    'openConfirm': function() {
	    	$.confirm('你确定？', function () {
		          $.alert('你点击了确认按钮');
		    });
	    },

	    'openConfirmAndCB': function() {
	    	$.confirm('你确定？', function () {
		        $.alert('你点击了确认按钮');
		    }, function() {
		    	$.alert('你点击了取消按钮');
		    });
	    },

	    'openConfirmTitleAndCB': function() {
	    	$.confirm('你确定？', '标题', function () {
		        $.alert('你点击了确认按钮');
		    }, function() {
		    	$.alert('你点击了取消按钮');
		    });
	    },

	    'openPrompt': function() {
	    	$.prompt('打开提示框',
		        function (value) {
		          $.alert('你输入了 "' + value + '". 你点击了确认按钮');
		        },
		        function (value) {
		          $.alert('你输入了 "' + value + '". 你点击了取消按钮');
		        }
		    );
	    }

	  },

	  components: {
	    Tab,
	    TabItem,
	    Grid,
	    GridRow,
	    btn
	  }
	}

</script>
