/**
 * /*
 *
 * [69] x 的平方根
 *
 * @format
 * @lc app=leetcode.cn id=69 lang=javascript
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    const fun = (left, right) => {
        if (left + 1 === right) return left;
        const middle = Math.ceil((left + right) / 2);
        if (middle * middle > x) {
            return fun(left, middle);
        } else if (middle * middle === x) {
            return middle;
        } else {
            return fun(middle, right);
        }
    };
    let i = 1;
    while (i * i <= x) {
        i *= i === 1 ? 2 : i;
    }
    return fun(0, i);
};
// @lc code=end

// Accepted
// 1017/1017 cases passed (132 ms)
// Your runtime beats 15.06 % of javascript submissions
// Your memory usage beats 64.2 % of javascript submissions (39.2 MB)


// v1
// Accepted
// 1017/1017 cases passed (124 ms)
// Your runtime beats 20.39 % of javascript submissions
// Your memory usage beats 29.78 % of javascript submissions (39.4 MB)

// v2
// Accepted
// 1017/1017 cases passed (104 ms)
// Your runtime beats 54.51 % of javascript submissions
// Your memory usage beats 43.42 % of javascript submissions (39.3 MB)