/**
 * /*
 *
 * [48] 旋转图像
 *
 * @format
 * @lc app=leetcode.cn id=48 lang=javascript
 */

// [2, 0] => [0, 0]
// [1, 0] => [0, 1]
// [0, 0] => [0, 2]

// [2, 1] => [1, 0]
// [1, 1] => [1, 1]
// [0, 1] => [1, 2]

// [2, 2] => [2, 0]
// [1, 2] => [2, 1]
// [0, 2] => [2, 2]

// [2 ,1] => [1, 1]

// n[i][j] = n[(len - 1) - j][i]

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function (matrix) {
  const n = matrix.length
  let i = 0
  let copyn = n
  while (copyn >= 1) {
    for (let j = i; j - i <= copyn - 2; j++) {
      [
        matrix[i][j],
        matrix[n - 1 - j][i],
        matrix[n - 1 - i][n - 1 - j],
        matrix[j][n - 1 - i],
      ] = [
        matrix[n - 1 - j][i],
        matrix[n - 1 - i][n - 1 - j],
        matrix[j][n - 1 - i],
        matrix[i][j],
      ]
    }
    i++
    copyn -= 2
  }
}
// @lc code=end

// Accepted
// 21/21 cases passed (72 ms)
// Your runtime beats 96.26 % of javascript submissions
// Your memory usage beats 22.74 % of javascript submissions (38.9 MB)
