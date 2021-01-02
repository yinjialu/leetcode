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
var combinationSum = function (candidates, target, start = 0) {
  const min = Math.min(...candidates)
  let result = []
  for (let i = start; i < candidates.length; i++) {
    const v = candidates[i]
    if (v === target) {
      result.push([v])
    } else if (target - v >= min) {
      const subArr = combinationSum(candidates, target - v, i)
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
// @lc code=end

// Accepted
// 170/170 cases passed (96 ms)
// Your runtime beats 85.66 % of javascript submissions
// Your memory usage beats 63.86 % of javascript submissions (40.2 MB)
