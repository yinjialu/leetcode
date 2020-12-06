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
  let reverseVal = 0
  let val = x
  while (val / 10 >= 1) {
    reverseVal = reverseVal * 10 + val % 10
    val = Math.floor(val / 10)
  }
  reverseVal = reverseVal * 10 + val % 10
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

// v2
// Accepted
// 11510/11510 cases passed (208 ms)
// Your runtime beats 80.43 % of javascript submissions
// Your memory usage beats 52.29 % of javascript submissions (46.6 MB)