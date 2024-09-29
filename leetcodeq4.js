/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (list1 === null) return list2
        if (list2 === null) return list1


        if(list1.val < list2.val){
            list1.next = mergeTwoLists(list1.next, list2)
            return list1
        } else {
            list2.next = mergeTwoLists(list1, list2.next)
            return list2
        }
    }
}

var middleNode = function(head) {
    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }

    return slowPointer;
};


class Solution {
    reverseList(head) {
        // Initialize pointers
        let prev = null; // Previous node starts as null
        let curr = head; // Current node starts at the head

        // Traverse the list
        while (curr !== null) {
            let next = curr.next; // Save the next node

            curr.next = prev; // Reverse the link

            // Move pointers forward
            prev = curr; // Move prev to the current node
            curr = next; // Move curr to the next node
        }

        // prev is now the new head of the reversed list
        return prev;
    }
}


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let high = nums.length -1 ;
    let low = 0;
    let mid = 0;

    while(mid <= high){
        if(nums[mid] === 0){
            [nums[mid], nums[low]] = [nums[low], nums[mid]];
            low++
            mid++
        }else if(nums[mid] === 1){
            mid++
        }else if(nums[mid] === 2){
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--
        }
    }
};
