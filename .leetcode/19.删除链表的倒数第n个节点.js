/**
 * /*
 *
 * [19] 删除链表的倒数第N个节点
 *
 * @format
 * @lc app=leetcode.cn id=19 lang=javascript
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let conut = 0
  let current = head
  const map = {
    0: current,
  }
  while (current.next) {
    conut++
    current = current.next
    map[conut] = current
  }
  const index = conut + 1 - n
  if (index !== 0) {
    map[index - 1].next = map[index + 1] || null
    return head
  }
  return head.next
}
// @lc code=end

// Accepted
// 208/208 cases passed (76 ms)
// Your runtime beats 97.21 % of javascript submissions
// Your memory usage beats 59.63 % of javascript submissions (39.1 MB)
