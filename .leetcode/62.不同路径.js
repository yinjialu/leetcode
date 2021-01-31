/**
 * /*
 *
 * [62] 不同路径
 *
 * @format
 * @lc app=leetcode.cn id=62 lang=javascript
 */

// memo[row][col] 比 memo[`${row}_${col}`] 计算效率更高

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const helper = (m, n, row, col, memo) => {
        if (row === m && col === n) return 1;
        if (row > m || col > n) return 0;

        if (memo[row][col] === -1) {
            // if (memo[`${row}_${col}`] === undefined) {
            const pathsRight = helper(m, n, row, col + 1, memo);
            const pathsDown = helper(m, n, row + 1, col, memo);

            memo[row][col] = pathsRight + pathsDown;
        }

        return memo[row][col];
    };
    const memo = new Array(m + 1).fill(0);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(n + 1).fill(-1);
    }
    // const memo = {};
    return helper(m, n, 1, 1, memo);
};;
// @lc code=end

// Accepted
// 62/62 cases passed (92 ms)
// Your runtime beats 26.72 % of javascript submissions
// Your memory usage beats 5.05 % of javascript submissions (39.6 MB)

// Accepted
// 62/62 cases passed (80 ms)
// Your runtime beats 77.66 % of javascript submissions
// Your memory usage beats 29.44 % of javascript submissions (38.1 MB)
