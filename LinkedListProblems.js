/*
Prob: Linked List Cycle
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example: Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
*/

// Method 1 (Using fast and slow pointers)
var hasCycle = function(head) {
    let fast = head;
    let slow = head;

    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;

        if(fast === slow) return true;
    }
    return false;
};


// Method 2 (Using Hashmap)
var hasCycle = function(head) {
    const seen = new Set();

    function traverse(node){
        if(seen.has(node)) return true;
        if(!node) return false;
        seen.add(node);
        return traverse(node.next);
    }
    return traverse(head);
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/* 
Prob: Reverse Linked List
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example: Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/

// Method 1
var reverseList = function(head) {
    let curr = head;
    let prev = null;
    let next;

    while(curr !== null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};


// Method 2
var reverseList = function(head) {
    let [prev, curr] = [null, head];

    while(curr){
        [curr.next, prev, curr] = [prev, curr, curr.next];
    }
    return prev;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/* 
Prob: Middle of the Linked List
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Example: Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
*/

var middleNode = function(head) {
    let fast = head, slow = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/* 
Prob: 

*/