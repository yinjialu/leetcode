/**
 * /*
 *
 * [29] 两数相除
 *
 * @format
 * @lc app=leetcode.cn id=29 lang=javascript
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let isPositive = true
  if (dividend > 0 !== divisor > 0) {
    isPositive = false
  }
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  if (isPositive && dividend === 2147483648 && divisor === 1) return 2147483647
  let count = 1
  let result = 0
  let base = 1
  while (dividend >= divisor) {
    count = 1
    base = divisor
    while (base <= dividend >> 1) {
      base = base << 1
      count = count << 1
    }
    result += count
    dividend -= base
  }
  if (!isPositive) result = -result
  return result
}
// @lc code=end

// 用位运算代替乘法，<< 等同于 * 2，>> 等同于 / 2 求整

// Accepted
// 989/989 cases passed (92 ms)
// Your runtime beats 91.6 % of javascript submissions
// Your memory usage beats 47.96 % of javascript submissions (39.2 MB)
