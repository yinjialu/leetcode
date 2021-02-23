/**
 * /*
 *
 * [74] 搜索二维矩阵
 *
 * @format
 * @lc app=leetcode.cn id=74 lang=javascript
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const fun1 = (left, right) => {
        if (target < matrix[left][0]) return false;
        if (target >= matrix[right][0]) return right;
        if (left + 1 === right) return left;
        // matrix[left][0] <= target < matrix[right][0]
        const middle = Math.floor((left + right) / 2);
        if (target >= matrix[middle][0]) return fun1(middle, right);
        // target < matrix[middle][0]
        return fun1(left, middle);
    };
    const row = fun1(0, matrix.length - 1);
    if (row === false) return false;
    const fun2 = (left, right) => {
        const leftV = matrix[row][left];
        const rightV = matrix[row][right];
        if (leftV === target || rightV === target) return true;
        const middle = Math.floor((left + right) / 2);
        const middleV = matrix[row][middle];
        if (middleV === target) return true;
        if (left + 1 === right || left === right) return false;
        if (middleV < target) return fun2(middle, right);
        return fun2(left, middle);
    };
    return fun2(0, matrix[row].length - 1);
};
// @lc code=end

// Accepted
// 133/133 cases passed (80 ms)
// Your runtime beats 85.34 % of javascript submissions
// Your memory usage beats 26.05 % of javascript submissions (39.1 MB)
