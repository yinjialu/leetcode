/**
 * /*
 *
 * [31] 下一个排列
 *
 * @format
 * @lc app=leetcode.cn id=31 lang=javascript
 */

/**
  * 题干的意思是：找出这个数组排序出的所有数中，刚好比当前数大的那个数

比如当前 nums = [1,2,3]。这个数是123，找出1，2，3这3个数字排序可能的所有数，排序后，比123大的那个数 也就是132

如果当前 nums = [3,2,1]。这就是1，2，3所有排序中最大的那个数，那么就返回1，2，3排序后所有数中最小的那个，也就是1，2，3 -> [1,2,3]
  * 
  */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const swap = (i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  const getnearestLast = (i) => {
      // i 往后的值一定是降序的，因此从后向前遍历，找到比 num[i] 大的最小值
    for (let j = nums.length - 1; j >= i + 1; j--) {
      if (nums[j] > nums[i]) return j
    }
  }
  const reverse = (i) => {
    // i 往后的值一定是降序的
    let start = i + 1
    let end = nums.length - 1
    while (start < end) {
      swap(start, end)
      start++
      end--
    }
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      const lastIndex = getnearestLast(i)
      swap(i, lastIndex)
      reverse(i)
      return
    }
  }
  nums.reverse()
}
// @lc code=end

/**
 * 游标 i
 * i 之后比 num[i] 大的最小值 j 呼唤 i j
 * 对 i 之后的元素（降序）改为升序
 * 确保新值比原值大，然后又是和原值最接近的一个
 */

// Accepted
// 265/265 cases passed (96 ms)
// Your runtime beats 50.23 % of javascript submissions
// Your memory usage beats 82.74 % of javascript submissions (39.3 MB)
