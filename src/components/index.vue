<template>

  <!-- 这里是页面内容区 -->
  <div class="page-index">
      <btn-group :groups.sync="groups"></btn-group>

      <p>
        <btn></btn>
      </p>

      <p>
        <btn label="light button" :light="true"></btn>
      </p>

      <p>
        <btn label="disabled" :disabled="true"></btn>
      </p>

      <p>
        <btn label="success" :success="true" :rounded="true"></btn>
      </p>

      <p>
        <btn label="warning" :warning="true"></btn>
      </p>

      <p>
        <btn label="danger" :danger="true"></btn>
      </p>

      <p>
        <btn label="rounded" :fill="true" :rounded="true"></btn>
      </p>


      <p>
        <btn :big="true"></btn>
      </p>

  </div>

</template>

<script>

import Btn from './ui/Button/Button.vue';
import BtnGroup from './ui/Button/ButtonGroup.vue';

export default {
  data () {
    return {
      groups: [{
        label: 'shit 1',
        active: true
      }, {
        label: 'shit 2',
        active: false
      }]
    }
  },

  ready() {
  },

  components: {
    Btn,
    BtnGroup
  },

  methods: {

  },

  events: {
    'buttonGroupClicked': function(item) {
      console.log(item);
    },

    'buttonClicked': function(el) {
      console.log('sss', el);
    }
  }
}

</script>

<style>


</style>
