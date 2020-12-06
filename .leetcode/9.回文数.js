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
  const arr = []
  let val = x
  while (val / 10 >= 1) {
    arr.push(val % 10)
    val = Math.floor(val / 10)
  }
  arr.push(val)
  let unit = 1
  let reverseVal = 0
  for (let i = arr.length - 1; i >=0 ; i--) {
    reverseVal += arr[i] * unit
    unit *= 10
  }
  return x === reverseVal
}
// @lc code=end

// Accepted
// 11510/11510 cases passed (200 ms)
// Your runtime beats 89.45 % of javascript submissions
// Your memory usage beats 14.24 % of javascript submissions (47.2 MB)


// v1
// Accepted
// 11510/11510 cases passed (228 ms)
// Your runtime beats 48.62 % of javascript submissions
// Your memory usage beats 33.94 % of javascript submissions (46.9 MB)
