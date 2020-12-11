/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const I = 1
    const V = 5
    const X = 10
    const L = 50
    const C = 100
    const D = 500
    const M = 1000
    let v = num
    let unit = 1000
    let s = ''
    const format = (unit, val) => {
      if (val <= 0) return ''
      if (unit === 1000) {
        return new Array(val).fill('M').join('')
      }
      if (unit === 100) {
        if (val > 5) {
          if (val === 9) return 'CM'
          return `D${new Array(val - 5).fill('C').join('')}`
        }
        if (val === 5) return 'D'
        if (val === 4) return 'CD'
        return new Array(val).fill('C').join('')
      }
      if (unit === 10) {
        if (val > 5) {
          if (val === 9) return 'XC'
          return `L${new Array(val - 5).fill('X').join('')}`
        }
        if (val === 5) return 'L'
        if (val === 4) return 'XL'
        return new Array(val).fill('X').join('')
      }
      if (unit === 1) {
        if (val > 5) {
          if (val === 9) return 'IX'
          return `V${new Array(val - 5).fill('I').join('')}`
        }
        if (val === 5) return 'V'
        if (val === 4) return 'IV'
        return new Array(val).fill('I').join('')
      }
    }
    while (v >= 1) {
      const n = Math.floor(v / unit)
      s += format(unit, n)
      v = v % unit
      unit = unit / 10
    }
    return s
};
// @lc code=end

// Accepted
// 3999/3999 cases passed (172 ms)
// Your runtime beats 44.49 % of javascript submissions
// Your memory usage beats 22.54 % of javascript submissions (44.5 MB)

