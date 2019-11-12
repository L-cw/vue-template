<template>
  <div class="page-footer">
    <div class="page-footer-con content">Copyright © 2018. All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="less" scoped>
  .page-footer {
    height: @footer-height;
    background-color: #303353;
    .page-footer-con {
      line-height: @footer-height;
      font-size: 14px;
      text-align: center;
      color: #fff;
    }
  }
</style>
