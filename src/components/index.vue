<template>

  <!-- 这里是页面内容区 -->
  <div class="page-index">
      <div class="card">
          <div style="background-image:url(//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg)" valign="bottom" class="card-header color-white no-border">旅途的山</div>
          <div class="card-content">
              <div class="card-content-inner">
                  <p class="color-gray">发表于 2015/01/15</p>
                  <p>此处是内容...</p>
              </div>
          </div>
          <div class="card-footer">
              <a href="#" class="link">赞</a>
              <a href="#" class="link">更多</a>
          </div>
      </div>

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

export default {
  data () {
    return {



    }
  },

  ready() {
  },

  components: {
    Btn
  },

  methods: {

  }
}

</script>

<style>


</style>
