<template>
  <div class="index-page">
    <div class="temp-text">This is Index Page!</div>
    <div class="temp-text">过滤器测试， status 0 : {{ '0' | fmtEnumSomeStatus('SOME_STATUS') }} ； 类型测试： type 1 : {{ '1' | fmtEnum('SOME_TYPE') }}</div>
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
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & .temp-text {
      font-size: 20px;
      font-weight: 600;
      color: $theme-color;
      &:not(:last-child) {
        margin-bottom: 100px;
      }
    }
  }
</style>
