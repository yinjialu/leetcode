/**
 * /*
 *
 * [75] 颜色分类
 *
 * @format
 * @lc app=leetcode.cn id=75 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    const map = {
        0: 0,
        1: 0,
        2: 0,
    };
    const getPosition = (v) => {
        let count = 0;
        while (v >= 0) {
            count += map[v];
            v--;
        }
        return count;
    };
    let i = 0;
    while (i < nums.length) {
        const v = nums[i];
        const position = getPosition(v);
        map[v]++;
        if (nums[position] !== nums[i]) {
            nums.splice(position, 0, nums.splice(i, 1)[0]);
        }
        i++;
    }
};
// @lc code=end

// Accepted
// 87/87 cases passed (96 ms)
// Your runtime beats 19.37 % of javascript submissions
// Your memory usage beats 23.73 % of javascript submissions (38.8 MB)

// v1
// Accepted
// 87/87 cases passed (88 ms)
// Your runtime beats 44.32 % of javascript submissions
// Your memory usage beats 75.41 % of javascript submissions (37.9 MB)