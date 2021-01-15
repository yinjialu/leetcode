/**
 * /*
 *
 * [49] 字母异位词分组
 *
 * @format
 * @lc app=leetcode.cn id=49 lang=javascript
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {}
  const result = []
  const updateMap = (v, key) => {
    if (map[key]) {
      map[key].push(v)
    } else {
      var arr = [v]
      map[key] = arr
      result.push(arr)
    }
  }
  const getSortKey = (str) => {
    return str.split('').sort().join('')
  }
  for (let i = 0; i < strs.length; i++) {
    const v = strs[i]
    const key = getSortKey(v)
    updateMap(v, key)
  }
  return result
}
// @lc code=end

// Accepted
// 112/112 cases passed (144 ms)
// Your runtime beats 66.37 % of javascript submissions
// Your memory usage beats 79.3 % of javascript submissions (47.5 MB)
