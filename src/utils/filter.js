/* eslint-disable */
export default {
  /**
   * 将时间戳转换为日期或日期+时间格式
   * @param { Number } timestamp 时间戳
   * @param { String } type 转换类型：date -> 只有日期；不传参数 -> 日期和时间
   * @return: 年-月-日 或 年-月-日 时:分:秒
   */
  fmtTimeFromTimestamp (timestamp, type) {
    var result = ''
    var datetime = new Date()
    timestamp = (timestamp + '').length === 10 ? timestamp * 1000 : timestamp
    datetime.setTime(timestamp)
    var Nyear = datetime.getFullYear()
    var Nmonth = datetime.getMonth() + 1 < 10 ? '0' + (datetime.getMonth() + 1) : datetime.getMonth() + 1
    var Ndate = datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate()
    var Nhour = datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours()
    var Nminute = datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes()
    var Ssecond = datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds()
    if (type === 'date') {
      result = Nyear + '-' + Nmonth + '-' + Ndate
    } else {
      result = Nyear + '-' + Nmonth + '-' + Ndate + ' ' + Nhour + ':' + Nminute + ':' + Ssecond
    }
    return result
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
