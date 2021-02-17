/**
 * /*
 *
 * [70] 爬楼梯
 *
 * @format
 * @lc app=leetcode.cn id=70 lang=javascript
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 *
 * f(n) = f(n - 1) + f(n - 2)
 */
var climbStairs = function (n) {
    const map = {
        1: 1,
        2: 2,
        3: 3,
    };
    for (let i = 4; i <= n; i++) {
        map[i] = map[i - 1] + map[i - 2];
    }
    return map[n];
};
// @lc code=end

// Accepted
// 45/45 cases passed (88 ms)
// Your runtime beats 29.13 % of javascript submissions
// Your memory usage beats 5.05 % of javascript submissions (38.2 MB)

// v1
// Accepted
// 45/45 cases passed (92 ms)
// Your runtime beats 18.05 % of javascript submissions
// Your memory usage beats 69.42 % of javascript submissions (37.6 MB)