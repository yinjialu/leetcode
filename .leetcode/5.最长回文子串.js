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
  let i = 0 // 游标
  let j = 0 // 偏移量
  let leftIndex = 0 // 左边其实位置
  let rightIndex = 0 // 右边起始位置
  let maxStr = '' // 记录的最长子串
  let countLength = 0 // 记录当前子串长度
  while (i < totalLen) {
    leftIndex = i // 初始化左边起始位置
    rightIndex = i 
    while (s.slice(i, i + 1) === s.slice(i + 1, i + 2)) {
        // 如果下一个数和当前位置的数相等，游标 + 1，右边起始位置 + 1
      rightIndex = ++i
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
    if (countLength > maxStr.length) {
      j -= 1 // 上面偏移量跳转循环，j 多加了 1
      maxStr = s.slice(leftIndex - j, rightIndex + j + 1)
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

// Accepted
// 176/176 cases passed (96 ms)
// Your runtime beats 98.28 % of javascript submissions
// Your memory usage beats 82.11 % of javascript submissions (39.7 MB)
