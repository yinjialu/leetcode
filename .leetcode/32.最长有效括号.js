/**
 * /*
 *
 * [32] 最长有效括号
 *
 * @format
 * @lc app=leetcode.cn id=32 lang=javascript
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let maxlen = 0
  const stock = [-1]
  for (let i = 0; i < s.length; i++) {
    const v = s.charAt(i)
    if (v === '(') {
      stock.push(i)
      continue
    }
    stock.pop()
    if (stock.length === 0) {
      stock.push(i)
    }
    maxlen = Math.max(maxlen, i - stock[stock.length - 1])
  }
  return maxlen
}
// @lc code=end

// (()
// ()(() => 2
// ()(()) => 6
// (()(((()
// (()(((())))())

// Accepted
// 231/231 cases passed (100 ms)
// Your runtime beats 40.72 % of javascript submissions
// Your memory usage beats 82.63 % of javascript submissions (39.6 MB)