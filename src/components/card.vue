<template>

	<div class="content">
		<cards content-title="普通卡片">
			
		</cards>

		<list-title>标题233</list-title>
		<card>
			<card-content>纯文本卡片</card-content>
		</card>

		<cards content-title="风格卡片">
			<card>
				<card-header css-class="color-white no-border no-padding">
	  			    <img class='card-cover' src="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" alt="">
	  			</card-header>
	  			<card-content>
	  				<p class="color-gray">发表于 2015/01/15</p>
			        <p>此处是内容...</p>
	  			</card-content>
	  			<card-footer>
	  				<link @click="love" label="赞"></link>
	  				<link label="更多"></link>
	  			</card-footer>
			</card>
		</cards>


		<cards content-title="Facebook">
			<card :facebook="true">
				<card-header css-class="no-border">
					<div class="facebook-avatar"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="34" height="34"></div>
				      <div class="facebook-name">夜萧</div>
				      <div class="facebook-date">星期一 3:47pm</div>
	  			</card-header>
	  			<card-content>
		  			<img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="100%">
	  				<p class="color-gray">发表于 2015/01/15</p>
			        <p>此处是内容...</p>
	  			</card-content>
	  			<card-footer css-class="no-border">
	  				<link label="赞"></link>
	  				<link label="更多"></link>
	  			</card-footer>
			</card>
		</cards>

	</div>

</template>

<style>
	
</style>

<script>

	import Cards from './ui/Card/Cards.vue';
	import Card from './ui/Card/Card.vue';
	import CardContent from './ui/Card/CardContent.vue';
	import CardHeader from './ui/Card/CardHeader.vue';
	import CardFooter from './ui/Card/CardFooter.vue';
	import ListTitle from './ui/List/ListTitle.vue';
	import Link from './ui/Button/Link.vue';
	import ScrollPreloader from './ui/Loader/ScrollPreloader.vue';

	export default {

		components: {
			Cards,
			Card,
			CardContent,
			CardHeader,
			CardFooter,
			ListTitle,
			Link,
			ScrollPreloader
		},

		ready () {
			console.log('ssss');
			// $.pullToRefreshTrigger('.content');

		      var loading = false;
		      // 最多可加载的条目
		      var maxItems = 100;

		      // 每次加载添加多少条目
		      var itemsPerLoad = 20;

		      function addItems(number, lastIndex) {
		              // 生成新条目的HTML
		              var html = '';
		              for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
		                  html += '<li class="item-content"><div class="item-inner"><div class="item-title">Item ' + i + '</div></div></li>';
		              }
		              // 添加新条目
		              $('.infinite-scroll-bottom .list-container').append(html);

		          }
		          //预先加载20条
		      addItems(itemsPerLoad, 0);

		      // 上次加载的序号

		      var lastIndex = 20;

		      // 注册'infinite'事件处理函数
		      $(document).on('infinite', '.infinite-scroll-bottom',function() {

		      		console.log('infinite');

		          // 如果正在加载，则退出
		          if (loading) return;

		          // 设置flag
		          loading = true;

		          // 模拟1s的加载过程
		          setTimeout(function() {
		              // 重置加载flag
		              loading = false;

		              if (lastIndex >= maxItems) {
		                  // 加载完毕，则注销无限加载事件，以防不必要的加载
		                  $.detachInfiniteScroll($('.infinite-scroll'));
		                  // 删除加载提示符
		                  $('.infinite-scroll-preloader').remove();
		                  return;
		              }

		              // 添加新条目
		              addItems(itemsPerLoad, lastIndex);
		              // 更新最后加载的序号
		              lastIndex = $('.list-container li').length;
		              //容器发生改变,如果是js滚动，需要刷新滚动
		              $.refreshScroller();
		          }, 1000);
		      });

		},

		data () {
			return {

				items: [{
					icon: 'icon-f7',
					title: '商品名称',
					after: '杜蕾斯',
					link: false
				}, {
					icon: '',
					title: '型号',
					after: '极致超薄型',
					link: true
				}, {
					icon: '',
					title: '库存',
					after: '123件',
					link: true
				}]

			}
		},

		methods: {

			'love': function() {
				$.toast('赞成功');
			}

		},

		events: {

		}

	}

</script>