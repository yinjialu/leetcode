/**
 * /*
 *
 * [65] 有效数字
 *
 * @format
 * @lc app=leetcode.cn id=65 lang=javascript
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    // const matchNum = (s) => {
    //     return /\d+/.test(s);
    // };
    // const matchE = (s) => {
    //     return /e/i.test(s);
    // };
    // 匹配整数
    const matchInteger = (s) => {
        return /^[\-|\+]?\d+$/.test(s);
    };
    // 匹配小数
    const matchDecimals = (s) => {
        const r1 = /^[\-|\+]?\d+\.$/;
        const r2 = /^[\-|\+]?\d+\.\d+$/;
        const r3 = /^[\-|\+]?\.\d+$/;
        // const r = /^[\-|\+]?\d*\.\d*$/; // 小数点前后必须有得有一个数字，测试用例 '.'
        return [r1, r2, r3].some((r) => r.test(s));
    };
    const arr = s.toUpperCase().split('E');
    if (arr.length > 2) return false;
    if (arr.length === 1) return matchInteger(arr[0]) || matchDecimals(arr[0]);
    return (
        (matchInteger(arr[0]) || matchDecimals(arr[0])) && matchInteger(arr[1])
    );
};
// @lc code=end

// Accepted
// 1482/1482 cases passed (108 ms)
// Your runtime beats 87.07 % of javascript submissions
// Your memory usage beats 78.36 % of javascript submissions (40 MB)