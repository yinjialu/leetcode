/**
 * /*
 *
 * [15] 三数之和
 *
 * @format
 * @lc app=leetcode.cn id=15 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b)
  const target = 0
  const result = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) return result
    if (i > 0 && nums[i - 1] === nums[i]) continue
    let j = i + 1
    let k = nums.length - 1
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (sum === target) {
        result.push([nums[i], nums[j], nums[k]])
        while (nums[j + 1] === nums[j]) j++
        while (nums[k - 1] === nums[k]) k--
        j++
        k--
      }
      if (sum < target) j++
      if (sum > target) k--
    }
  }
  return result
}
// @lc code=end

// Accepted
// 318/318 cases passed (160 ms)
// Your runtime beats 83.75 % of javascript submissions
// Your memory usage beats 76.84 % of javascript submissions (47.6 MB)
