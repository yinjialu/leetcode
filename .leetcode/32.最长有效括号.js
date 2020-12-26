/**
 * /*
 *
 * [32] 最长有效括号
 *
 * @format
 * @lc app=leetcode.cn id=32 lang=javascript
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let leftCount = 0;
  let rightCount = 0;
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
      const v = s.charAt(i);
      if (v === '(') {
          leftCount++;
      } else {
          rightCount++;
      }
      if (leftCount === rightCount) {
          maxLen = Math.max(maxLen, leftCount + rightCount);
      } else if (rightCount > leftCount) {
          leftCount = 0;
          rightCount = 0;
      }
  }
  leftCount = 0;
  rightCount = 0;
  for (let i = s.length - 1; i >= 0; i--) {
      const v = s.charAt(i);
      if (v === ')') {
          rightCount++;
      } else {
          leftCount++;
      }
      if (rightCount === leftCount) {
          maxLen = Math.max(maxLen, rightCount + leftCount);
      } else if (leftCount > rightCount) {
          leftCount = 0;
          rightCount = 0;
      }
  }
  return maxLen
}
// @lc code=end

// (()
// ()(() => 2
// ()(()) => 6
// (()(((()
// (()(((())))())

// var longestValidParentheses = function (s) {
//     let maxlen = 0
//     const stock = [-1]
//     for (let i = 0; i < s.length; i++) {
//         const v = s.charAt(i)
//         if (v === '(') {
//         stock.push(i)
//         continue
//         }
//         stock.pop()
//         if (stock.length === 0) {
//         stock.push(i)
//         }
//         maxlen = Math.max(maxlen, i - stock[stock.length - 1])
//     }
//     return maxlen
// }

// Accepted
// 231/231 cases passed (100 ms)
// Your runtime beats 40.72 % of javascript submissions
// Your memory usage beats 82.63 % of javascript submissions (39.6 MB)

/**
 * (()
 * 方案2: 
 * 从左到右遍历一遍
 * 统计 '(', ')' 出现的次数，如果 '(' 和 ')' 的次数一致，刷新最大长度，如果 ')' 出现的次数比 '(' 大，重置累计的长度
 *
 * 从右到左遍历一遍
 * 统计 ')', '(' 出现的次数，如果 ')' 和 '(' 的次数一致，刷新最大长度，如果 '(' 出现的次数比 ')' 大，重置累计的长度
 */

// v1
// Accepted
// 231/231 cases passed (88 ms)
// Your runtime beats 80.54 % of javascript submissions
// Your memory usage beats 88.67 % of javascript submissions (39.4 MB)