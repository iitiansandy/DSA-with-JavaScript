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
Prob: Rotate LinkedList
Given the head of a linked list, rotate the list to the right by k places.

Example: Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
*/

// Method 1
var rotateRight = function(head, k) {
    if(!head) return head;
    let count = 0, ptr = head;

    // Step-1 of the algo, count list nodes
    while(ptr) {
        count++;
        ptr = ptr.next;
    }

    // Step-2 Number of rotations are now restricted within limit
    k = k%count;
    let prev = head;
    ptr = head;

    // Step-3 Moving one pointer k positions ahead
    while(k--){
        ptr = ptr.next;
    }

    // Step-4 The actual magic, axplained above
    while(ptr.next) {
        prev = prev.next;
        ptr = ptr.next;
    }

    // Step-5 Simply modifying the head and last node
    ptr.next = head;
    head = prev.next;
    prev.next = null;
    return head;
};


// Method 2
var rotateRight = function(head, k) {
    if(!head || !head.next) return head;
    let dummy = head, depth = 0;
    while(dummy){
        depth++;
        dummy = dummy.next;
    }
    k = k % depth;
    while(k > 0) {
        node = head;
        while (node.next.next !== null) {
            node=node.next;
        }
        temp = node.next;
        node.next = null;
        temp.next = head;
        head = temp;
        k--;
    }
    return head;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Remove Duplicates from Sorted List
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example: Input: head = [1,1,2]
Output: [1,2]
*/

var deleteDuplicates = function(head) {
    let dummy = new ListNode(-Infinity, head);
    let cur = head;
    let prev = dummy;

    while (cur) {
        if(cur.val === prev.val) {
            while(cur && cur.val === prev.val) {
                cur = cur.next;
            }
            prev.next = cur;
        } else {
            prev = cur;
            cur = cur.next;
        }
    }
    return dummy.next;
};


// Method 2
var deleteDuplicates = function(head) {
    var curr = head;

    while (curr) {
        if(curr.next !== null && curr.val == curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Remove Duplicates from Sorted List II
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. 
Return the linked list sorted as well.

Example: Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
*/

// Method 1
var deleteDuplicates = function(head) {
    const dummy = new ListNode(head);
        dummy.next = head;
        let node = dummy;

        while (node.next) {
            if (node.next.next && node.next.val === node.next.next.val) {
                let nonValNode = node.next.next.next;
                while (nonValNode && nonValNode.val === node.next.val) {
                    nonValNode = nonValNode.next;
                }
                node.next = nonValNode;
            } else {
                node = node.next;
            }
        }
        return dummy.next;
};


// Method 2
var deleteDuplicates = function(head) {
    const count = {};
    const dummy = { next: head};
    for(let cur = head; cur; cur = cur.next) {
        count[cur.val] = (count[cur.val] || 0) + 1;
    }
    for(let cur = dummy; cur.next;) {
        count[cur.next.val] > 1 ? (cur.next = cur.next.next) : (cur = cur.next);
    }
    return dummy.next;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Reverse Linked List II
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left 
to position right, and return the reversed list.

Example: Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
*/

// Method 1
var reverseBetween = function(head, left, right) {
    let start = head, curr = head;
    let i = 1;
    while (i < left) {
        start = curr;
        curr = curr.next;
        i++;
    }
    let prev = null, tail = curr;
    while(i <= right) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        i++;
    }
    start.next = prev;
    tail.next = curr;
    return left == 1 ? prev : head;
};


// Method 2
var reverseBetween = function(head, left, right) {
    let curr = head, start = head, position = 1;

    while(position < left) {
        start = curr;
        curr = curr.next;
        position++;
    }

    let reversedList = null, tail = curr;

    while (position >= left && position <= right) {
        const next = curr.next;
        curr.next = reversedList;
        reversedList = curr;
        curr = next;
        position++;
    }
    start.next = reversedList;
    tail.next = curr;

    return left > 1 ? head : reversedList;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Partition List
Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example: Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]
*/

// Method 1
var partition = function(head, x) {
    let fdum = new ListNode(0), bdum = new ListNode(0), front = fdum, back = bdum, curr = head;

    while (curr) {
        if(curr.val < x) front.next = curr, front = curr;
        else back.next = curr, back = curr;
        curr = curr.next;
    }
    front.next = bdum.next, back.next = null;
    return fdum.next;
};


// Method 2
var partition = function(head, x) {
    const dummyLess = new ListNode();
    const dummyMore = new ListNode();
    let node = head;
    let less = dummyLess;
    let more = dummyMore;

    while(node) {
        if(node.val < x) {
            less = less.next = node;
        } else {
            more = more.next = node;
        }
        node = node.next;
    }
    less.next = dummyMore.next;
    more.next = null;
    return dummyLess.next;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Palindrome Linked List
Given the head of a singly linked list, return true if it is a 
palindrome or false otherwise.

Example: Input: head = [1,2,2,1]
Output: true
*/


// Method 1
var isPalindrome = function(head) {
    let slow = head, fast = head, prev, temp;
    while(fast && fast.next) {
        slow = slow.next, fast = fast.next.next;
    }
    prev = slow, slow = slow.next, prev.next = null;
    while (slow){
        temp = slow.next, slow.next = prev, prev = slow, slow = temp;
    }
    fast = head, slow = prev;
    while (slow) {
        if(fast.val !== slow.val) return false;
        else fast = fast.next, slow = slow.next;
    }
    return true;
};


// Method 2
var isPalindrome = function(head) {
    let stack = [];
    let curr = head;
    
    while (curr) {
        stack.push(curr.val);
        curr = curr.next;
    }

    let res = head;
    while (res) {
        if(res.val !== stack.pop()) {
            return false;
        }
        res = res.next;
    }
    return true;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Delete Node in a Linked List
There is a singly-linked list head and we want to delete a node node in it.

You are given the node to be deleted node. You will not be given access to the first node of head.

Example:
Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
*/

// Method 1
var deleteNode = function(node) {
    let next = node.next.next;
    node.val = node.next.val;
    node.next = next;
};


// Mehod 2
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Print LinkedList elements
Input:
N=2
LinkedList={1 , 2}
Output:
1 2
Explanation:
The linked list contains two 
elements 1 and 2.The elements 
are printed in a single line.
*/

class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}


class solution {
    display(head) {
        if(!head) return null;
        let curr = head;
        let str = "";
    
        while (curr) {
            str += curr.data + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Linked List Insertion
Create a link list of size N according to the given input literals. Each integer input is accompanied by an indicator which can either be 0 or 1. 
If it is 0, insert the integer in the beginning of the link list. If it is 1, insert the integer at the end of the link list. 
*/

class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

class solution {
    //Function to insert a node at the beginning of the linked list.
    insertAtBegining (head, newData) {
        let node = new Node (newData);
        if(!head) return node;
        else node.next = head;
        return node;
    }

    //Function to insert a node at the end of the linked list.
    insertAtEnd (head, newData) {
        let newNode = new Node (newData);
        if(!head) return newNode;
        let curr = head;
        while (curr.next != null) {
            curr = curr.next;
        }
        curr.next = newNode;
        return head;
    }
}



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Sort List
Given the head of a linked list, return the list after sorting it in ascending order.
Example: Input: head = [4,2,1,3]
Output: [1,2,3,4]
 */

var sortList = function (head) {
    var merge = function (a, b) {
        if (a == null) {
            return b;
        } else if (b == null) {
            return a;
        }

        if (a.val < b.val) {
            a.next = merge(a.next, b);
            return a;
        } else {
            b.next = merge(a, b.next);
            return b;
        }
    }

    // Base case
    if (head == null) {
        return null;
    } else if (head.next == null) {
        return head;
    }

    // General cases
    let [prev, slow, fast] = [null, head, head];
    while ((fast != null) && (fast.next != null)) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // Cut the linkage on midpoint
    if (prev != null) {
        prev.next = null;
    }

    // sort by divide and conquer
    let firstHalf = sortList(head);
    let secHalf = sortList(slow);

    result = merge(firstHalf, secHalf);
    return result;
};



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*
PROB: Odd Even Linked List
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return 
the reordered list.

The first node is considered odd, and the second node is even, and so on.
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
*/

var oddEvenList = function(head) {
    if(!head) return head;
    var odd = head;
    var even = head.next;
    while (odd.next && odd.next.next) {
        var temp = odd.next;
        odd.next = odd.next.next;
        odd = odd.next;
        temp.next = odd.next;
    }
    odd.next = even;
    return head;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*
Prob: Count Nodes of Linked List
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    //Function to count nodes of a linked list.
    getCount(head)
    {
        //your code here
        if(!head) return 0;
        let count = 0;
        let curr = head;
        
        while (curr !== null) {
            count++;
            curr = curr.next;
        }
        return count;
    }
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Delete Alternate Nodes
*/

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/


/**
 * @param {Node} head
*/

class Solution {
    deleteAlt(head){
      //code 
      let slow = head;
      let fast = head.next;
      while (slow != null && fast != null) {
          slow.next = fast.next;
          slow = slow.next;
          if(slow != null) {
              fast = slow.next;
          }
      }
      return head;
    }
  }
  


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Insert node in doubly linked list at end
*/

class Node{
    constructor(val) {
        this.prev = null;
        this.val = val;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor() {
        this.head = null;
        this.tail = this.head;
        this.size = 0;
    }

    insertNode(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
            this.size++;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.size++;
        }
    }
}

function solution(a, listE1, lastNode) {
    let dll = new DoublyLinkedList();
    if(a != 0) {
        for (let ele of listE1) {
            dll.insertNode(ele);
        }
    }
    dll.insertNode(lastNode);
    let lhead = dll.head;

    let res = "";

    while (lhead != null) {
        res += lhead.val + " ";
        lhead = lhead.next;
    }

    res += "\n";
    let ltail = dll.tail;

    while (ltail != null) {
        res += ltail.val + " ";
        ltail = ltail.prev;
    }
    return res;
}

function main() {
    var a = parseInt(readLine());
    var listE1 = readLine().split(" ").map(Number);
    var lastNode = parseInt(readLine());
    var res = solution(a, listE1, lastNode);
    console.log(res);
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Nth node from end of linked list
*/

class Solution {
    //Function to find the data of nth node from the end of a linked list
    getNthFromLast(head, n)
    {
        //your code here
        
        let curr = head;
        let prev = null;
        let len = 0;
        while (curr != null) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
            len++;
        }
        head = prev;
        if(n>len) return -1;
        else if(n == 1) return head.data;
        else {
            let res = head;
            while(n-1 > 1) {
                res = res.next;
                n--;
            }
            return res.next.data;
        }
    }
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Reverse Nodes in k-Group
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out 
nodes, in the end, should remain as it is.
You may not alter the values in the list's nodes, only nodes themselves may be changed.
Example: Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
*/

var reverseKGroup = function(head, k) {
    if(!head) return null;
    var tail = head;
    for (let i=1; i<k; i++) {
        tail = tail.next;
        if (!tail) return head;
    }

    let next = tail.next;
    tail.next = null;
    reverse(head);
    head.next = reverseKGroup(next, k);
    return tail;
};

function reverse(curr) {
    let prev = null;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return curr;
};



