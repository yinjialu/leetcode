/**
 * /*
 *
 * [63] 不同路径 II
 *
 * @format
 * @lc app=leetcode.cn id=63 lang=javascript
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const helper = (m, n, row, col, memo) => {
        if (obstacleGrid[m - 1][n - 1] === 1) return 0;
        if (row === m && col === n) return 1;
        if (row > m || col > n) return 0;
        if (obstacleGrid[row - 1][col - 1] === 1) return 0;

        if (memo[row][col] === -1) {
            const pathsRight = helper(m, n, row, col + 1, memo);
            const pathsDown = helper(m, n, row + 1, col, memo);

            memo[row][col] = pathsRight + pathsDown;
        }

        return memo[row][col];
    };
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const memo = new Array(m + 1).fill(0);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(n + 1).fill(-1);
    }
    return helper(m, n, 1, 1, memo);
};
// @lc code=end

// Accepted
// 41/41 cases passed (128 ms)
// Your runtime beats 5.12 % of javascript submissions
// Your memory usage beats 91.55 % of javascript submissions (38.1 MB)
