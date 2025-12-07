// Question 160: Intersection of Two Linked Lists
 // Difficulty: EASY
 // URL: https://leetcode.com/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let lista = headA;
    let listb = headB;

    while (lista !== listb) {
        lista = lista ? lista.next : headB;
        listb = listb ? listb.next : headA;
    }

    return lista;    
};