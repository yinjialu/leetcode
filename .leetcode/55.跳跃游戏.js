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
    const target = nums.length - 1;
    let result = true;
    let index = 0;
    while (index < target) {
        const v = nums[index];
        if (v !== 0) {
            index += 1;
            continue;
        }
        // 判断是否能跳过 0 这个点，
        // 如果跳不过，直接 return false
        // 如果能跳过，找到下一个 0 的点
        let passZero = false;
        for (let i = index - 1; i >= 0; i--) {
            const v2 = nums[i];
            if (v2 > index - i) {
                passZero = true;
                break;
            }
        }
        if (passZero) {
            index += 1;
            continue;
        } else {
            result = false;
            break;
        }
    }
    return result;
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

// v2
// Accepted
// 75/75 cases passed (76 ms)
// Your runtime beats 96.7 % of javascript submissions
// Your memory usage beats 55.01 % of javascript submissions (38.7 MB)