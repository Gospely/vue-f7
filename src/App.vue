<template>

  <div class="page-group">
      <div class="page">

        <bar 
          :tab-items.sync="tabItems"></bar>
          
        <router-view keep-alive transition="slide"></router-view>

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
            self.$router.go('/card');
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

  @keyframes slideIn {
      from {
          transform: translateX(100%, 0, 0);
      }
      to {
          transform: translateX(0, 0, 0);
      }
  }
  @keyframes slideOut {
      from {
          transform: translateX(0, 0, 0);
      }
      to {
          transform: translateX(100%, 0, 0);
      }
  }

  .slideIn {
      /*animation: slideIn .2s forwards;*/
  }

  .slideOut {
      /*animation: slideOut .2s forwards;*/
  }

  .slide-transition {
    transition: left 0.2s ease-in-out;
    width: 100%;
  }

  .slide-enter, .slide-leave {
    /*animation: slideIn .3s forwards;*/
    transform: translateX(100%);
    /*left: 100%;*/
  }

  .slide-leave {
    /*animation: slideOut .3s forwards;*/
    transform: translateX(-100%);
  }

  .app-transition {
    transition: opacity 0.3s ease;
  }
  .app-enter, .app-leave {
    opacity: 0;
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
