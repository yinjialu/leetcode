/**
 * /*
 *
 * [61] 旋转链表
 *
 * @format
 * @lc app=leetcode.cn id=61 lang=javascript
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
var rotateRight = function (head, k) {
    let len = 0;
    const map = {};
    while (head) {
        len += 1;
        map[len] = head;
        head = head.next;
    }
    if (len <= 0) return head;
    k = k % len;
    if (k === 0) return map[1];
    const reverseIndex = len + 1 - k;
    const forwardIndex = reverseIndex - 1;
    map[forwardIndex].next = null;
    map[len].next = map[1];
    return map[reverseIndex];
};
// @lc code=end

// Accepted
// 231/231 cases passed (100 ms)
// Your runtime beats 48.75 % of javascript submissions
// Your memory usage beats 20.2 % of javascript submissions (39.7 MB)
