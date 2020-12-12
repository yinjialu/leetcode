/**
 * /*
 *
 * [13] 罗马数字转整数
 *
 * @format
 * @lc app=leetcode.cn id=13 lang=javascript
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  const len = s.length
  let i = 0
  let val = 0
  while (i < len) {
    const v1 = s.slice(i, i + 1);
    const v2 = s.slice(i + 1, i + 2);
    if (map[v1] < map[v2]) {
        val -= map[v1];
        val += map[v2]
        i += 2
    } else {
        val += map[v1];
        i++
    }
  }
  return val
}
// @lc code=end

// Accepted
// 3999/3999 cases passed (176 ms)
// Your runtime beats 43.95 % of javascript submissions
// Your memory usage beats 35.05 % of javascript submissions (44.1 MB)

// v1
// 3999/3999 cases passed (156 ms)
// Your runtime beats 87.55 % of javascript submissions
// Your memory usage beats 37.36 % of javascript submissions (44 MB)

// v2
// Accepted
// 3999/3999 cases passed (188 ms)
// Your runtime beats 24.95 % of javascript submissions
// Your memory usage beats 75.53 % of javascript submissions (43.1 MB)

// v3
// Accepted
// 3999/3999 cases passed (156 ms)
// Your runtime beats 87.55 % of javascript submissions
// Your memory usage beats 64.53 % of javascript submissions (43.3 MB)