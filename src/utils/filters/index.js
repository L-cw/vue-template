/* eslint-disable */
export default {
  /**
   * 将时间戳转换为日期或日期+时间格式
   * @param { Number } timestamp 时间戳
   * @param { String } cFormat 转换类型：date -> 只有日期；不传参数 -> 日期和时间
   * @return:
   */
  fmtTimeFromTimestamp (time, cFormat) {
    if (arguments.length === 0) {
      return null
    }
    // 兼容之前方法调用
    if (cFormat === 'date') {
      cFormat = '{y}-{m}-{d}'
    }
    if (isNaN(time) || !time) return '--'
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
      date = time
    } else {
      if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
        time = parseInt(time)
      }
      if ((typeof time === 'number') && (time.toString().length === 10)) {
        time = time * 1000
      }
      date = new Date(time)
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      let value = formatObj[key]
      // Note: getDay() returns 0 on Sunday
      if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
      if (result.length > 0 && value < 10) {
        value = '0' + value
      }
      return value || 0
    })
    return time_str
  },
  /**
   * 隐藏手机号的中间部分
   * @param { String | Number} phone 手机号
   * @return: 保留前三位和后四位后返回
   */
  hidePhoneNum (phone) {
    phone = phone + ''
    if (phone.length === 11) {
      return phone.substr(0, 3) + '****' + phone.substr(7, 11)
    } else {
      return phone
    }
  },
  /**
   * 长字符串使用 * 替换并缩短，一般用来处理区块链地址或者哈希
   * @param  { tring } string 要处理的字符串
   * @return: 前后都保留 6 位，中间以 * 替换
   */
  shortenStr(string) {
    if(Object.prototype.toString.call(string).slice(8, -1) === 'String' && string.length > 15) {
      return string.substr(0, 6) + '***' + string.substr(-6, 6)
    } else {
      return string
    }
  }
}
