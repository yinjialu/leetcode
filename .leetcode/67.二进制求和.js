/**
 * /*
 *
 * [67] 二进制求和
 *
 * @format
 * @lc app=leetcode.cn id=67 lang=javascript
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const v = [0, 1]; // 二进制，可以扩展其他进制
    const max = v[v.length - 1] + 1;
    let rest = 0;
    const maxLen = Math.max(a.length, b.length);
    let result = '';
    for (let i = 0; i < maxLen; i++) {
        const va = +a.charAt(a.length - 1 - i) || 0;
        const vb = +b.charAt(b.length - 1 - i) || 0;
        const v = rest + va + vb;
        rest = Math.floor(v / max);
        result = (v % max) + result;
    }
    if (rest) {
        result = rest + result;
    }
    return result;
};
// @lc code=end

// Accepted
// 294/294 cases passed (92 ms)
// Your runtime beats 68.71 % of javascript submissions
// Your memory usage beats 22.06 % of javascript submissions (40.2 MB)
