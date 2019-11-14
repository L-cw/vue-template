<template>
  <div class="apply-net-node-page content">
    <div class="title">立即申请成为网关节点</div>
    <div class="form-box">
      <el-form
        ref="addForm"
        :model="addForm"
        :rules="addRules">
        <el-form-item
          label="单选框："
          :label-width="formLabelWidth"
          align="left"
          prop="radio">
          <el-radio v-model="addForm.radio" label="1">备选项</el-radio>
          <el-radio v-model="addForm.radio" label="2">备选项</el-radio>
        </el-form-item>
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
    <div class="notice-box">
      <div class="notice-title">注意事项：</div>
      <div
        v-for="(item, index) in noticeList"
        :key="index"
        class="notice-item">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplyNetNode',
  data () {
    return {
      operateLoading: false,
      formLabelWidth: '120px',
      addForm: {
        radio: '',
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
      },
      noticeList: [
        '注意事项：注意事项：注意事项：注意事项：注意事项：注意事项：',
        '注意事项：注意事项：注意事项：注意事项：注意事项：注意事项：',
        '注意事项：注意事项：注意事项：注意事项：注意事项：注意事项：',
        '注意事项：注意事项：注意事项：注意事项：注意事项：注意事项：',
        '注意事项：注意事项：注意事项：注意事项：注意事项：注意事项：',
        '注意事项：注意事项：注意事项：注意事项：注意事项：注意事项：',
        '注意事项：注意事项：注意事项：注意事项：注意事项：注意事项：'
      ]
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  .apply-net-node-page {
    & .form-box {
      padding: 0 40px;
    }
  }
</style>
