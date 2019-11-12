import request from '@/utils/request'

/**
 * @description: 获取系统用户列表
 * @return: Promise
 */
export function getSysUserListApi (data) {
  return request({
    url: '/user/list',
    method: 'post',
    data
  })
}

/**
 * @description: 新增系统用户
 * @param {Object} data
 * @param {String} data.userName 用户名
 * @param {String} data.roleId 角色ID
 * @param {String} data.initPassword 用户初始化密码
 * @param {String} data.realName 用户真实姓名
 * @param {String} data.remark 用户备注
 * @return: Promise
 */
export function addSysUserApi (data) {
  return request({
    url: '/user/add',
    method: 'post',
    data
  })
}
