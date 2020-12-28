/**
 * /*
 *
 * [36] 有效的数独
 *
 * @format
 * @lc app=leetcode.cn id=36 lang=javascript
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const colMap = []
  const rowMap = []
  const groupMap = []
  const getGroupIndex = (i, j) => {
    return Math.floor(i / 3) * 3 + Math.floor(j / 3)
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (!colMap[i]) {
        colMap[i] = {}
      }
      if (!rowMap[j]) {
        rowMap[j] = {}
      }
      const groupMapIndex = getGroupIndex(i, j)
      if (!groupMap[groupMapIndex]) {
        groupMap[groupMapIndex] = {}
      }
      const v = board[i][j]
      if (v === '.') continue
      if (colMap[i][v]) return false
      if (rowMap[j][v]) return false
      if (groupMap[groupMapIndex][v]) return false
      colMap[i][v] = `${i}${j}`
      rowMap[j][v] = `${i}${j}`
      groupMap[groupMapIndex][v] = `${i}${j}`
    }
  }
  return true
}
// @lc code=end

// Accepted
// 507/507 cases passed (104 ms)
// Your runtime beats 74.97 % of javascript submissions
// Your memory usage beats 50.66 % of javascript submissions (41.5 MB)
