/**
 * /*
 *
 * [21] 合并两个有序链表
 *
 * @format
 * @lc app=leetcode.cn id=21 lang=javascript
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) return null
  if (!l1 && l2) return l2
  if (l1 && !l2) return l1
  const head = l1.val < l2.val ? l1 : l2
  let last
  do {
    if (l1.val < l2.val) {
      last && (last.next = l1)
      last = l1
      l1 = l1.next
    } else {
      last && (last.next = l2)
      last = l2
      l2 = l2.next
    }
  } while (l1 && l2)
  last.next = l1 ? l1 : l2
  return head
}
// @lc code=end

// Accepted
// 208/208 cases passed (104 ms)
// Your runtime beats 24.46 % of javascript submissions
// Your memory usage beats 41.06 % of javascript submissions (39.4 MB)

// v1
// Accepted
// 208/208 cases passed (96 ms)
// Your runtime beats 56.84 % of javascript submissions
// Your memory usage beats 43.4 % of javascript submissions (39.4 MB)

// v2
// Accepted
// 208/208 cases passed (88 ms)
// Your runtime beats 88.27 % of javascript submissions
// Your memory usage beats 11.68 % of javascript submissions (39.7 MB)

// v3
// Accepted
// 208/208 cases passed (80 ms)
// Your runtime beats 98.7 % of javascript submissions
// Your memory usage beats 10.08 % of javascript submissions (39.7 MB)