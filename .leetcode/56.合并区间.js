/**
 * /*
 *
 * [56] 合并区间
 *
 * @format
 * @lc app=leetcode.cn id=56 lang=javascript
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const result = [intervals[0]];
    const fun = (arr1, arr2) => {
        const [left1, right1] = arr1;
        const [left2, right2] = arr2;
        if (right1 < left2 || right2 < left1) return [arr1, arr2];
        return [undefined, [Math.min(left1, left2), Math.max(right1, right2)]];
    };
    for (let i = 1; i < intervals.length; i++) {
        let arr2 = intervals[i];
        let index = result.length - 1;
        let arr1;
        for (let j = index; j >= 0; j--) {
            arr1 = result[j];
            [arr1, arr2] = fun(arr1, arr2);
            if (!arr1) {
                result.splice(j, 1);
            }
        }
        result.push(arr2);
    }
    return result;
};
// @lc code=end

// Accepted
// 168/168 cases passed (108 ms)
// Your runtime beats 27.75 % of javascript submissions
// Your memory usage beats 6.54 % of javascript submissions (44 MB)
