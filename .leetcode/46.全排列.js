/**
 * /*
 *
 * [46] 全排列
 *
 * @format
 * @lc app=leetcode.cn id=46 lang=javascript
 */

// [[1], [2], [3]];

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = []
  const funs = (arr, nums) => {
    if (nums.length === 0) {
      result.push(arr)
    } else {
      nums.forEach((n, index) => {
        funs(
          arr.concat(n),
          nums.filter((n, i) => i !== index)
        )
      })
    }
  }
  funs([], nums)
  return result
}
// @lc code=end

// Accepted
// 25/25 cases passed (120 ms)
// Your runtime beats 14.53 % of javascript submissions
// Your memory usage beats 5 % of javascript submissions (43 MB)
