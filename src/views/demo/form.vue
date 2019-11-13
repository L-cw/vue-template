<template>
  <div class="form-page content">
    <div class="operate-btn" @click="showUserOperateDialog = true">点击在弹窗中显示表单</div>
    <el-dialog title="新增系统用户" :visible.sync="showUserOperateDialog">
      <el-form
        ref="addForm"
        :model="addForm"
        :rules="addRules">
        <el-form-item
          label="用户名："
          :label-width="formLabelWidth"
          prop="userName">
          <el-input
            v-model="addForm.userName"
            autocomplete="new-password"
            placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item
          label="初始化密码："
          :label-width="formLabelWidth"
          prop="initPassword">
          <el-input
            v-model="addForm.initPassword"
            show-password
            autocomplete="new-password"
            placeholder="请输入初始化密码" />
        </el-form-item>
        <el-form-item
          label="昵称："
          :label-width="formLabelWidth"
          prop="realName">
          <el-input
            v-model="addForm.realName"
            placeholder="请输入昵称" />
        </el-form-item>
        <el-form-item
          label="备注："
          :label-width="formLabelWidth"
          prop="remark">
          <el-input
            v-model="addForm.remark"
            type="textarea"
            placeholder="请输入备注" />
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer">
        <el-button
          type="primary"
          :loading="operateLoading"
          @click="confirmOperateUser('addForm')">提交</el-button>
      </div>
    </el-dialog>
    <div class="form-box">
      <el-form
        ref="addForm"
        :model="addForm"
        :rules="addRules">
        <el-form-item
          label="用户名："
          :label-width="formLabelWidth"
          prop="userName">
          <el-input
            v-model="addForm.userName"
            autocomplete="new-password"
            placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item
          label="初始化密码："
          :label-width="formLabelWidth"
          prop="initPassword">
          <el-input
            v-model="addForm.initPassword"
            show-password
            autocomplete="new-password"
            placeholder="请输入初始化密码" />
        </el-form-item>
        <el-form-item
          label="昵称："
          :label-width="formLabelWidth"
          prop="realName">
          <el-input
            v-model="addForm.realName"
            placeholder="请输入昵称" />
        </el-form-item>
        <el-form-item
          label="备注："
          :label-width="formLabelWidth"
          prop="remark">
          <el-input
            v-model="addForm.remark"
            type="textarea"
            placeholder="请输入备注" />
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer">
        <el-button
          type="primary"
          :loading="operateLoading"
          @click="confirmOperateUser('addForm')">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { addSysUserApi } from '@/api/system'
import { checkStr } from '@/utils/tools'
export default {
  name: '',
  data () {
    return {
      operateLoading: false,
      showUserOperateDialog: false,
      formLabelWidth: '120px',
      addForm: {
        userName: '',
        initPassword: '',
        realName: '',
        remark: ''
      },
      addRules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        initPassword: [
          { required: true, message: '请输入初始化密码', trigger: 'blur' },
          {
            validator: (rule, val, cb) => {
              if (!checkStr(val, 'pwd')) {
                // cb(new Error('密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线'))
                cb()
              }
              cb()
            },
            trigger: 'blur'
          }
        ],
        realName: [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {

  },
  methods: {
    confirmOperateUser (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.operateLoading = true
          addSysUserApi({
            ...this.addForm
          }).then(res => {
            this.operateLoading = false
            if (this.$codeConfig.ERROR_CODE.SUCCESS === res.errCode) {
              this.showUserOperateDialog = false
              this.$refs[formName].resetFields()
              this.$message.success('新增用户成功')
              this.getList()
            }
          }).catch(err => {
            console.log(err)
            this.operateLoading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .form-page {
    & .operate-btn {
      margin-top: 100px;
      font-size: 24px;
      margin-bottom: 30px;
      font-weight: 600;
      cursor: pointer;
      &:hover {
        color: @theme-color;
      }
    }
  }
</style>
