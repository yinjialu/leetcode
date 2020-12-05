/**
 * /*
 *
 * [5] 最长回文子串
 *
 * @format
 * @lc app=leetcode.cn id=5 lang=javascript
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const totalLen = s.length
  let i = 0
  let j = 0
  let leftIndex = 0
  let rightIndex = 0
  let maxLength = 0
  let maxStr = ''
  let countLength = 0
  while (i < totalLen) {
    leftIndex = i
    rightIndex = i
    while (s.slice(i, i + 1) === s.slice(i + 1, i + 2)) {
      rightIndex = i + 1
      i += 1
    }
    countLength = rightIndex + 1 - leftIndex
    j = 1
    while (
      leftIndex - j >= 0 &&
      rightIndex + j < totalLen &&
      s.slice(leftIndex - j, leftIndex - j + 1) ===
        s.slice(rightIndex + j, rightIndex + j + 1)
    ) {
      countLength = rightIndex + j - (leftIndex - j) + 1
      j += 1
    }
    if (countLength > maxLength) {
      j -= 1
      maxLength = countLength
      maxStr = s.slice(leftIndex - j, rightIndex + j + 1)
      console.log('maxStr', maxStr)
    }
    i += 1
  }
  return maxStr
}
// @lc code=end

// Accepted
// 176/176 cases passed (108 ms)
// Your runtime beats 90.87 % of javascript submissions
// Your memory usage beats 74.26 % of javascript submissions (40.2 MB)
