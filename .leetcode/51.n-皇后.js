/**
 * /*
 *
 * [51] N 皇后
 *
 * @format
 * @lc app=leetcode.cn id=51 lang=javascript
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const result = [];
    const arr = new Array(n).fill(new Array(n));
    const map = {};
    const getCloseDots = (i, j) => {
        if (map[`${i}${j}`]) return map[`${i}${j}`];
        const getRightBottom = (i, j) => {
            const arr = [];
            i++;
            j++;
            while (i < n && j < n) {
                arr.push([i, j]);
                i++;
                j++;
            }
            return arr;
        };
        const getRightTop = (i, j) => {
            const arr = [];
            i--;
            j++;
            while (i >= 0 && j < n) {
                arr.push([i, j]);
                i--;
                j++;
            }
            return arr;
        };
        const getLeftBottom = (i, j) => {
            const arr = [];
            i++;
            j--;
            while (i < n && j >= 0) {
                arr.push([i, j]);
                i++;
                j--;
            }
            return arr;
        };
        const getLeftTop = (i, j) => {
            const arr = [];
            i--;
            j--;
            while (i >= 0 && j >= 0) {
                arr.push([i, j]);
                i--;
                j--;
            }
            return arr;
        };
        let arr = [];
        for (let a = 0; a < n; a++) {
            if (a === j) continue;
            arr.push([i, a]);
        }
        for (let b = 0; b < n; b++) {
            if (b === i) continue;
            arr.push([b, j]);
        }
        arr = arr.concat(
            getRightBottom(i, j),
            getRightTop(i, j),
            getLeftBottom(i, j),
            getLeftTop(i, j)
        );
        map[`${i}${j}`] = arr;
        return arr;
    };
    const forword = (arr, i, j) => {
        arr[i][j] = 'Q';
        const closeDots = getCloseDots(i, j);
        closeDots.forEach(([i, j]) => {
            arr[i][j] = '.';
        });
    };
    const back = (arr, i, j) => {
        arr[i][j] = undefined;
        const closeDots = getCloseDots(i, j);
        closeDots.forEach(([i, j]) => {
            a[i][j] = undefined;
        });
    };
    const getEmptyPoint = (arr, line) => {
        let r = [];
        for (let j = 0; j < arr[line].length; j++) {
            if (!arr[line][j]) {
                r.push([line, j]);
            }
        }
        return r;
    };
    const fun = (arr, line) => {
        if (line === n) {
            result.push(arr.map((a) => a.join('')));
            return;
        }
        const emptyPoints = getEmptyPoint(arr, line);
        if (emptyPoints.length === 0) return;
        emptyPoints.forEach(([i, j]) => {
            const copyArr = JSON.parse(JSON.stringify(arr));
            forword(copyArr, i, j);
            fun(copyArr, line + 1);
        });
    };
    fun(arr, 0);
    return result;
};
// @lc code=end

// Accepted
// 9/9 cases passed (192 ms)
// Your runtime beats 5.04 % of javascript submissions
// Your memory usage beats 5.05 % of javascript submissions (46.4 MB)
