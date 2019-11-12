<template>
  <div class="layout" :style="'min-height:' + pageHeight + 'px;'">
    <page-header />
    <router-view class="page-content" />
    <page-footer />
  </div>
</template>

<script>
import PageHeader from './Header.vue'
import PageFooter from './Footer.vue'
export default {
  name: 'Layout',
  components: {
    PageHeader,
    PageFooter
  },
  data () {
    return {
      pageHeight: window.innerHeight
    }
  }
}
</script>

<style lang="less" scoped>
  .layout {
    padding-top: @header-height;
    & .page-content {
      min-height: calc(100vh - @header-height - @footer-height);
    }
  }
</style>
