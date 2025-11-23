// Question 21: Merge Two Sorted Lists
 // Difficulty: EASY
 // URL: https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const head = new ListNode(-1)
    let current = head
    let current1 = list1
    let current2 = list2
    while(list1 != null && list2 != null){
        if(list1.val <= list2.val) {
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next

        }
        current = current.next
           }
    if(list1==null){
        current.next=list2
    }
    if(list2 == null){
        current.next=list1
    }

    return head.next

};