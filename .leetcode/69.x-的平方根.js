/**
 * /*
 *
 * [69] x 的平方根
 *
 * @format
 * @lc app=leetcode.cn id=69 lang=javascript
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let i = 1;
    while (i * i <= x) {
        i++;
    }
    return i - 1;
};
// @lc code=end

// Accepted
// 1017/1017 cases passed (132 ms)
// Your runtime beats 15.06 % of javascript submissions
// Your memory usage beats 64.2 % of javascript submissions (39.2 MB)
