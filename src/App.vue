<template>

  <div class="page-group">
      <div class="page">
        <bar 
          :tab-items.sync="tabItems"></bar>
        <router-view transition="slide"></router-view>
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

  export default {
    methods: {

    },

    props: {


    },

    ready() {

    },

    components: {
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

  .slide-transition {
    transition: left 0.2s ease;
    width: 100%;
  }

  .slide-enter, .slide-leave {
    animation: slideIn .3s forwards;
    left: 100%;
  }

  .slide-leave {
    animation: slideOut .3s forwards;
    left: 100%;
  }

  .app-transition {
    transition: opacity 0.2s ease;
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
