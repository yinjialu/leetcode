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
  const len = height.length
  let maxV = 0
  for (let i = 0; i < len - 1; i++) {
    const leftV = height[i]
    for (let j = i + 1; j < len; j++) {
      const rightV = height[j]
      maxV = Math.max(maxV, Math.min(leftV, rightV) * (j - i))
    }
  }
  return maxV
}
// @lc code=end

// Accepted
// 56/56 cases passed (1188 ms)
// Your runtime beats 18.19 % of javascript submissions
// Your memory usage beats 5.01 % of javascript submissions (41.2 MB)