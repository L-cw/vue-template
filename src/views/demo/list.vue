<template>
  <div class="list-page content">
    <el-table
      v-loading="loading"
      class="list-table"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期" />
      <el-table-column
        prop="name"
        label="姓名" />
      <el-table-column
        prop="address"
        label="地址" />
    </el-table>
    <el-pagination
      :current-page.sync="page.start"
      :page-size="page.size"
      layout="total, prev, pager, next"
      :total="page.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </div>
</template>

<script>
import { getSysUserListApi } from '@/api/user'
export default {
  name: '',
  data () {
    return {
      loading: false,
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
      page: {
        start: 1,
        size: 10,
        total: 0
      }
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.loading = true
      getSysUserListApi({
        pageStart: this.page.start
      }).then(res => {
        this.loading = false
        if (this.$codeConfig.ERROR_CODE.SUCCESS === res.errCode) {
          this.tableData = res.data.list
          this.page = res.data.page
        }
      }).catch(err => {
        console.log(err)
        this.loading = false
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="less" scoped>
  .list-page {
    padding-top: 20px;
    & .list-table {
      margin-bottom: 20px;
    }
  }
</style>
