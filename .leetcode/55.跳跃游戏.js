/**
 * /*
 *
 * [55] 跳跃游戏
 *
 * @format
 * @lc app=leetcode.cn id=55 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    const map = {};
    const target = nums.length - 1;
    const check = (i) => {
        if (map[i] !== undefined) return map[i];
        if (i === target) {
            map[i] = 0;
            return map[i];
        }
        const v = nums[i];
        if (v === 0) {
            map[i] = false;
            return map[i];
        }
        if (target - i <= v) {
            map[i] = 1;
            return map[i];
        }
        let step;
        for (let j = v; j >= 1; j--) {
            if (nums[i + j] + (i + j) <= i + v) continue;
            const nextStep = check(i + j);
            if (nextStep !== false) {
                step = 1 + nextStep;
                break;
            }
        }
        map[i] = step || false;
        return map[i];
    };
    return check(0) !== false;
};
// @lc code=end

// Accepted
// 75/75 cases passed (136 ms)
// Your runtime beats 18.38 % of javascript submissions
// Your memory usage beats 5.02 % of javascript submissions (42.8 MB)

// v1
// Accepted
// 75/75 cases passed (100 ms)
// Your runtime beats 29.53 % of javascript submissions
// Your memory usage beats 5.02 % of javascript submissions (43.1 MB)