/**
 * /*
 *
 * [6] Z 字形变换
 *
 * @format
 * @lc app=leetcode.cn id=6 lang=javascript
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const groupLen = numRows * 2 - 2 || 1 // s = 'a' 一个单词时要避免 groupLen 为 0
  const totalLen = s.length
  const arr = []
  let i = 0
  while (i < totalLen) {
    const groupStr = s.slice(i, i + groupLen)
    const firstLine = groupStr.slice(0, numRows)
    arr.push(firstLine.split(''))
    let j = numRows
    while (j < groupStr.length) {
      const newArr = new Array(numRows).fill('')
      newArr.splice(groupLen - j, 1, groupStr.slice(j, j + 1))
      arr.push(newArr)
      j++
    }
    i += groupLen
  }
  //   console.log('arr', arr)
  let str = ''
  for (let l = 0; l < numRows; l++) {
    str += arr
      .map((item) => item[l])
      .filter(Boolean)
      .join('')
  }
  return str
}
// @lc code=end

// Accepted
// 1157/1157 cases passed (208 ms)
// Your runtime beats 9.6 % of javascript submissions
// Your memory usage beats 11.15 % of javascript submissions (45.4 MB)
