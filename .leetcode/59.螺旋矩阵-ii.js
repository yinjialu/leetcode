/**
 * /*
 *
 * [59] 螺旋矩阵 II
 *
 * @format
 * @lc app=leetcode.cn id=59 lang=javascript
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push([]);
    }
    const maxLoop = Math.ceil(n / 2);
    let current = 1;
    const fun = (loop) => {
        const loopTop = () => {
            const i = loop;
            for (let j = loop; j < n - loop; j++) {
                result[i][j] = current++;
            }
        };
        const loopRight = () => {
            const j = n - 1 - loop;
            for (let i = loop + 1; i < n - loop; i++) {
                result[i][j] = current++;
            }
        };
        const loopBottom = () => {
            const i = n - 1 - loop;
            if (i <= loop) return;
            for (let j = n - 2 - loop; j >= loop; j--) {
                result[i][j] = current++;
            }
        };
        const loopLeft = () => {
            const j = loop;
            if (j >= n - 1 - loop) return;
            for (let i = n - 2 - loop; i >= loop + 1; i--) {
                result[i][j] = current++;
            }
        };
        loopTop();
        loopRight();
        loopBottom();
        loopLeft();
    };
    for (let i = 0; i <= maxLoop; i++) {
        fun(i);
    }
    return result;
};
// @lc code=end

// Accepted
// 20/20 cases passed (72 ms)
// Your runtime beats 97.56 % of javascript submissions
// Your memory usage beats 47.33 % of javascript submissions (37.9 MB)
