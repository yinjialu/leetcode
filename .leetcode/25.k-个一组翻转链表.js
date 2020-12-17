/**
 * /*
 *
 * [25] K 个一组翻转链表
 *
 * @format
 * @lc app=leetcode.cn id=25 lang=javascript
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const first = new ListNode(0)
  let last = first
  while (head) {
    let arr = []
    for (let i = 0; i < k; i++) {
      if (head) {
        arr.push(head)
        head = head.next
      }
    }
    if (arr.length === k) {
      for (let j = k - 1; j >= 0; j--) {
        last.next = arr[j]
        last = last.next
      }
      last.next = null
    } else {
      last.next = arr[0] || null
    }
  }
  return first.next
}
// @lc code=end

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

function arrayToListNodes(arr) {
  const first = new ListNode(0)
  let last = first
  for (let i = 0; i < arr.length; i++) {
    const node = new ListNode(arr[i])
    last.next = node
    last = node
  }
  return first.next
}

// Accepted
// 62/62 cases passed (88 ms)
// Your runtime beats 99.6 % of javascript submissions
// Your memory usage beats 41.99 % of javascript submissions (41.3 MB)
