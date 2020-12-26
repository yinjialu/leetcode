/**
 * /*
 *
 * [33] 搜索旋转排序数组
 *
 * @format
 * @lc app=leetcode.cn id=33 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // 纯递增数组使用
    const fun1 = (left, right) => {
        if (nums[left] > target) return;
        if (nums[right] < target) return;
        const middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) return middle
        if (nums[left] === target) return left;
        if (nums[right] === target) return right;
        if (left === middle) return
        if (nums[middle] > target) return fun1(left, middle);
        return fun1(middle, right);
    }
    const fun2 = (left, right) => {
        const middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) return middle
        if (nums[left] === target) return left;
        if (nums[right] === target) return right;
        if (left === middle) return
        if (nums[left] < nums[middle]) return fun1(left, middle) || fun2(middle, right);
        return fun1(middle, right) || fun2(left, middle);
    }
    const result = fun2(0, nums.length - 1);
    return result === undefined ? -1 : result
}
// @lc code=end

// Accepted
// 195/195 cases passed (136 ms)
// Your runtime beats 7.48 % of javascript submissions
// Your memory usage beats 53.68 % of javascript submissions (38.9 MB)

//v1
// Accepted
// 195/195 cases passed (84 ms)
// Your runtime beats 67.96 % of javascript submissions
// Your memory usage beats 75.17 % of javascript submissions (38.7 MB)