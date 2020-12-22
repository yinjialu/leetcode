/**
 * /*
 *
 * [30] 串联所有单词的子串
 *
 * @format
 * @lc app=leetcode.cn id=30 lang=javascript
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (words.length === 0) return []
  const len1 = words.length
  const len2 = words[0].length
  let result = []
  const indexs = []
  const indexMap = {}
  words.forEach((word, i) => {
    //   找出所有包含word 的位置信息
    let index = s.indexOf(word)
    while (index !== -1) {
      if (indexMap[index] === undefined && s.length - index >= len1 * len2) {
        indexMap[index] = word
        indexs.push(index)
      }
      index = s.indexOf(word, index + 1)
    }
  })
  if (indexs.length === 0) return []
  result = indexs.slice()
  for (let i = 0; i < indexs.length; i++) {
    let index = indexs[i]
    if (s.length - index < len1 * len2) {
      result.splice(result.indexOf(index), 1)
      continue
    }
    let wordsList = words.slice()
    for (let j = 0; j < len1; j++) {
      const str = s.slice(index + j * len2, index + (j + 1) * len2)
      const index2 = wordsList.indexOf(str)
      if (index2 === -1) {
        result.splice(result.indexOf(index), 1)
        break
      }
      wordsList.splice(index2, 1)
    }
  }
  return result
}
// @lc code=end

// Accepted
// 176/176 cases passed (7048 ms)
// Your runtime beats 5 % of javascript submissions
// Your memory usage beats 95.09 % of javascript submissions (42 MB)

// v1
// Accepted
// 176/176 cases passed (920 ms)
// Your runtime beats 24.88 % of javascript submissions
// Your memory usage beats 49.13 % of javascript submissions (45.3 MB)
