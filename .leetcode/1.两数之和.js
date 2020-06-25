/**
 * /*
 *
 * [1] 两数之和
 *
 * @format
 * @lc app=leetcode.cn id=1 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const collect = {};
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        const diff = target - nums[i];
        if (collect[diff]) {
            return [collect[diff] - 1, i]; // collect[diff] 如果存在必然是在 i 下标之前的
        }
        collect[nums[i]] = i + 1; // 避免下标 0 影响 collect[diff] 的判断
    }
}
// @lc code=end

// 第一版
var twoSum1 = function (nums, target) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    const restNums = nums.slice(i + 1, len) // 取出 i 下标后面的数组
    const a = nums[i]
    const b = target - a
    const index = restNums.findIndex((n) => n === b)
    if (index > -1) {
      return [i, index + (i + 1)] // index 是基于剩余数组的下标，（需要追加上前面的 (i+1) 个点）
    }
  }
}
