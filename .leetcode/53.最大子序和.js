/**
 * /*
 *
 * [53] 最大子序和
 *
 * @format
 * @lc app=leetcode.cn id=53 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum = 0;
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        const v = nums[i];
        if (v <= 0) {
            if (max < v) {
                max = v;
            }
            if (sum + v <= 0) {
                sum = 0;
                continue;
            }
            sum += v;
        } else {
            sum += v;
        }
        if (sum > max) {
            max = sum;
        }
    }
    return max;
};
// @lc code=end

// Accepted
// 203/203 cases passed (100 ms)
// Your runtime beats 26.87 % of javascript submissions
// Your memory usage beats 7.02 % of javascript submissions (40 MB)
