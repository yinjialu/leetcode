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
    let leftIndex = -1
    let rightIndex = -1
    const setLeftAndRight = (index) => {
      leftIndex = leftIndex === -1 ? index : Math.min(leftIndex, index)
      rightIndex = rightIndex === -1 ? index : Math.max(rightIndex, index)
    }
    const fun = (left, right) => {
      if (target < nums[left] && target > nums[right]) return
      if (nums[left] === target) {
        setLeftAndRight(left)
      }
      if (nums[right] === target) {
        setLeftAndRight(right)
      }
      const middle = Math.floor((left + right) / 2)
      if (middle === left) return
      if (nums[middle] === target) {
        setLeftAndRight(middle)
      }
      fun(left, middle)
      fun(middle, right)
    }
    if (nums.length > 0) {
      fun(0, nums.length - 1)
    }
    return [leftIndex, rightIndex]
}
// @lc code=end

// Accepted
// 88/88 cases passed (76 ms)
// Your runtime beats 93.53 % of javascript submissions
// Your memory usage beats 94.91 % of javascript submissions (38.9 MB)

// v1
// Accepted
// 88/88 cases passed (88 ms)
// Your runtime beats 49.23 % of javascript submissions
// Your memory usage beats 11.75 % of javascript submissions (39.9 MB)
