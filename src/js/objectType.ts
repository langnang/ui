/**
 * 对象数据类型
 * @param {*} obj
 * @returns {String}
 */
export const objectType = (obj: any) => Object.prototype.toString.call(obj).substring(8, Object.prototype.toString.call(obj).length - 1).toLowerCase()
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
 * 检测日期
 * @param {*} obj
 * @returns {Boolean}
 */
export const isDate = (obj: any) => objectType(obj) === 'date'
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
/**
 * 检测Undefined
 * @param {*} obj 
 * @return {Boolean}
 */

export const isUndefined = (obj: any) => objectType(obj) === 'undefined'
/**
 * 检测Null
 * @param {*} obj 
 * @return {Boolean}
 */

export const isNull = (obj: any) => objectType(obj) === 'null'
/**
 * 检测正则
 * @param {*} object 
 */
export const isRegExp = (obj: any) => objectType(obj) === 'regexp'