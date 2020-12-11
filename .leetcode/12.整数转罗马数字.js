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
    const map = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M',
    }
    let v = num
    let unit = 1000
    let s = ''
    const format = (unit, val) => {
      if (val <= 0) return ''
      if (val === 5) return map[unit * val];
      if (val === 9) return `${map[unit]}${map[unit * 10]}`;
      if (val === 4) return `${map[unit]}${map[unit * 5]}`;
      return val > 5 ? map[unit * 5] + new Array(val - 5).fill(map[unit]).join('') : new Array(val).fill(map[unit]).join('');
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

// v1
// Accepted
// 3999/3999 cases passed (172 ms)
// Your runtime beats 44.49 % of javascript submissions
// Your memory usage beats 30.75 % of javascript submissions (44.2 MB)