/* eslint-disable */
export function checkStr(str, type) {
  switch (type) {
    case 'phone': //手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
    case 'tel': //座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
    case 'card': //身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
    case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str)
    case 'postal': //邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str);
    case 'QQ': //QQ号
      return /^[1-9][0-9]{4,9}$/.test(str);
    case 'email': //邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
    case 'money': //金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str);
    case 'URL': //网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
    case 'IP': //IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
    case 'date': //日期时间
      return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) ||
        /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
    case 'number': //数字
      return /^[0-9]$/.test(str);
    case 'positiveNumber': //正整数
      return /^[1-9]\d*$/.test(str);
    case 'english': //英文
      return /^[a-zA-Z]+$/.test(str);
    case 'chinese': //中文
      return /^[\u4E00-\u9FA5]+$/.test(str);
    case 'lower': //小写
      return /^[a-z]+$/.test(str);
    case 'upper': //大写
      return /^[A-Z]+$/.test(str);
    case 'HTML': //HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
    default:
      return true;
  }
}

/**
 * 获取图片节点单独Base64
 * @param img html的img标签 dom节点对象
 * @param ext 图片格式
 * @returns {string}
 */
export function getImageBase64(img, ext) {
  var canvas = document.createElement("canvas");   //创建canvas DOM元素，并设置其宽高和图片一样
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, img.width, img.height); //使用画布画图
  var dataURL = canvas.toDataURL(ext);  //返回的是一串Base64编码的URL并指定格式
  canvas = null; //释放
  return dataURL;
}

/**
 * 根据图片Url获取图片的base64编码
 * @param url 图片路径
 * @param ext 图片格式
 * @param callback 结果回调
 */
export function getUrlBase64(url, ext, callback) {
  var canvas = document.createElement("canvas");   //创建canvas DOM元素
  var ctx = canvas.getContext("2d");
  var img = new Image;
  img.crossOrigin = 'Anonymous';
  img.src = url;
  img.onload = function () {
    canvas.height = img.height; //指定画板的高度,自定义
    canvas.width = img.width; //指定画板的宽度，自定义
    ctx.drawImage(img, 0, 0); //参数可自定义
    var dataURL = canvas.toDataURL(ext);
    callback.call(this, dataURL); //回掉函数获取Base64编码
    canvas = null;
  };
}

/**
 * @description: 获取页签标题
 * @param {String} pageTitle 当前页面的标题，一般为 meta.title
 * @return {String} 页签title
 */
const TITLE = require('@/config.js').TITLE
export function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${TITLE}`
  }
  return `${TITLE}`
}
