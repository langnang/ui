
import { isNull, isUndefined } from './objectType';
/**
 * 检测为空
 * @param {*} object 
 */
export const isEmpty = object => isNull(object) || isUndefined(object)