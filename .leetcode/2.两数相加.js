/**
 * /*
 *
 * [2] 两数相加
 *
 * @format
 * @lc app=leetcode.cn id=2 lang=javascript
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let add = 0 // 进位
  let result = null
  let head = result
  while (l1 || l2 || add) {
    const val1 = (l1 && l1.val) || 0
    const val2 = (l2 && l2.val) || 0
    const total = val1 + val2 + add
    const val = total % 10
    add = Math.floor(total / 10)
    if (!result) {
      result = new ListNode(val)
      head = result
    } else {
      head.next = new ListNode(val)
      head = head.next
    }
    l1 = l1 && l1.next
    l2 = l2 && l2.next
  }
  return result
}
// @lc code=end
