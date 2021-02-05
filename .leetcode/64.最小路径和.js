/**
 * /*
 *
 * [64] 最小路径和
 *
 * @format
 * @lc app=leetcode.cn id=64 lang=javascript
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    let min;
    let sum = 0;

    for (let j = 1; j < n; j++) {
        grid[0][j] += grid[0][j - 1];
    }

    for (let i = 1; i < m; i++) {
        grid[i][0] += grid[i - 1][0];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
    }
    return grid[m - 1][n - 1];
};
// @lc code=end

// Accepted
// 61/61 cases passed (84 ms)
// Your runtime beats 86.52 % of javascript submissions
// Your memory usage beats 65.31 % of javascript submissions (39.7 MB)
