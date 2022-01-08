/**
 * /*
 *
 * [83] 删除排序链表中的重复元素
 *
 * @format
 * @lc app=leetcode.cn id=83 lang=javascript
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
var deleteDuplicates = function (head) {
    let current = head;
    const hMap = {};
    while (current) {
        hMap[current.val] = true;
        if (current.next && hMap[current.next.val]) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};
// @lc code=end
