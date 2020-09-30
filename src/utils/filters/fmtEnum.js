/**
 * 本文件中的过滤器函数请以 fmtEnum 开头
 */

import * as codeConfig from '@/utils/codeConfig'

export default {
  /**
   * @description: 枚举通用过滤器，若匹配返回枚举定义的 MSG ，若不匹配返回 --
   * @param {String|Number} code 要匹配的 code 值
   * @param {String} enumObjStr 目标枚举对象的字符串值
   * @return {String} 返回字符串
   */
  fmtEnum (code, enumObjStr) {
    if (!codeConfig.hasOwnProperty(enumObjStr)) {
      return '--'
    }
    const enumObj = codeConfig[enumObjStr]
    for (let key in enumObj) {
      if (enumObj[key].CODE === code) {
        return enumObj[key].MSG
      }
    }
    return '--'
  },

  /**
   * @description: 若通用过滤不能满足需求可以在后续定义独特的过滤器进行处理
   * @param {String|Number} 要匹配的值
   * @return {type} 返回值
   */
  fmtEnumSomeStatus (status) {
    switch (status) {
      case codeConfig.SOME_STATUS.S0.CODE: {
        return '独特过滤器处理返回值0'
      }
      case codeConfig.SOME_STATUS.S1.CODE: {
        return '独特过滤器处理返回值1'
      }
      case codeConfig.SOME_STATUS.S2.CODE: {
        return '独特过滤器处理返回值2'
      }
    }
  }
}