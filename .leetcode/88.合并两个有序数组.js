/**
 * /*
 *
 * [88] 合并两个有序数组
 *
 * @format
 * @lc app=leetcode.cn id=88 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let n1 = 0;
    let n2 = 0;
    while (n2 < n && n1 < m) {
        if (nums2[n2] <= nums1[n1]) {
            nums1.splice(n1, 0, nums2[n2]);
            nums1.pop();
            n1++;
            n2++;
            m++;
        } else {
            n1++;
        }
    }
    console.log('n1', n1, 'n2', n2);
    console.log('nums1', nums1, 'nums2', nums2);
    while (n2 < n) {
        nums1.splice(n1, 0, nums2[n2]);
        nums1.pop();
        n2++;
        n1++;
    }
};
// @lc code=end
