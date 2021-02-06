/**
 * /*
 *
 * [66] 加一
 *
 * @format
 * @lc app=leetcode.cn id=66 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const len = digits.length;
    let index = len - 1;
    digits[index] += 1;
    let current = digits[index];
    while (current >= 10) {
        digits[index] = current % 10;
        --index;
        if (index >= 0) {
            digits[index] += Math.floor(current / 10);
            current = digits[index];
        } else {
            digits.unshift(Math.floor(current / 10));
            break;
        }
    }
    return digits;
};
// @lc code=end

// Accepted
// 114/114 cases passed (64 ms)
// Your runtime beats 99.91 % of javascript submissions
// Your memory usage beats 37.08 % of javascript submissions (38 MB)
