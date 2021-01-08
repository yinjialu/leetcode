/**
 * /*
 *
 * [44] 通配符匹配
 *
 * @format
 * @lc app=leetcode.cn id=44 lang=javascript
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function (s, p) {
  const map = {}
  const sL = s.length
  const pL = p.length
  const check = (i, j) => {
    if (map[`${i}${j}`] !== undefined) return map[`${i}${j}`]
    if (i === sL && j === pL) return true
    if (i > sL || j > pL) return false
    const sV = s.charAt(i)
    const pV = p.charAt(j)
    if (sV === pV || pV === '?') {
      map[`${i}${j}`] = check(i + 1, j + 1)
    } else if (pV === '*') {
      let pN = p.charAt(j + 1)
      while (pN === '*') {
        j++
        pN = p.charAt(j + 1)
      }
      map[`${i}${j}`] =
        check(i + 1, j + 1) || check(i, j + 1) || check(i + 1, j)
    }
    return !!map[`${i}${j}`]
  }
  return check(0, 0)
}
// @lc code=end

// Accepted
// 1811/1811 cases passed (348 ms)
// Your runtime beats 9.5 % of javascript submissions
// Your memory usage beats 5.46 % of javascript submissions (58.4 MB)