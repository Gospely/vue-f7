<template>

  <div class="page-group">
      <!-- 你的html代码 -->
      <div class="page">

          <header class="bar bar-nav">
              <a class="button button-link button-nav pull-left" href="/demos/card">
                  <span class="icon icon-left"></span>
                  返回
              </a>
              <h1 class="title">我的生活</h1>
          </header>

          <div class="content">
              <router-view></router-view>
          </div>

          <nav class="bar bar-tab">
              <a class="tab-item external active" href="#">
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

export default {
  methods: {

  },

  props: {


  },

  data() {
    return {

    }
  }
}

</script>

<style>

  .page .page-group {
    display: block!important;
  }

</style>
