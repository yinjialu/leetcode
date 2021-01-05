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
  let i = 0
  let total = 0
  while (i < height.length) {
    let count = 0
    const v = height[i]
    let baseLevel = v
    let left = i - 1
    let right = i + 1
    let leftMax = height[left]
    let rightMax = height[right]
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
    while (height[left] > v && height[right] > v) {
      leftMax = height[left]
      rightMax = height[right]
      const min = Math.min(height[left], height[right])
      count += (right - left - 1) * (min - baseLevel)
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
        while (height[right] === rightMax) {
          right += 1
        }
        if (height[right] < rightMax) break
      } else {
        left -= 1
        while (height[left] <= leftMax) {
          left -= 1
        }
        right += 1
        while (height[right] === rightMax) {
          right += 1
        }
        if (height[right] < rightMax) break
      }
    }
    i++
    total += count
  }
  return total
}
// @lc code=end

// Accepted
// 320/320 cases passed (96 ms)
// Your runtime beats 58.21 % of javascript submissions
// Your memory usage beats 23.58 % of javascript submissions (39.9 MB)
