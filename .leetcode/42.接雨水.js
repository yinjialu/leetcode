/**
 * /*
 *
 * [42] 接雨水
 *
 * @format
 * @lc app=leetcode.cn id=42 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let i = 1
  let total = 0
  while (i < height.length - 1) {
    const v = height[i]
    let left = i - 1
    let right = i + 1
    if (height[left] === undefined || height[right] === undefined) {
      i++
      continue
    }
    if (height[left] < v || height[right] < v) {
      i++
      continue
    }
    while (height[right] === v) {
      right += 1
    }
    let baseLevel = v
    while (height[left] > v && height[right] > v) {
      const leftMax = height[left]
      const min = Math.min(height[left], height[right])
      total += (right - left - 1) * (min - baseLevel)
      baseLevel = min
      // 向右，如果遇到比前边小的，结束循环
      // 向左，如果遇到比当前小的，继续 - 1
      if (height[left] < height[right]) {
        left -= 1
        while (height[left] <= leftMax) {
          left -= 1
        }
      } else if (height[left] > height[right]) {
        right += 1
        while (height[right] === height[right - 1]) {
          right += 1
        }
        if (height[right] < height[right - 1]) break
      } else {
        left -= 1
        while (height[left] <= leftMax) {
          left -= 1
        }
        right += 1
        while (height[right] === height[right - 1]) {
          right += 1
        }
        if (height[right] < height[right - 1]) break
      }
    }
    i = right
  }
  return total
}
// @lc code=end

// Accepted
// 320/320 cases passed (96 ms)
// Your runtime beats 58.21 % of javascript submissions
// Your memory usage beats 23.58 % of javascript submissions (39.9 MB)

// v1
// Accepted
// 320/320 cases passed (88 ms)
// Your runtime beats 84.35 % of javascript submissions
// Your memory usage beats 34.05 % of javascript submissions (39.7 MB)
