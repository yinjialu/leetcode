/**
 * /*
 *
 * [82] 删除排序链表中的重复元素 II
 *
 * @format
 * @lc app=leetcode.cn id=82 lang=javascript
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
    while (head && head.next && head.val === head.next.val) {
        let nextC = head.next.next;
        while (nextC && nextC.val === head.val) {
            nextC = nextC.next;
        }
        head = nextC;
    }
    if (!head || !head.next) return head;
    let current = head;
    while (current.next && current.next.next) {
        if (current.next.val === current.next.next.val) {
            // todo current.next 还需要和 current.next.next.next 比较
            let nextCurrent = current.next.next.next;
            while (nextCurrent && nextCurrent.val === current.next.val) {
                nextCurrent = nextCurrent.next;
            }
            current.next = nextCurrent;
        } else {
            current = current.next;
        }
    }
    return head;
};
// @lc code=end
