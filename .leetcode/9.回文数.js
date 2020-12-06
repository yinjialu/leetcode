/**
 * /*
 *
 * [9] 回文数
 *
 * @format
 * @lc app=leetcode.cn id=9 lang=javascript
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false
  let reverseUnit = 1
  let reverseVal = 0
  const length = String(x).length
  let unit = 1
  for (let i = 1; i < length; i++) {
    unit *= 10
  }
  const initUnit = unit;
  let remainder = x
  while (remainder >= 10) {
    reverseVal += Math.floor(remainder / unit) * reverseUnit
    remainder = remainder % unit
    unit /= 10
    reverseUnit *= 10
  }
  reverseVal += remainder * initUnit
  return x === reverseVal
}
// @lc code=end

// Accepted
// 11510/11510 cases passed (200 ms)
// Your runtime beats 89.45 % of javascript submissions
// Your memory usage beats 14.24 % of javascript submissions (47.2 MB)
