/**
 * /*
 *
 * [37] 解数独
 *
 * @format
 * @lc app=leetcode.cn id=37 lang=javascript
 */

/**
 * 探路算法，支持节点存档和回退
 */

/**
 * 【为分支拷贝 board】
 * 1，维护 board colMap rowMap groupMap
 * 2，维护值为 . 的位置数组 emptyIndexs ，并通过 colMap rowMap groupMap 计算每个位置可用的值
 *     2.1 emptyIndexs.length === 0 【打断递归】 直接返回 board 作为最后的结果
 *     2.1，一个位置上无可用值，当前分支废弃，【打断递归】
 *     2.2，一个位置上只有一个可用值
 *          更新 board
 *          更新 emptyIndexs
 *          更新 colMap rowMap groupMap
 *          结合新 emptyIndexs colMap rowMap groupMap 开始重复步骤2
 *     2.3，所有位置上都存在多个可用值
 *          找到可用值数目最少的位置 [i, j] => [a, b]
 *          【分叉试验】深拷贝 board colMap rowMap groupMap emptyIndexs
 *           a，board[i][j] = a
 *               执行 2.2
 *           b，board[i][j] = b
 *               执行 2.2
 */

/**
 * 【寻路算法，之前前进后退】
 * 如何最快找到可用值为0的位置
 * 如何最快找到可用值数目最少的位置
 * 设计前进后退机制
 * 先按照分支前进，判断阻塞的时候后退到分叉的节点，选下一个分支继续前进
 */
// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var solveSudoku = function (board) {
//   const groupIndexMap = {}
  const getGroupIndex = (i, j) => {
    // if (groupIndexMap[`${i}${j}`]) return groupIndexMap[`${i}${j}`]
    // groupIndexMap[`${i}${j}`] = Math.floor(i / 3) * 3 + Math.floor(j / 3)
    return Math.floor(i / 3) * 3 + Math.floor(j / 3)
  }

  const updateMap = (i, j, v) => {
    const groupMapIndex = getGroupIndex(i, j)
    colMap[i][v] = `${i}${j}`
    rowMap[j][v] = `${i}${j}`
    groupMap[groupMapIndex][v] = `${i}${j}`
  }

  const backwardUpdateMap = (i, j, v) => {
    const groupMapIndex = getGroupIndex(i, j)
    colMap[i][v] = undefined
    rowMap[j][v] = undefined
    groupMap[groupMapIndex][v] = undefined
  }
  const stock = [] // 历史记录堆栈信息
  const colMap = []
  const rowMap = []
  const groupMap = []
  const initMap = () => {
    for (let i = 0; i < board.length; i++) {
      colMap[i] = {}
      rowMap[i] = {}
      groupMap[i] = {}
    }
  }
  initMap()

  const emptyIndexs = []
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const v = board[i][j]
      if (v === '.') {
        emptyIndexs.push([i, j])
        continue
      }
      updateMap(i, j, v)
    }
  }

  const CheckValuesForIJ = (i, j) => {
    const list = ['1', '2', '3', '4', '5', '6', '7', '8', '9'].filter(
      (v) => !colMap[i][v] && !rowMap[j][v] && !groupMap[getGroupIndex(i, j)][v]
    )
    return list
  }

  // 找到可用值数目最少的 [i, j]
  const findIJInemptyIndexs = () => {
    let minLen = 10
    let minLenArr = []
    let minLenIndex = 0
    for (let index = 0; index < emptyIndexs.length; index++) {
      const [i, j] = emptyIndexs[index]
      const list = CheckValuesForIJ(i, j)
      if (list.length === 0) return [new Error('剪枝')] // 当前分支异常，剪枝
      if (list.length < minLen) {
        minLen = list.length
        minLenArr = list
        minLenIndex = index
      }
    }
    const [i, j] = emptyIndexs[minLenIndex]
    return [null, i, j, minLenArr, minLenIndex]
  }

  const backwardUpdate = (i, j, v, index) => {
    board[i][j] = '.';
    emptyIndexs.splice(index, 0, [i, j]);
    backwardUpdateMap(i, j, v)
  }

  const forwardUpdate = (i, j, v, index) => {
    stock.push([i, j, v, index])
    board[i][j] = v
    emptyIndexs.splice(index, 1)
    updateMap(i, j, v)
  }
  const update = (loop = 1) => {
    if (emptyIndexs.length === 0) return board
    const [err, i, j, list, index] = findIJInemptyIndexs()
    if (err) return false // 剪枝
    if (list.length === 1) {
      forwardUpdate(i, j, list[0], index)
      return update(loop + 1)
    } else {
      for (let a = 0; a < list.length; a++) {
        const startIndex = stock.length
        // 当执行几次回退后，这里的 index 已经不准了
        forwardUpdate(i, j, list[a], index)
        const res = update(loop + 1)
        if (!res) {
          // 需要回退 board emptyIndexs colMap rowMap groupMap
          while (startIndex < stock.length) {
            const [i, j, v, index] = stock.pop()
            backwardUpdate(i, j, v, index)
          }
          continue
        }
        if (res) return res
      }
    }
  }
  return update()
}
// @lc code=end
// var a = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
// var b = [[".",".","9","7","4","8",".",".","."],["7",".",".",".",".",".",".",".","."],[".","2",".","1",".","9",".",".","."],[".",".","7",".",".",".","2","4","."],[".","6","4",".","1",".","5","9","."],[".","9","8",".",".",".","3",".","."],[".",".",".","8",".","3",".","2","."],[".",".",".",".",".",".",".",".","6"],[".",".",".","2","7","5","9",".","."]];

// Accepted
// 6/6 cases passed (248 ms)
// Your runtime beats 9.6 % of javascript submissions
// Your memory usage beats 11.16 % of javascript submissions (46.5 MB)

// v1
// Accepted
// 6/6 cases passed (232 ms)
// Your runtime beats 11.38 % of javascript submissions
// Your memory usage beats 11.16 % of javascript submissions (47.1 MB)

// v2
// Accepted
// 6/6 cases passed (152 ms)
// Your runtime beats 30.8 % of javascript submissions
// Your memory usage beats 21.64 % of javascript submissions (44.4 MB)

// v3
// Accepted
// 6/6 cases passed (104 ms)
// Your runtime beats 89.51 % of javascript submissions
// Your memory usage beats 44.42 % of javascript submissions (42.9 MB)

// v4
// Accepted
// 6/6 cases passed (112 ms)
// Your runtime beats 83.93 % of javascript submissions
// Your memory usage beats 43.96 % of javascript submissions (43 MB)