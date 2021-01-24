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
    const arr = s.split(' ').filter(Boolean);
    const len = arr.length;
    return (arr[len - 1] && arr[len - 1].length) || 0;
};
// @lc code=end

Accepted
58/58 cases passed (100 ms)
Your runtime beats 10.81 % of javascript submissions
Your memory usage beats 29.8 % of javascript submissions (38 MB)
