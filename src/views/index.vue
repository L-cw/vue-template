<template>
  <div class="index-page">
    <div class="temp-text">This is Index Page!</div>
    <div>过滤器测试， status 0 : {{ '0' | fmtEnumSomeStatus('SOME_STATUS') }} ； 类型测试： type 1 : {{ '1' | fmtEnum('SOME_TYPE') }}</div>
    <el-button type="primary">验证主题色是否改变</el-button>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .index-page {
    & .temp-text {
      margin: 100px auto;
      font-size: 20px;
      font-weight: 600;
      color: $theme-color;
    }
  }
</style>
