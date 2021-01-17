/**
 * /*
 *
 * [51] N 皇后
 *
 * @format
 * @lc app=leetcode.cn id=51 lang=javascript
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const result = [];
    const checkUseFulPoint = (res, line) => {
        const arr1 = [];
        for (let p = 0; p < n; p++) {
            if (res.some(([i, j]) => j === p)) continue;
            if (res.some(([i, j]) => Math.abs(line - i) === Math.abs(p - j)))
                continue;
            arr1.push([line, p]);
        }
        return arr1;
    };
    const fun2 = (res, line) => {
        if (line === n) {
            result.push(res);
            return;
        }
        const useFullPoins = checkUseFulPoint(res, line);
        if (useFullPoins.length === 0) return;
        useFullPoins.forEach(([i, j]) => {
            fun2(res.concat([[i, j]]), line + 1);
        });
    };
    fun2([], 0);
    const data = [];
    result.forEach((r) => {
        const arr = [];
        r.forEach(([i, j]) => {
            const arr1 = new Array(n).fill('.');
            arr1[j] = 'Q';
            arr.push(arr1.join(''));
        });
        data.push(arr);
    });
    return data;
};
// @lc code=end

// Accepted
// 9/9 cases passed (192 ms)
// Your runtime beats 5.04 % of javascript submissions
// Your memory usage beats 5.05 % of javascript submissions (46.4 MB)

// v1
// Accepted
// 9/9 cases passed (140 ms)
// Your runtime beats 9.99 % of javascript submissions
// Your memory usage beats 5.05 % of javascript submissions (45.6 MB)