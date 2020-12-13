/**
 * /*
 *
 * [20] 有效的括号
 *
 * @format
 * @lc app=leetcode.cn id=20 lang=javascript
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    ')': '(',
    '}': '{',
    ']': '[',
  }
  const arr = []
  for (let i = 0; i < s.length; i++) {
    const val = s.slice(i, i + 1)
    if (!map[val]) {
      arr.push(val)
    } else if (arr[arr.length - 1] === map[val]) {
      arr.splice(arr.length - 1, 1)
    } else {
      return false
    }
  }
  if (arr.length) return false
  return true
}
// @lc code=end

// Accepted
// 91/91 cases passed (88 ms)
// Your runtime beats 52.74 % of javascript submissions
// Your memory usage beats 25.63 % of javascript submissions (39 MB)
