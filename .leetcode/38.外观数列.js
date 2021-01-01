/**
 * /*
 *
 * [38] 外观数列
 *
 * @format
 * @lc app=leetcode.cn id=38 lang=javascript
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return '1'
  const value = countAndSay(n - 1)
  let i = 0
  let t = ''
  let result = ''
  while (i < value.length) {
    t += value.charAt(i)
    if (value.charAt(i + 1) === value.charAt(i)) {
      i++
    } else {
      result += `${t.length}${t.charAt(0)}`
      t = ''
      i++
    }
  }
  return result
}
// @lc code=end

// Accepted
// 30/30 cases passed (88 ms)
// Your runtime beats 70.22 % of javascript submissions
// Your memory usage beats 28.05 % of javascript submissions (40.8 MB)
