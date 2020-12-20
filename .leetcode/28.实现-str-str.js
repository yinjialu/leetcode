/**
 * /*
 *
 * [28] 实现 strStr()
 *
 * @format
 * @lc app=leetcode.cn id=28 lang=javascript
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const check = (j) => {
        if (haystack.length - j < needle.length) return
      for (let i = 1; i < needle.length; i++) {
        if (needle.charAt(i) !== haystack.charAt(j + i)) return false
      }
      return true
    }
    if (!needle) return 0
    for (let i = 0; i < haystack.length; i++) {
      if (haystack.charAt(i) === needle.charAt(0) && check(i)) {
        return i
      }
    }
    return -1
}
// @lc code=end

// Accepted
// 78/78 cases passed (64 ms)
// Your runtime beats 99.89 % of javascript submissions
// Your memory usage beats 91.21 % of javascript submissions (37.1 MB)

// v1
// Accepted
// 78/78 cases passed (5572 ms)
// Your runtime beats 5.03 % of javascript submissions
// Your memory usage beats 44.68 % of javascript submissions (38.6 MB)

// v2
// Accepted
// 78/78 cases passed (88 ms)
// Your runtime beats 54.16 % of javascript submissions
// Your memory usage beats 52.48 % of javascript submissions (38.2 MB)