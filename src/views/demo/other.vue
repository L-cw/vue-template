<template>
  <div class="other-page">
    <div class="other-item">插值显示{{ value }}</div>
    <div class="other-item" @click="handleClick">点击方法</div>
    <div
      v-for="(item, index) in (0, 3)"
      :key="index"
      class="other-item">循环使用 v-for ，必须要加 key</div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      value: 'message'
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let str1 = ''
      const PI = 3.14
      const obj1 = { a: 1 }
      const obj2 = { b: 2 }
      let obj3 = { ...obj1, ...obj2 }
      console.log(obj1, obj2, obj3, PI, str1)
    },
    handleClick () {
      console.log('触发了点击事件')
    }
  }
}
</script>

<style lang="less" scoped>
  .other-page {
    padding-top: 20px;
    & .other-item {
      margin-bottom: 20px;
    }
  }
</style>
