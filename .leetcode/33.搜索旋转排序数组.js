/**
 * /*
 *
 * [33] 搜索旋转排序数组
 *
 * @format
 * @lc app=leetcode.cn id=33 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let result = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result = i
      break
    }
  }
  return result
}
// @lc code=end

// Accepted
// 195/195 cases passed (136 ms)
// Your runtime beats 7.48 % of javascript submissions
// Your memory usage beats 53.68 % of javascript submissions (38.9 MB)