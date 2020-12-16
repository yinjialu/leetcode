/**
 * /*
 *
 * [23] 合并K个升序链表
 *
 * @format
 * @lc app=leetcode.cn id=23 lang=javascript
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const mergeL = (l1, j) => {
    if (j >= lists.length) return l1
    let l2 = lists[j]
    if (!l1 && !l2) return null
    if (!l1 && l2) return mergeL(l2, j + 1)
    if (l1 && !l2) return mergeL(l1, j + 1)
    const head = l1.val < l2.val ? l1 : l2
    let last
    while (l1 && l2) {
      if (l1.val < l2.val) {
        last && (last.next = l1)
        last = l1
        l1 = l1.next
      } else {
        last && (last.next = l2)
        last = l2
        l2 = l2.next
      }
    }
    last.next = l1 ? l1 : l2
    return mergeL(head, j + 1)
  }
  if (lists.length === 0) return null
  return mergeL(lists[0], 1)
}
// @lc code=end

// Accepted
// 133/133 cases passed (316 ms)
// Your runtime beats 19.97 % of javascript submissions
// Your memory usage beats 39.17 % of javascript submissions (43.1 MB)
