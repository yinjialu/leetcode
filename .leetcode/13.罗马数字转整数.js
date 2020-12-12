/**
 * /*
 *
 * [13] 罗马数字转整数
 *
 * @format
 * @lc app=leetcode.cn id=13 lang=javascript
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  }
  const len = s.length
  let i = 0
  let val = 0
  while (i < len) {
      const n = map[s.slice(i, i + 2)];
    if (n) {
      val += n
      i += 2
    } else {
      val += map[s.slice(i, i + 1)]
      i += 1
    }
  }
  return val
}
// @lc code=end

// Accepted
// 3999/3999 cases passed (176 ms)
// Your runtime beats 43.95 % of javascript submissions
// Your memory usage beats 35.05 % of javascript submissions (44.1 MB)

// v1
// 3999/3999 cases passed (156 ms)
// Your runtime beats 87.55 % of javascript submissions
// Your memory usage beats 37.36 % of javascript submissions (44 MB)