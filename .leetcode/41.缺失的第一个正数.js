/**
 * /*
 *
 * [41] 缺失的第一个正数
 *
 * @format
 * @lc app=leetcode.cn id=41 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 确保数字 n 在 位置 n - 1 上面
 * const n = nums[i];
 * nums[n - 1] = n
 * nums[n - 1] 于 nums[i] 位置互换
 * [nums[n - 1], nums[i]] = [nums[i], nums[n - 1]]
 * [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
 * 
 * 此时 nums[n - 1] = n 达到目标状态
 * nums = [1,2,3,6,8,7,5,9]
 * nums[3] = 6
 * nums[6 - 1] = nums[5]
 * [nums[5], nums[3]] = [nums[3], nums[5]]
 * nums = [1,2,3,7,8,6,5,9]
 * 
 * nums[3] = 7
 * nums[7 - 1] = nums[6]
 * [nums[6], nums[3]] = [nums[3], nums[6]]
 * nums = [1,2,3,5,8,6,7,9]
 * 
 * nums[3] = 5
 * nums[5 - 1] = nums[4]
 * [nums[4], nums[3]] = [nums[3], nums[4]]
 * nums = [1,2,3,8,5,6,7,9]
 */
var firstMissingPositive = function (nums) {
  let min
  let result = 1
  const updateMin = (v) => {
    if (v <= 0) return
    if (!min) {
      // 初始化 min
      min = v
      return
    }
    if (v < min) {
      // 更新 min
      min = v
      return
    }
  }
  let i = 0
  while (i < nums.length) {
    const v = nums[i]
    if (v <= 0) {
      i++
      continue
    }
    // v > 0
    // updateMin(v);
    if (result > v) {
      i++
      continue
    }
    if (result < v) {
      updateMin(v)
      i++
      continue
    }
    if (result === v) {
      result += 1 // 如果前面有存在大于 result 的
      i++
      continue
    }
  }
  return result
}
// @lc code=end
