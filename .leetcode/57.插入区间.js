/**
 * /*
 *
 * [57] 插入区间
 *
 * @format
 * @lc app=leetcode.cn id=57 lang=javascript
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    const fun = (arr1, arr2) => {
        const [left1, right1] = arr1;
        const [left2, right2] = arr2;
        if (right1 < left2)
            return {
                arr1,
                arr2,
            };
        if (right2 < left1)
            return {
                goon: true, // 继续匹配下一个
                arr1,
                arr2,
            };
        return {
            goon: true, // 继续匹配下一个
            arr2: [Math.min(left1, left2), Math.max(right1, right2)],
        };
    };
    let index = intervals.length - 1;
    let arr1;
    let arr2 = newInterval;
    let targetIndex = index + 1; // 目标插入位置
    for (let j = index; j >= 0; j--) {
        arr1 = intervals[j];
        const next = fun(arr1, arr2);
        arr1 = next.arr1;
        arr2 = next.arr2;
        const goon = next.goon;
        if (!goon) break;
        if (!arr1) {
            intervals.splice(j, 1);
        }
        targetIndex--;
    }
    intervals.splice(targetIndex, 0, arr2);
    return intervals;
};
// @lc code=end

// Accepted
// 156/156 cases passed (100 ms)
// Your runtime beats 51.24 % of javascript submissions
// Your memory usage beats 7.49 % of javascript submissions (41.7 MB)