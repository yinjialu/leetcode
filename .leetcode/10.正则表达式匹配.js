/**
 * /*
 *
 * [10] 正则表达式匹配
 *
 * @format
 * @lc app=leetcode.cn id=10 lang=javascript
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const sL = s.length
  const pL = p.length
  const map = {}
  const check = (sC, pC) => {
    if (map[`${sC}:${pC}`] !== undefined) return map[`${sC}:${pC}`]
    if (sC > sL) return false
    if (sC === sL && pC === pL) return true
    const sV = s.slice(sC, sC + 1)
    const pV = p.slice(pC, pC + 1)
    const pNext = p.slice(pC + 1, pC + 2)
    if (sV === pV || pV === '.') {
      map[`${sC}:${pC}`] = pNext === '*' ? check(sC + 1, pC) || check(sC, pC + 2) : check(sC + 1, pC + 1)
    } else {
      map[`${sC}:${pC}`] = pNext === '*' ? check(sC, pC + 2) : false
    }
    return map[`${sC}:${pC}`]
  }
  return check(0, 0)
}
// @lc code=end

// aaa
// a*a

// bbbba
// .*a*a

// Accepted
// 447/447 cases passed (88 ms)
// Your runtime beats 98.94 % of javascript submissions
// Your memory usage beats 26.88 % of javascript submissions (41.6 MB)
