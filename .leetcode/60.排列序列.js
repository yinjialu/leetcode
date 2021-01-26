/**
 * /*
 *
 * [60] 排列序列
 *
 * @format
 * @lc app=leetcode.cn id=60 lang=javascript
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    const arr = [];
    const map = {};
    let val;
    for (let i = 1; i <= n; i++) {
        val = val ? val * i : 1;
        arr.push(i);
        map[i] = val;
    }
    let result = '';
    for (let j = n; j > 0; j--) {
        let index = Math.floor(k / map[j - 1]);
        let rest = k % map[j - 1];
        result += arr.splice(rest === 0 ? index - 1 : index, 1);
        k = k - index * map[j - 1];
    }
    return result;
};
// @lc code=end

// Accepted
// 200/200 cases passed (120 ms)
// Your runtime beats 50.88 % of javascript submissions
// Your memory usage beats 44.12 % of javascript submissions (40.1 MB)

// v1
// Accepted
// 200/200 cases passed (88 ms)
// Your runtime beats 77.94 % of javascript submissions
// Your memory usage beats 53.24 % of javascript submissions (39.3 MB)
