/**
 * 遍历对象
 * @param {Object} obj 
 * @param {Function} callback 
 */
export const forEach = (obj: object, callback: any) => {
    for (let key in obj) {
        callback(obj[key], key);
    }
}