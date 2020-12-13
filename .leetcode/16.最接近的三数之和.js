/**
 * /*
 *
 * [16] 最接近的三数之和
 *
 * @format
 * @lc app=leetcode.cn id=16 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b)
  let minV
  let result = 0
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target + minV / 3) {
      const sum = nums[i] + nums[i + 1] + nums[i + 2]
      if (minV === undefined || Math.abs(sum - target) < minV) {
        result = sum
      }
      break
    }
    let j = i + 1
    let k = nums.length - 1
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]
      if (minV === undefined || Math.abs(sum - target) < minV) {
        minV = Math.abs(sum - target)
        result = sum
      }
      if (sum <= target) j++
      if (sum > target) k--
    }
  }
  return result
}
// @lc code=end

// Accepted
// 131/131 cases passed (92 ms)
// Your runtime beats 76.25 % of javascript submissions
// Your memory usage beats 38.9 % of javascript submissions (39.4 MB)
