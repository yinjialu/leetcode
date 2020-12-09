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
  const check = (sC, pC) => {
    if (sC > sL) return false
    if (sC === sL && pC === pL) return true
    const sV = s.slice(sC, sC + 1)
    const pV = p.slice(pC, pC + 1)
    const pNext = p.slice(pC + 1, pC + 2)
    if (sV === pV || pV === '.') {
      if (pNext === '*') return check(sC + 1, pC) || check(sC, pC + 2)
      return check(sC + 1, pC + 1)
    }
    if (pNext === '*') return check(sC, pC + 2)
    return false
  }
  return check(0, 0)
}
// @lc code=end

// aaa
// a*a

// bbbba
// .*a*a
