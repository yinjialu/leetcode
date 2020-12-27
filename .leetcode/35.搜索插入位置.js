/**
 * /*
 *
 * [35] 搜索插入位置
 *
 * @format
 * @lc app=leetcode.cn id=35 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i
  }
  return nums.length
}
// @lc code=end

// Accepted
// 62/62 cases passed (88 ms)
// Your runtime beats 40.55 % of javascript submissions
// Your memory usage beats 85.5 % of javascript submissions (38.3 MB)
