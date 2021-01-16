/**
 * /*
 *
 * [50] Pow(x, n)
 *
 * @format
 * @lc app=leetcode.cn id=50 lang=javascript
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1;
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    let result = x;
    const arr = [x];
    let baseCount = 1;
    let i = 1;
    while (i < n) {
        if (baseCount <= n - i) {
            result = result * arr[arr.length - 1];
            i = i + baseCount;
            arr.push(result);
            baseCount = baseCount * 2;
        } else {
            while (baseCount > n - i) {
                arr.pop();
                baseCount = baseCount / 2;
            }
            result = result * arr[arr.length - 1];
            i = i + baseCount;
        }
    }
    return result;
};
// @lc code=end

// Accepted
// 304/304 cases passed (84 ms)
// Your runtime beats 77.53 % of javascript submissions
// Your memory usage beats 25.61 % of javascript submissions (39.1 MB)
