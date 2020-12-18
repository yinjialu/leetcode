/**
 * /*
 *
 * [27] 移除元素
 *
 * @format
 * @lc app=leetcode.cn id=27 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
}
// @lc code=end

// Accepted
// 113/113 cases passed (92 ms)
// Your runtime beats 28.72 % of javascript submissions
// Your memory usage beats 34.94 % of javascript submissions (37.9 MB)
