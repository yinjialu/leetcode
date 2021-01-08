/**
 * /*
 *
 * [43] 字符串相乘
 *
 * @format
 * @lc app=leetcode.cn id=43 lang=javascript
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// var a = '581852037460725882246068583352420736139988952640866685633288423526139'
// var b =
//   '2723349969536684936041476639043426870967112972397011150925040382981287990380531232'
var multiply = function (num1, num2) {
  let base
  const arr = []
  let result = ''
  for (let i = num1.length - 1; i >= 0; i--) {
    if (base) {
      base.push(0)
    } else {
      base = []
    }
    const v1 = +num1.charAt(i)
    if (v1 === 0) continue
    let sum = []
    let nextLevel2 = 0
    for (let j = num2.length - 1; j >= 0; j--) {
      const v2 = +num2.charAt(j)
      const value = v1 * v2 + nextLevel2
      nextLevel2 = Math.floor(value / 10)
      sum.push(value % 10)
    }
    if (nextLevel2) {
      sum.push(nextLevel2)
    }
    sum = base.concat(sum)
    arr.push(sum)
  }
  
  const lastSum = arr[arr.length - 1] || [];
  let nextLevel = 0
  let collectZero = ''
  for (let m = 0; m < lastSum.length; m++) {
    let value = 0
    for (let n = 0; n < arr.length; n++) {
      value += arr[n][m] || 0
    }
    value = value + nextLevel
    nextLevel = Math.floor(value / 10)
    if (value % 10 === 0) {
      collectZero += '0'
    } else {
      result = (value % 10) + collectZero + result
      collectZero = ''
    }
  }
  if (nextLevel) {
    result = nextLevel + collectZero + result
  }
  return result || '0'
}
// @lc code=end

// 121932631112635260

// Accepted
// 311/311 cases passed (112 ms)
// Your runtime beats 41.73 % of javascript submissions
// Your memory usage beats 15.52 % of javascript submissions (44.4 MB)
