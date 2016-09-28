<template>

  <div class="page-group">
      <div class="page">

         <!--  <header class="bar bar-nav">
              <a class="button button-link button-nav pull-left" href="javascript:history.go(-1)">
                  <span class="icon icon-left"></span>
                  返回
              </a>
              <h1 class="title">我的生活</h1>
          </header> -->

<!--           <button-bar 
            title="shit"
            left-btn-title="fuck"
            right-btn-title="bitch"
            :right-visible="false">
          </button-bar>
 -->
<!--           <icon-bar 
            title="fuck"
            left-icon="icon-left"
            right-icon="icon-refresh">
          </icon-bar>
 -->
<!--           <icon-link-bar
            title="fuck"
            left-icon="icon-left"
            right-icon="icon-right"
            left-btn-title="pre"
            right-btn-title="next">
          </icon-link-bar> -->

          <tab-bar
            :tabs.sync="tabs">
            <div slot="bar-left">
              <button class="button pull-left">
                Left
              </button>
            </div>
          </tab-bar>

          <div class="content">
              <router-view transition="outLeftInRight"></router-view>
          </div>

          <nav class="bar bar-tab">
              <a class="tab-item external active" v-link="{path: '/404'}">
                  <span class="icon icon-home"></span>
                  <span class="tab-label">首页</span>
              </a>
              <a class="tab-item external" href="#">
                  <span class="icon icon-me"></span>
                  <span class="tab-label">我</span>
              </a>
              <a class="tab-item external" href="#">
                  <span class="icon icon-star"></span>
                  <span class="tab-label">收藏</span>
              </a>
              <a class="tab-item external" href="#">
                  <span class="icon icon-settings"></span>
                  <span class="tab-label">设置</span>
              </a>
          </nav>

      </div>
  </div>

</template>

<script>

  import Vue from 'Vue';
  import TitleBar from './components/ui/TitleBar/CommonBar.vue';
  import ButtonBar from './components/ui/TitleBar/ButtonBar.vue';
  import IconBar from './components/ui/TitleBar/IconBar.vue';
  import IconLinkBar from './components/ui/TitleBar/IconLinkBar.vue';
  import TabBar from './components/ui/TitleBar/TabBar.vue';

  console.log(ButtonBar);

  Vue.transition('slide', {
    enterClass: 'slideInLeft',
    leaveClass: 'slideOutRight'
  });

  export default {
    methods: {

    },

    props: {


    },

    ready() {

    },

    components: {
      TitleBar,
      ButtonBar,
      IconBar,
      IconLinkBar,
      TabBar
    },

    data() {
      return {
        tabs: [{
          active: true,
          label: 'Tab fuck'
        }, {
          active: false,
          label: 'Tab shit'
        }]
      }
    },

    events: {
      'tabsItemClicked': function(item) {
        console.log(item);
      }
    }
  }

</script>

<style>

  .page {
    display: block!important;
  }

  .outLeftInRight-transition,
  .fadeOutLeft-transition, 
  .fadeInLeft-transition {
    transition: transform .3s ease-in-out;
  }

  /* 进入时的状态，从右开始 */
  .outLeftInRight-enter,
  .fadeInLeft-enter,
  .fadeInLeft-leave {
    transform: translateX(100%);
  }

  /* 离开时的状态，向左移动 */
  .outLeftInRight-leave,
  .fadeOutLeft-enter,
  .fadeOutLeft-leave {
    transform: translateX(-100%);
  }

</style>
