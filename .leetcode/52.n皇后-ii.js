/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
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
    return result.length;
};
// @lc code=end

