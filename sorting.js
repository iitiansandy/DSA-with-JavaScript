
/*
Prob: Insertion Sort List
Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.
Input: head = [4,2,1,3]
Output: [1,2,3,4]
*/

var insertionSortList = function(head) {
    if (!head) return null;
    let sorted = head;
    head = head.next;
    sorted.next = null;

    while (head) {
        let prev = null;
        let node = sorted;
        while (node && head.val > node.val) {
            prev = node;
            node = node.next;
        }
        let inserted = head;
        head = head.next;
        inserted.next = node;
        if (prev) {
            prev.next = inserted;
        } else {
            sorted = inserted;
        }
    }
    return sorted;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

