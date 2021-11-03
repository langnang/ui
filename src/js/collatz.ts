/**
 * @name collatz
 * @desc 应用 Collatz 算法
 * @param {*} n 
 */
export const collatz = n => (n % 2 === 0) ? (n / 2) : (3 * n + 1);