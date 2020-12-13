/**
 * /*
 *
 * [18] 四数之和
 *
 * @format
 * @lc app=leetcode.cn id=18 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b)
  const result = []
  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] > target / 4) break
    if (nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (nums[j] > (target - nums[i]) / 3) break
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      let m = j + 1
      let n = nums.length - 1
      if (nums[i] + nums[j] + nums[n - 1] + nums[n] < target) continue
      if (nums[i] + nums[j] + nums[m] + nums[m + 1] > target) continue
      while (m < n) {
        const sum = nums[i] + nums[j] + nums[m] + nums[n]
        if (sum === target) {
          result.push([nums[i], nums[j], nums[m], nums[n]])
          while (nums[m] === nums[m + 1]) m++
          while (nums[n] === nums[n - 1]) n--
          m++
          n--
        }
        if (sum < target) m++
        if (sum > target) n--
      }
    }
  }
  return result
}
// @lc code=end

// Accepted
// 283/283 cases passed (100 ms)
// Your runtime beats 88.64 % of javascript submissions
// Your memory usage beats 33.92 % of javascript submissions (40 MB)

// Accepted
// 283/283 cases passed (88 ms)
// Your runtime beats 98.73 % of javascript submissions
// Your memory usage beats 41.14 % of javascript submissions (39.9 MB)