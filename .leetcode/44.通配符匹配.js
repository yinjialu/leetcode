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

// var s = 'abcabczzzde'
// var p = '*abc???de*'

// var s =
//   'aaaabaaaabbbbaabbbaabbaababbabbaaaababaaabbbbbbaabbbabababbaaabaabaaaaaabbaabbbbaababbababaabbbaababbbba'
// var p = '*****b*aba***babaa*bbaba***a*aaba*b*aa**a*b**ba***a*a*'

// "aaaa"
// "***a"

// "abefcdgiescdfimde"
// "ab*cd?i*de"

var s = 'bbaa'
var p = '*?*b*'

var isMatch = function (s, p) {
  let newP = ''
  for (let i = 0; i < p.length; i++) {
    const pValue = p.charAt(i)
    const pPrev = p.charAt(i - 1)
    if (pPrev === '*' && pValue === '*') {
      continue
    } else {
      newP += pValue
    }
  }
  p = newP
  const map = {}
  const reverseMap = {}
  const sL = s.length
  const pL = p.length
  const check = (i, j, reversei, reversej) => {
    if (map[`${i}${j}`] !== undefined) return map[`${i}${j}`]
    if (reversei === sL - 1) {
      if (i === reversei + 1 && j === reversej + 1) return true
      if (i > reversei + 1 || j > reversej + 1) return false
    } else {
      if (i === reversei + 1 && (j === reversej + 1 || j === reversej))
        return true
      if (i > reversei + 1 || j > reversej + 1) return false
    }
    const sV = s.charAt(i)
    const pV = p.charAt(j)
    if (sV === pV || pV === '?') {
      map[`${i}${j}`] = check(i + 1, j + 1, reversei, reversej)
    } else if (pV === '*') {
      map[`${i}${j}`] =
        check(i + 1, j + 1, reversei, reversej) ||
        check(i, j + 1, reversei, reversej)
      if (!map[`${i}${j}`]) {
        // 尝试反转匹配
        // map[`${i}${j}`] = check(i + 1, j)
        map[`${i}${j}`] = reverseCheck(reversei, reversej, i + 1, j)
      }
    }
    return !!map[`${i}${j}`]
  }
  const reverseCheck = (i, j, reversei, reversej) => {
    if (reverseMap[`${i}${j}${reversei}${reversej}`] !== undefined)
      return reverseMap[`${i}${j}${reversei}${reversej}`]
    if (i === reversei - 1 && (j === reversej - 1 || j === reversej))
      return true
    if (i < reversei - 1 || j < reversej - 1) return false
    const sV = s.charAt(i)
    const pV = p.charAt(j)
    if (sV === pV || pV === '?') {
      reverseMap[`${i}${j}${reversei}${reversej}`] = reverseCheck(i - 1, j - 1, reversei, reversej)
    } else if (pV === '*') {
      reverseMap[`${i}${j}${reversei}${reversej}`] =
        reverseCheck(i - 1, j - 1, reversei, reversej) ||
        reverseCheck(i, j - 1, reversei, reversej)
      if (!reverseMap[`${i}${j}${reversei}${reversej}`]) {
        // 尝试反转匹配
        // reverseMap[`${i}${j}${reversei}${reversej}`] = reverseCheck(i - 1, j)
        reverseMap[`${i}${j}${reversei}${reversej}`] = check(reversei, reversej, i - 1, j)
      }
    }
    return !!reverseMap[`${i}${j}${reversei}${reversej}`]
  }
  return check(0, 0, sL - 1, pL - 1)
}
// @lc code=end

// Accepted
// 1811/1811 cases passed (348 ms)
// Your runtime beats 9.5 % of javascript submissions
// Your memory usage beats 5.46 % of javascript submissions (58.4 MB)

// v1
// Accepted
// 1811/1811 cases passed (424 ms)
// Your runtime beats 8.18 % of javascript submissions
// Your memory usage beats 5.03 % of javascript submissions (69.6 MB)

// v2
// Accepted
// 1811/1811 cases passed (472 ms)
// Your runtime beats 7.27 % of javascript submissions
// Your memory usage beats 5.03 % of javascript submissions (64.9 MB)