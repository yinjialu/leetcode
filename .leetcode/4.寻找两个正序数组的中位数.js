/**
 * /*
 *
 * [4] 寻找两个正序数组的中位数
 *
 * @format
 * @lc app=leetcode.cn id=4 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const len1 = nums1.length
  const len2 = nums2.length
  let nums = []
  let i = 0
  let j = 0
  while (i < len1 && j < len2) {
    if (nums1[i] <= nums2[j]) {
      nums.push(nums1[i])
      ++i
    } else {
      nums.push(nums2[j])
      ++j
    }
  }
  nums = nums.concat(nums1.slice(i))
  nums = nums.concat(nums2.slice(j))
  const len = (nums.length - 1) / 2
  const min = Math.floor(len)
  const max = Math.ceil(len)
  return (nums[min] + nums[max]) / 2
}
// @lc code=end

// Accepted
// 2091/2091 cases passed (148 ms)
// Your runtime beats 47.66 % of javascript submissions
// Your memory usage beats 25.4 % of javascript submissions (43.8 MB)
