/**
 * /*
 *
 * [58] 最后一个单词的长度
 *
 * @format
 * @lc app=leetcode.cn id=58 lang=javascript
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    return s.trim().split(' ').pop().length;
};
// @lc code=end

// Accepted
// 58/58 cases passed (100 ms)
// Your runtime beats 10.81 % of javascript submissions
// Your memory usage beats 29.8 % of javascript submissions (38 MB)

// Accepted
// 58/58 cases passed (84 ms)
// Your runtime beats 54.87 % of javascript submissions
// Your memory usage beats 20.06 % of javascript submissions (38.1 MB)
