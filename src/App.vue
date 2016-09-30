<template>

  <div class="page-group">
      <div class="page">

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

          <search-input :model="name" :enter="keyup"></search-input>

          <div class="content">
            <router-view transition="outLeftInRight"></router-view>
          </div>

          <bar 
            :tab-items.sync="tabItems"></bar>

<!--           <header-secondary-bar>
            <div slot="body">
              <button class="button button-block">Block level button</button>
            </div>
          </header-secondary-bar>
 -->
<!--           <footer-secondary-bar>
            <div slot="body">
              <button class="button button-block">Block level button</button>
            </div>
          </footer-secondary-bar>
 -->
<!--           <footer-bar>
            <div slot="bar-left">
              <a class="icon icon-edit pull-left"></a>
            </div>
            <div slot="bar-right">
              <a class="icon icon-settings pull-right"></a>
            </div>
          </footer-bar> -->

      </div>

      <panel :left="false" id="test-panel">
      </panel>

      <popup cls="about">
        <button-bar 
          title="shit"
          left-btn-title="关闭"
          right-btn-title="popup"
          :right-visible="false">
        </button-bar>
      </popup>

  </div>

</template>

<script>

  import Vue from 'Vue';
  import TitleBar from './components/ui/TitleBar/CommonBar.vue';
  import ButtonBar from './components/ui/TitleBar/ButtonBar.vue';
  import IconBar from './components/ui/TitleBar/IconBar.vue';
  import IconLinkBar from './components/ui/TitleBar/IconLinkBar.vue';
  import TabBar from './components/ui/TitleBar/TabBar.vue';

  import Bar from './components/ui/Bar/Bar.vue';
  import FooterBar from './components/ui/Bar/FooterBar.vue';
  import HeaderSecondaryBar from './components/ui/Bar/HeaderSecondaryBar.vue';
  import FooterSecondaryBar from './components/ui/Bar/FooterSecondaryBar.vue';

  import Panel from './components/ui/Panel/Panel.vue';

  import SearchInput from './components/ui/Search/SearchInput.vue';

  import Popup from './components/ui/Popup/Popup.vue';

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
      TabBar,
      Bar,
      FooterBar,
      HeaderSecondaryBar,
      FooterSecondaryBar,
      Panel,
      SearchInput,
      Popup
    },

    data() {
      return {

        tabs: [{
          active: true,
          label: 'Tab fuck'
        }, {
          active: false,
          label: 'Tab shit'
        }],

        tabItems: [{
          active: true,
          label: '文案',
          badge: false
        }, {
          active: false,
          label: '文案',
          badge: 10,
          icon: 'icon-me'
        }, {
          active: false,
          label: '文案',
          badge: false,
          icon: 'icon-star'
        }]

      }
    },

    events: {
      'tabsItemClicked': function(item) {
        console.log('barr', item);
        if(item.key === 1) {
          this.$router.go('/tabs');
        }else {
          this.$router.go('/index');
        }
      },

      'BarItemsClicked': function(item) {
        console.log('bar', item);

        var self = this;

        var toPage = [
          function() {
            self.$router.go('/index');
          },

          function() {
            self.$router.go('/list');
          },

          function() {
            
          }
        ];

        toPage[item.key]();

      },

      'leftButtonClicked': function(el) {
        $.closePopup();
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
