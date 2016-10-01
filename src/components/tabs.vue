<template>
	<div class="content">
		<tab :fixed="true" :tabs-header.sync="tabsHeader" offset="44">
	        <tab-item id="tab5" :active="true">
	            <p><a class="button button-fill" @click="open">打开左侧栏</a></p>
	            <p><btn click="openAlert" label="弹出文本"></btn></p>
	            <p><btn click="openAlertTitle" label="弹出文本和标题"></btn></p>
	            <p><btn click="openAlertTitleAndCB" label="弹出文本标题和回调"></btn></p>
	            <p><btn click="openConfirm" label="确认框"></btn></p>
	            <p><btn click="openConfirmAndCB" label="确认框取消按钮回调"></btn></p>
	            <p><btn click="openConfirmTitleAndCB" label="确认框带有标题的回调"></btn></p>
	            <p><btn click="openPrompt" label="提示框"></btn></p>
	            <p><btn click="openPrompt" label="提示框"></btn></p>
	            <p><btn click="openModal" label="带有三个按钮的Modal"></btn></p>
	            <p><btn click="openModalWithCustomHTML" label="自定义html的Modal"></btn></p>
	            <p><btn click="openModalWithBerticalButtons" label="垂直按钮的Modal"></btn></p>
	            <p><btn click="openPreloader" label="打开预加载"></btn></p>
	            <p><btn click="openIndicator" label="打开迷你指示器"></btn></p>
	            <p><btn click="openToast" label="显示toast"></btn></p>
	        </tab-item>
	        <tab-item id="tab6">
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

	        	<h3>has gutter</h3>

	        	<grid :gutter="true">
	        		<grid-row col="33">
	        			
	        			<p>
	        				<btn click="openPopup" label="显示popup"></btn>
	        			</p>

	        		</grid-row>
	        		<grid-row col="33">

	        			<p>
	        				<btn click="openAction"></btn>
	        			</p>

	        		</grid-row>
	        	</grid>

	        </tab-item>
      	</tab>

	</div>
</template>

<style>

</style>

<script>

	import Vue from 'vue';

	import Tab from './ui/Tabs/Tab.vue';
	import TabItem from './ui/Tabs/TabItem.vue';

  	import Panel from './ui/Panel/Panel.vue';

  	import Grid from './ui/Grid/Grid.vue';
  	import GridRow from './ui/Grid/GridRow.vue';

  	import btn from './ui/Button/Button.vue';

  	import Calendar from './ui/Calendar/Calendar.vue';

	export default {
	  data () {

	    return {

	      tabsHeader: [{
	        active: true,
	        label: 'shit',
	        tab: 'tab5',
	      }, {
	        active: false,
	        label: 'fuck',
	        tab: 'tab6'
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
	    },

	    'openModal': function() {

		    $.modal({
		      title:  '带有三个按钮的Modal',
		      text: 'Vivamus feugiat diam velit. Maecenas aliquet egestas lacus, eget pretium massa mattis non. Donec volutpat euismod nisl in posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
		      buttons: [
		        {
		          text: 'B1',
		          onClick: function() {
		            $.alert('你点击了第一个按钮')
		          }
		        },
		        {
		          text: 'B2',
		          onClick: function() {
		            $.alert('你点击了第二个按钮')
		          }
		        },
		        {
		          text: 'B3',
		          bold: true,
		          onClick: function() {
		            $.alert('你点击了第三个按钮')
		          }
		        },
		      ]
		    });

	    },

	    'openModalWithCustomHTML': function() {

		    $.modal({
		      title:  `		<tab :fixed="true" :tabs-header.sync="tabsHeader" offset="44">
	        <tab-item id="tab5" :active="true">
	            <p><a class="button button-fill" @click="open">打开左侧栏</a></p>
	            <p><btn click="openAlert" label="弹出文本"></btn></p>
	            <p><btn click="openAlertTitle" label="弹出文本和标题"></btn></p>
	            <p><btn click="openAlertTitleAndCB" label="弹出文本标题和回调"></btn></p>
	            <p><btn click="openConfirm" label="确认框"></btn></p>
	            <p><btn click="openConfirmAndCB" label="确认框取消按钮回调"></btn></p>
	            <p><btn click="openConfirmTitleAndCB" label="确认框带有标题的回调"></btn></p>
	            <p><btn click="openPrompt" label="提示框"></btn></p>
	            <p><btn click="openPrompt" label="提示框"></btn></p>
	            <p><btn click="openModal" label="带有三个按钮的Modal"></btn></p>
	            <p><btn click="openModalWithCustomHTML" label="自定义html的Modal"></btn></p>
	            <p><btn click="openModalWithBerticalButtons" label="垂直按钮的Modal"></btn></p>
	        </tab-item>`,
		      text: `<tab-item id="tab6">
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
			      	</tab>`,
		      buttons: [
		        {
		          text: '好，我知道了',
		          bold: true
		        },
		      ]
		    });

	    },

	    'openModalWithBerticalButtons': function() {

		    $.modal({
		      	title:  '垂直按钮',
		      	text: 'Vivamus feugiat diam velit. Maecenas aliquet egestas lacus, eget pretium massa mattis non. Donec volutpat euismod nisl in posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
		      	verticalButtons: true,
		      	buttons: [
			        {
			          text: '按钮 1',
			          onClick: function() {
			            $.alert('You clicked first button!')
			          }
			        },
			        {
			          text: '按钮 2',
			          onClick: function() {
			            $.alert('You clicked second button!')
			          }
			        },
			        {
			          text: '按钮 3',
			          onClick: function() {
			            $.alert('You clicked third button!')
			          }
			        },
		      	]
		    });

	    },

	    'openPreloader': function() {
	    	$.showPreloader('正在加载...');
	    	setTimeout(function() {
	    		$.hidePreloader();
	    	}, 2000);
	    },

	    'openIndicator': function() {
		    $.showIndicator();
		    setTimeout(function () {
		        $.hideIndicator();
		    }, 2000);
	    },

	    'openToast': function() {
	    	$.toast('操作成功');
	    },

	    'openPopup': function() {
	    	$.popup('.about');
	    },

	    'openAction': function() {
	    	var buttons1 = [
		        {
		          text: '请选择',
		          label: true
		        },
		        {
		          text: '卖出',
		          bold: true,
		          color: 'danger',
		          onClick: function() {
		            $.alert("你选择了“卖出“");
		          }
		        },
		        {
		          text: '买入',
		          onClick: function() {
		            $.alert("你选择了“买入“");
		          }
		        }
		    ];

		    var buttons2 = [
		        {
		          text: '取消',
		          bg: 'danger'
		        }
		    ];

		    var groups = [buttons1, buttons2];
		    $.actions(groups);
	    }

	  },

	  components: {
	    Tab,
	    TabItem,
	    Grid,
	    GridRow,
	    btn,
	    Calendar
	  }
	}

</script>
