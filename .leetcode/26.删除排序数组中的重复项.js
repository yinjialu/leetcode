/**
 * /*
 *
 * [26] 删除排序数组中的重复项
 *
 * @format
 * @lc app=leetcode.cn id=26 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
}
// @lc code=end

// Accepted
// 161/161 cases passed (100 ms)
// Your runtime beats 69.19 % of javascript submissions
// Your memory usage beats 13.73 % of javascript submissions (40.6 MB)
