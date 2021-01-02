/**
 * /*
 *
 * [39] 组合总和
 *
 * @format
 * @lc app=leetcode.cn id=39 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const min = Math.min(...candidates)
  const fun = (target, start) => {
    let result = []
    for (let i = start; i < candidates.length; i++) {
      const v = candidates[i]
      if (v === target) {
        result.push([v])
      } else if (target - v >= min) {
        const subArr = fun(target - v, i)
        if (subArr.length > 0) {
          subArr.forEach((s) => {
            s.unshift(v)
          })
        }
        result = result.concat(subArr)
      }
    }
    return result
  }
  return fun(target, 0)
}
// @lc code=end

// Accepted
// 170/170 cases passed (96 ms)
// Your runtime beats 85.66 % of javascript submissions
// Your memory usage beats 63.86 % of javascript submissions (40.2 MB)

// v1
// Accepted
// 170/170 cases passed (88 ms)
// Your runtime beats 96.7 % of javascript submissions
// Your memory usage beats 84.35 % of javascript submissions (40 MB)
