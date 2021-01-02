/**
 * /*
 *
 * [40] 组合总和 II
 *
 * @format
 * @lc app=leetcode.cn id=40 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  const result = []
  const resultMap = {}
  const updateResult = (r) => {
    const key = r.join()
    if (resultMap[key]) return
    resultMap[key] = true
    result.push(r)
  }
  const fun = (target, start, stock) => {
    console.log('start', target, 'start', start, 'stock', JSON.stringify(stock))
    const min = candidates[start + 1]
    let i = start + 1
    while (i < candidates.length) {
      const v = candidates[i]
      if (v === target) {
        updateResult(stock.concat(v))
      } else if (target - v >= min) {
        fun(target - v, i, stock.concat(v))
      }
      i++
      while (candidates[i] === v) {
        i++
      }
    }
  }
  fun(target, -1, [])
  return result
}
// @lc code=end

// Accepted
// 174/174 cases passed (4196 ms)
// Your runtime beats 5.05 % of javascript submissions
// Your memory usage beats 10.57 % of javascript submissions (43.9 MB)

// v1
// Accepted
// 174/174 cases passed (156 ms)
// Your runtime beats 21.81 % of javascript submissions
// Your memory usage beats 24.76 % of javascript submissions (43.4 MB)
