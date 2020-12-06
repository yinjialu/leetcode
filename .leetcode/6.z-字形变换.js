/**
 * /*
 *
 * [6] Z 字形变换
 *
 * @format
 * @lc app=leetcode.cn id=6 lang=javascript
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const groupLen = numRows * 2 - 2 || 1 // s = 'a' 一个单词时要避免 groupLen 为 0
  const groups = Math.ceil(s.length / groupLen); // 分组
  let str = '';
  for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < groups; j++) {
          const left = i + j * groupLen;
          const right = (j + 1) * groupLen - i; // <= groupLen
          str += s.slice(left, left + 1);
          if (i !== 0 && i !== numRows - 1) {
            str += s.slice(right, right + 1);
          }
      }
  }
  return str;
}
// @lc code=end

// Accepted
// 1157/1157 cases passed (208 ms)
// Your runtime beats 9.6 % of javascript submissions
// Your memory usage beats 11.15 % of javascript submissions (45.4 MB)

// v1
// Accepted
// 1157/1157 cases passed (160 ms)
// Your runtime beats 15.56 % of javascript submissions
// Your memory usage beats 22.15 % of javascript submissions (44.3 MB)

// v2
// Accepted
// 1157/1157 cases passed (112 ms)
// Your runtime beats 73.74 % of javascript submissions
// Your memory usage beats 63.6 % of javascript submissions (41.7 MB)
