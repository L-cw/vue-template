<template>
  <span
    v-if="!!text"
    class="style-click-copy"
    @click="handleCopy(text)">
    <span v-if="shorten">{{ text | shortenStr }}</span>
    <span v-else>{{ text }}</span>
  </span>
  <span v-else>--</span>
</template>

<script>
export default {
  name: 'CopyText',
  props: {
    text: {
      type: String,
      default: ''
    },
    shorten: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
    handleCopy (msg) {
      this.$copyText(msg).then(
        () => {
          this.$message.success('复制成功！')
        },
        () => {
          this.$message.error('复制失败！')
        }
      )
    }
  }
}
</script>

<style lang="less" scoped>
  .style-click-copy {
    cursor: pointer;
    &:hover {
      color: #409EFF;
    }
  }
</style>
