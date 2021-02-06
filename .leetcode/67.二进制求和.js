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
    const vMap = [0, 1]; // 扩展到其他进展使用的对应的字母表示值
    const max = v[v.length - 1] + 1;
    let rest = 0;
    const maxLen = Math.max(a.length, b.length);
    let result = '';
    for (let i = 0; i < maxLen; i++) {
        const va = v[+a.charAt(a.length - 1 - i) || 0];
        const vb = v[+b.charAt(b.length - 1 - i) || 0];
        const value = rest + va + vb;
        rest = Math.floor(value / max);
        result = vMap[value % max] + result;
    }
    if (rest) {
        result = vMap[rest] + result;
    }
    return result;
};
// @lc code=end

// Accepted
// 294/294 cases passed (92 ms)
// Your runtime beats 68.71 % of javascript submissions
// Your memory usage beats 22.06 % of javascript submissions (40.2 MB)

// v1
// Accepted
// 294/294 cases passed (84 ms)
// Your runtime beats 92.05 % of javascript submissions
// Your memory usage beats 11.68 % of javascript submissions (40.6 MB)