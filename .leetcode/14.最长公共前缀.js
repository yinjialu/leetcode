/**
 * /*
 *
 * [14] 最长公共前缀
 *
 * @format
 * @lc app=leetcode.cn id=14 lang=javascript
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const len2 = strs.length
  let result = ''
  if (len2 === 0) return result
  const len = strs[0].length
  for (let i = 0; i < len; i++) {
    const val = strs[0][i]
    for (let j = 0; j < len2; j++) {
      if (strs[j][i] !== val) return result
    }
    result += val
  }
  return result
}
// @lc code=end

// Accepted
// 123/123 cases passed (84 ms)
// Your runtime beats 87.24 % of javascript submissions
// Your memory usage beats 21.63 % of javascript submissions (39.8 MB)
