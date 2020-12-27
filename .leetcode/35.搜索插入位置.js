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
  let left = 0
  let right = nums.length - 1
  let result = nums.length
  while (left <= right) {
    if (nums[right] < target) {
      result = right + 1
      break
    }
    if (nums[right] === target) {
      result = right
      break
    }
    if (nums[left] >= target) {
      result = left
      break
    }
    // nums[left] < target < nums[right]
    const middle = (left + right) >> 1
    if (nums[middle] === target) {
      result = middle
      break
    }
    if (target < nums[middle]) {
      // target 在 lert - middle 之间
      right = middle - 1
      result = middle
    } else {
      // nums[middle] < target
      // target 在 middle - right 之间
      left = middle + 1
      result = right
    }
  }
  return result
}
// @lc code=end

// Accepted
// 62/62 cases passed (88 ms)
// Your runtime beats 40.55 % of javascript submissions
// Your memory usage beats 85.5 % of javascript submissions (38.3 MB)

// v1
// Accepted
// 62/62 cases passed (88 ms)
// Your runtime beats 40.55 % of javascript submissions
// Your memory usage beats 85.59 % of javascript submissions (38.3 MB)