<template>
  <div class="other-page">
    <div class="other-item">这里显示的是 Vuex 中 testStr 的值： {{ testStr }} </div>
    <div class="other-item">
      点击 <el-button class="change-btn" @click="handleChangeTestStr">按钮</el-button> 将 testStr 的值改为 This is a pen.
    </div>
    <div class="other-item">插值显示 message：{{ value }}</div>
    <div class="other-item">输入 message 的值：<input v-model="value" type="text"></div>
    <div class="other-item" @click="handleClick">点击方法</div>
    <div class="other-item" @click="handleClick">{{ addr | shortenStr }}</div>
    <div
      v-for="(item, index) in tableData"
      :key="index"
      class="other-item">循环使用 v-for ，必须要加 key, 当前的地址是： {{ item.address }}</div>
    <div><copy-text :text="'这是一段可复制的文本'" /></div>
    <div class="other-item">
      <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
        <i class="iconfont icon-weibiaoti-"></i>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
// import CopyText from '@/components/CopyText'
export default {
  name: '',
  // components: { CopyText },
  data () {
    return {
      value: 'message',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      addr: 'qweqweqwedfsdfsdfasdfasdfasdf'
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
      this.$router.push('/demo/list')
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
      .iconfont {
        font-size: 30px;
        color: #333;
      }
    }
    & .change-btn {
      width: 60px;
      height: 30px;
      margin: 0;
      padding: 0;
    }
  }
</style>
