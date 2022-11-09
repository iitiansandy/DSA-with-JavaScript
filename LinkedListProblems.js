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
Prob: Remove Nth Node From End of List
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example: Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
*/

// Method 1
var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head;
    for(let i=0; i<n; i++){
        fast = fast.next;
    }
    if(!fast){
        return head.next;
    }
    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};


// Method 2
var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head;
    while(n--){
        fast = fast.next;
    }
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    if(!fast){
        head = head.next;
    } else {
        slow.next = slow.next ? slow.next.next : null;
    }
    return head;
};

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Merge k Sorted Lists
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
*/

// Method 1
function mergeLists(a, b){
    const dummy = new ListNode(0);
    let temp = dummy;
    while(a !== null && b !== null){
        if(a.val < b.val){
            temp.next = a;
            a = a.next;
        } else {
            temp.next = b;
            b = b.next;
        }
        temp = temp.next;
    }
    if(a !== null){
        temp.next = a;
    }
    if(b !== null){
        temp.next = b;
    }
    return dummy.next;
}

var mergeKLists = function(lists) {
    if(lists.length === 0){
        return null;
    }
    while(lists.length > 1) {
        let a = lists.shift();
        let b = lists.shift();
        const h = mergeLists(a, b);
        lists.push(h);
    }
    return lists[0];
};


// Method 2
function merge (left, right){
    if(!left){
        return right;
    } else if(!right) {
        return left;
    } else if(left.val < right.val) {
        left.next = merge(left.next, right);
        return left;
    } else {
        right.next = merge(left, right.next);
        return right;
    }
}

function helper (lists, start, end) {
    if(start === end) {
        return lists[start];
    } else if (start < end){
        const mid = parseInt((start + end)/2);
        const left = helper(lists, start, mid);
        const right = helper(lists, mid+1, end);
        return merge(left, right);
    } else {
        return null;
    }
}

var mergeKLists = function(lists) {
   return helper(lists, 0, lists.length - 1);
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes 
contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example: Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/

// Method 1
var addTwoNumbers = function(l1, l2) {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while(l1 !== null || l2 !== null || sum > 0) {
        if(l1 !== null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2 !== null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum >= 10){
            carry = 1;
            sum = sum - 10;
        }
        head.next = new ListNode(sum);
        head = head.next;
        sum = carry;
        carry = 0;
    }
    return List.next;
};


// Method 2
var addTwoNumbers = function(l1, l2) {
    return add(l1, l2, 0);

    function add(l1, l2, carry) {
        const v1 = (l1 && l1.val) || 0;
        const v2 = (l2 && l2.val) || 0;
        const sum = v1 + v2 + carry;
        const newCarry = Math.floor(sum/10);
        const val = sum%10;
        return (l1 || l2 || carry) ? {val, next: add(l1 && l1.next, l2 && l2.next, newCarry)}: null;
    }
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Swap Nodes in Pairs
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's 
nodes (i.e., only nodes themselves may be changed.)

Example: Input: head = [1,2,3,4]
Output: [2,1,4,3]
*/

// Method 1 (recursive)
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    var v1 = head, v2 = head.next, v3 = v2.next;
    v2.next = v1;
    v1.next = swapPairs(v3);
    return v2;
};


// Method 2 (iterative)
var swapPairs = function(head) {
    let dummy = new ListNode(-1);
    dummy.next = head;

    let prev = dummy;

    while(head && head.next) {
        let n1 = head;
        let n2 = head.next;

        // swap
        prev.next = n2;
        n1.next = n2.next;
        n2.next = n1;

        // Assign
        prev = n1;
        head = n1.next;
    }
    return dummy.next;
};



/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: 
*/







