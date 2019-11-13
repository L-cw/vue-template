<template>
  <div class="other-page">
    <div class="other-item">这里显示的是 Vuex 中 testStr 的值： {{ testStr }} </div>
    <div class="other-item">
      点击 <el-button class="change-btn" @click="handleChangeTestStr">按钮</el-button> 将 testStr 的值改为 This is a pen.
    </div>
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
  computed: {
    testStr () {
      return this.$store.getters.testStr
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const str1 = ''
      const PI = 3.14
      const obj1 = { a: 1 }
      const obj2 = { b: 2 }
      const obj3 = { ...obj1, ...obj2 }
      console.log(obj1, obj2, obj3, PI, str1)
    },
    handleClick () {
      console.log('触发了点击事件')
    },
    handleChangeTestStr () {
      this.$store.commit('SET_TEST_STR', 'This is a pen.')
    }
  }
}
</script>

<style lang="less" scoped>
  .other-page {
    padding-top: 60px;
    & .other-item {
      margin-bottom: 20px;
    }
    & .change-btn {
      width: 60px;
      height: 30px;
      margin: 0;
      padding: 0;
    }
  }
</style>
