/**
 * /*
 *
 * [3] 无重复字符的最长子串
 *
 * @format
 * @lc app=leetcode.cn id=3 lang=javascript
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const arr = s.split('')
  const len = arr.length
  let obj = {} // 记录遍历过的节点
  let maxLength = 0 // 记录最大长度
  let countLength = 0 // 记录遍历的长度
  let startIndex = 0 // 记录起点
  for (let i = 0; i < len; i++) {
    if (!obj[arr[i]]) {
        // 没有出现过相同字符，长度 + 1
      countLength += 1
    } else if (obj[arr[i]] - 1 < startIndex) {
        // 出现过相同字符，但是位置在初始位置之前，长度 + 1
      countLength += 1
    } else {
        // 遇到重复字符，重置起始位置为重复字符的位置，重新计算初始长度
      startIndex = obj[arr[i]] - 1 // 更新起始位置
      countLength = i - startIndex // 设置初始长度
    }
    maxLength = Math.max(maxLength, countLength)
    obj[arr[i]] = i + 1
  }
  return maxLength
}
// @lc code=end
