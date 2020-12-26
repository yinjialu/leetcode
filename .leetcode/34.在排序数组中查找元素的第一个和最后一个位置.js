/**
 * /*
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * @format
 * @lc app=leetcode.cn id=34 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const left = nums.indexOf(target)
  const right = nums.reverse().indexOf(target)
  return [left, right === -1 ? right : nums.length - 1 - right]
}
// @lc code=end

// Accepted
// 88/88 cases passed (76 ms)
// Your runtime beats 93.53 % of javascript submissions
// Your memory usage beats 94.91 % of javascript submissions (38.9 MB)
