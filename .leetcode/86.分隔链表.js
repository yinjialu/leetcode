/**
 * /*
 *
 * [86] 分隔链表
 *
 * @format
 * @lc app=leetcode.cn id=86 lang=javascript
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    var leftHead = new ListNode();
    var leftCurrent = leftHead;
    var leftTail = leftHead;
    var rightHead = new ListNode();
    var rightCurrent = rightHead;
    var rightTail = rightHead;
    while (head) {
        if (head.val < x) {
            leftCurrent.next = head;
            leftCurrent = head;
            leftTail = leftCurrent;
        } else {
            rightCurrent.next = head;
            rightCurrent = head;
            rightTail = rightCurrent;
        }
        head = head.next;
    }
    leftTail.next = rightHead.next;
    rightTail.next = null;
    return leftHead.next;
};
// @lc code=end
