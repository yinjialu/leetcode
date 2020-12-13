/**
 * /*
 *
 * [17] 电话号码的字母组合
 *
 * @format
 * @lc app=leetcode.cn id=17 lang=javascript
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  const len = digits.length
  const fun = (arr1, i) => {
    if (i >= len) return arr1
    let arr = []
    const arr2 = map[digits.slice(i, i + 1)]
    arr2.forEach((a2) => {
      arr = arr.concat(arr1.map((a1) => `${a1}${a2}`))
    })
    if (i < len) return fun(arr, i + 1)
  }
  return fun(map[digits.slice(0, 1)] || [], 1)
}
// @lc code=end

// Accepted
// 25/25 cases passed (92 ms)
// Your runtime beats 19.91 % of javascript submissions
// Your memory usage beats 42.56 % of javascript submissions (37.7 MB)

// Accepted
// 25/25 cases passed (76 ms)
// Your runtime beats 87.9 % of javascript submissions
// Your memory usage beats 53.89 % of javascript submissions (37.6 MB)