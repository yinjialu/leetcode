/**
 * /*
 *
 * [73] 矩阵置零
 *
 * @format
 * @lc app=leetcode.cn id=73 lang=javascript
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const zeroArr = [];
    for (let i = 0; i < matrix.length; i++) {
        const arr = matrix[i];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === 0) {
                zeroArr.push([i, j]);
            }
        }
    }
    for (let m = 0; m < zeroArr.length; m++) {
        const [i, j] = zeroArr[m];
        for (let n = 0; n < matrix.length; n++) {
            matrix[n][j] = 0;
        }
        for (let p = 0; p < matrix[i].length; p++) {
            matrix[i][p] = 0;
        }
    }
};
// @lc code=end

// Accepted
// 164/164 cases passed (96 ms)
// Your runtime beats 97.77 % of javascript submissions
// Your memory usage beats 20.41 % of javascript submissions (40.7 MB)