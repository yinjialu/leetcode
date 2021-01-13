/**
 * /*
 *
 * [47] 全排列 II
 *
 * @format
 * @lc app=leetcode.cn id=47 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = []
  const funs = (arr, nums) => {
    if (nums.length === 0) {
      result.push(arr)
    } else {
      const map = {}
      nums.forEach((n, index) => {
        if (map[n]) return
        map[n] = true
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
// 33/33 cases passed (132 ms)
// Your runtime beats 24.14 % of javascript submissions
// Your memory usage beats 16.21 % of javascript submissions (44.6 MB)
