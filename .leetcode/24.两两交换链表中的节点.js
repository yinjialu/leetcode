/**
 * /*
 *
 * [24] 两两交换链表中的节点
 *
 * @format
 * @lc app=leetcode.cn id=24 lang=javascript
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let first = new ListNode(0)
  let last = first
  while (head && head.next) {
    const next1 = head.next
    last.next = next1
    const next2 = next1.next
    next1.next = head
    last = head
    head = next2
  }
  last.next = head
  return first.next
}
// @lc code=end

// Accepted
// 55/55 cases passed (68 ms)
// Your runtime beats 98.84 % of javascript submissions
// Your memory usage beats 15.42 % of javascript submissions (38.5 MB)
