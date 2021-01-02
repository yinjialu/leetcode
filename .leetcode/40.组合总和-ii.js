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
  const min = Math.min(...candidates)
  const fun = (target, start) => {
    let result = []
    for (let i = start + 1; i < candidates.length; i++) {
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
  const map = {}
  const result = fun(target, -1).filter((r) => {
    const key = r.sort().join()
    if (map[key]) return false
    map[key] = true
    return true
  })
  return result
}
// @lc code=end

// Accepted
// 174/174 cases passed (4196 ms)
// Your runtime beats 5.05 % of javascript submissions
// Your memory usage beats 10.57 % of javascript submissions (43.9 MB)
