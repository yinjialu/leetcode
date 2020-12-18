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
  let index = nums.indexOf(val)
  while (index > -1) {
    nums.splice(index, 1)
    index = nums.indexOf(val)
  }
  return nums.length
}
// @lc code=end

// Accepted
// 113/113 cases passed (92 ms)
// Your runtime beats 28.72 % of javascript submissions
// Your memory usage beats 34.94 % of javascript submissions (37.9 MB)

// Accepted
// 113/113 cases passed (76 ms)
// Your runtime beats 92.74 % of javascript submissions
// Your memory usage beats 62.26 % of javascript submissions (37.6 MB)