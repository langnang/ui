/**
 * 对象数据类型
 * @param {*} obj
 * @returns {String}
 */
export const objectType = (obj: any) => {
  let type = Object.prototype.toString.call(obj)
  return type.substring(8, type.length - 1).toLowerCase()
}
/**
 * 检测数组
 * @param {*} obj
 * @returns {Boolean}
 */
export const isArray = (obj: any) => objectType(obj) === 'array'
/**
 * 检测布尔值
 * @param {*} obj
 * @returns {Boolean}
 */
export const isBoolean = (obj: any) => objectType(obj) === 'boolean'
/**
 * 检测函数
 * @param {*} obj
 * @returns {Boolean}
 */
export const isFunction = (obj: any) => objectType(obj) === 'function'
/**
 * 检测数值
 * @param {*} obj
 * @returns {Boolean}
 */
export const isNumber = (obj: any) => objectType(obj) === 'number'
/**
 * 检测对象
 * @param {*} obj
 * @returns {Boolean}
 */
export const isObject = (obj: any) => objectType(obj) === 'object'
/**
 * 检测字符串
 * @param {*} obj
 * @returns {Boolean}
 */
export const isString = (obj: any) => objectType(obj) === 'string'