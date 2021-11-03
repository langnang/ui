/**
 * @name none
 * @desc 如果提供的谓词函数对集合中的所有元素返回false，则返回true，否则返回false
 * @param {*} arr 
 * @param {*} fn 
 */

export const isNone = (array, fn = Boolean) => !array.every(fn);