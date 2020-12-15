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
  let n1 = l1
  let n2 = l2
  let head = null
  let last
  if (!n1 && !n2) return head
  if (!n1 && n2) return n2
  if (n1 && !n2) return n1
  do {
    if (n1.val < n2.val) {
      head = head || n1
      if (last) {
        last.next = n1
        last = n1
      } else {
        last = head
      }
      n1 = n1.next
    } else {
      head = head || n2
      if (last) {
        last.next = n2
        last = n2
      } else {
        last = head
      }
      n2 = n2.next
    }
  } while (n1 && n2)
  last.next = n1 ? n1 : n2
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