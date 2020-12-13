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
  nums = nums.sort((a, b) => a - b) // 排序后可以简化后续的计算方式
  const target = 0
  const result = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target / 3) return result // 数组递增，如果当前值比 target 大，后续的值不可能比 target 小，肯定不满足求和等于 target 的约束条件
    if (i > 0 && nums[i - 1] === nums[i]) continue // 如果当前值和上一个值一样，需要去重复，直接进入下一轮循环
    let j = i + 1 // 有序数组，从起点和终点向中间聚合计算
    let k = nums.length - 1
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (sum === target) {
        result.push([nums[i], nums[j], nums[k]]) // 获取到一个满足约束条件的组合
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
