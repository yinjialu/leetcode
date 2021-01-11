/**
 * /*
 *
 * [45] 跳跃游戏 II
 *
 * @format
 * @lc app=leetcode.cn id=45 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const map = {}
  const target = nums.length - 1
  const check = (i) => {
    if (map[i] !== undefined) return map[i]
    if (i === target) {
      map[i] = 0
      return map[i]
    }
    const v = nums[i]
    if (v === 0) {
      map[i] = false
      return map[i]
    }
    if (target - i <= v) {
      map[i] = 1
      return map[i]
    }
    let minStep
    for (let j = v; j >= 1; j--) {
      if (nums[i + j] + (i + j) <= i + v) continue
      const nextStep = check(i + j)
      if (nextStep === false) continue
      const step = 1 + nextStep
      minStep = minStep ? Math.min(minStep, step) : step
    }
    map[i] = minStep || false
    return map[i]
  }
  return check(0)
}
// @lc code=end

// Accepted
// 95/95 cases passed (112 ms)
// Your runtime beats 22.22 % of javascript submissions
// Your memory usage beats 8.35 % of javascript submissions (43.8 MB)
