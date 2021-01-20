/**
 * /*
 *
 * [54] 螺旋矩阵
 *
 * @format
 * @lc app=leetcode.cn id=54 lang=javascript
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const maxloop = Math.ceil(Math.min(m, n) / 2);
    const fun = (loop) => {
        const getTop = () => {
            const topArr = [];
            for (let i = loop; i <= n - 1 - loop; i++) {
                topArr.push(matrix[loop][i]);
            }
            return topArr;
        };
        const getRight = () => {
            const rightArr = [];
            for (let j = loop + 1; j <= m - 1 - loop; j++) {
                rightArr.push(matrix[j][n - 1 - loop]);
            }
            return rightArr;
        };
        const getButtom = () => {
            const buttomArr = [];
            if (m - 1 - loop <= loop) return buttomArr;
            for (let i = n - 2 - loop; i >= loop; i--) {
                buttomArr.push(matrix[m - 1 - loop][i]);
            }
            return buttomArr;
        };
        const getLeft = () => {
            const leftArr = [];
            if (loop >= n - 1 - loop) return leftArr;
            for (let j = m - 2 - loop; j >= loop + 1; j--) {
                leftArr.push(matrix[j][loop]);
            }
            return leftArr;
        };
        return [].concat(getTop(), getRight(), getButtom(), getLeft());
    };
    let arr = [];
    for (let i = 0; i < maxloop; i++) {
        arr = arr.concat(fun(i));
    }
    return arr;
};
// @lc code=end

// Accepted
// 22/22 cases passed (80 ms)
// Your runtime beats 70.83 % of javascript submissions
// Your memory usage beats 79.35 % of javascript submissions (37.5 MB)
