/**
 * /*
 *
 * [11] 盛最多水的容器
 *
 * @format
 * @lc app=leetcode.cn id=11 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let maxV = 0
  while (left < right) {
    maxV = Math.max(
      maxV,
      Math.min(height[left], height[right]) * (right - left)
    )
    if (height[left] > height[right]) {
      right--
    } else {
      left++
    }
  }
  return maxV
}
// @lc code=end

// Accepted
// 56/56 cases passed (1188 ms)
// Your runtime beats 18.19 % of javascript submissions
// Your memory usage beats 5.01 % of javascript submissions (41.2 MB)

// v1
// Accepted
// 56/56 cases passed (96 ms)
// Your runtime beats 49.62 % of javascript submissions
// Your memory usage beats 28.56 % of javascript submissions (40.7 MB)