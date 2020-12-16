/**
 * /*
 *
 * [22] 括号生成
 *
 * @format
 * @lc app=leetcode.cn id=22 lang=javascript
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // 递归 & 剪枝
  const result = []
  const go = (left, right, str) => {
    if (left > right) return
    if (left === 0 && right === 0) {
      result.push(str)
    }
    if (left > 0) go(left - 1, right, str + '(')
    if (right > 0) go(left, right - 1, str + ')')
  }
  go(n, n, '')
  return result
}
// @lc code=end

// Accepted
// 8/8 cases passed (84 ms)
// Your runtime beats 68.84 % of javascript submissions
// Your memory usage beats 46.45 % of javascript submissions (39.2 MB)