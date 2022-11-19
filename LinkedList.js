// LINKED LIST CLASS



/*

DEFINITION: Like arrays, Linked List is a linear data structure. Unlike arrays, linked list elements are not stored at a contiguous location; 
the elements are linked using pointers. They include a series of connected nodes. Here, each node stores the data and the address of the next 
node.

Types of Linked Lists:
Simple Linked List – In this type of linked list, one can move or traverse the linked list in only one direction
Doubly Linked List – In this type of linked list, one can move or traverse the linked list in both directions (Forward and Backward)
Circular Linked List – In this type of linked list, the last node of the linked list contains the link of the first/head node of the linked 
list in its next pointer and the first/head node contains the link of the last node of the linked list in its prev pointer
Basic operations on Linked Lists:

1. Deletion
2. Insertion
3. Search
4. Display


Representation of Linked Lists: 
A linked list is represented by a pointer to the first node of the linked list. The first node is called the head of the linked list. If the linked list 
is empty, then the value of the head points to NULL. 

Each node in a list consists of at least two parts: 

A Data Item (we can store integer, strings, or any type of data).
Pointer (Or Reference) to the next node (connects one node to another) or An address of another node
In C, we can represent a node using structures. Below is an example of a linked list node with integer data. 
In Java or C#, LinkedList can be represented as a class and a Node as a separate class. The LinkedList class contains a reference of Node class 
type. 


*/



// User defined class node
class Node{
    // constructor (element)
    constructor(element)
    {
        this.element = element;
        this.next = null;
    }
};


// linkedlist class

class Linkedlist {
    constructor ()
    {
        this.head = null;
        this.size = 0;
    }
}

//   data + next ===> node
// node  node  node ===> linkedlist

// head.data = 2;
// head.next = 5


// How to iterate through LL

/*

var curr = head;
while (head != null){
    console.log(curr.data);
    head = curr.next;
}

*/

// Add node in the front of a LL

/*
step 1: Create a new node and allocate the data

var new_Node = new Node(new_Data)
new_Node.next = head;
head = new_Node;

*/


// Add node after a given node in a LL

/*
step 1: Create a new node and allocate the data

var new_Node = new Node(new_Data)
new_Node.next = head;
head = new_Node;

*/


// Add node at the end of a LL

/*
step 1: Create a new node and allocate the data

while(curr.next !== null){
    curr = curr.next;
}

*/


// Delete a node in the front of a LL

/*
head = head.next;

*/

// Delete a node in the middle of a LL

/*
prev.next = prev.next.next;

*/

// Delete a last node in a LL

/*
var curr = head;
while (curr.next.next !== null){
    curr = curr.next.next;
}

*/


// REVERSE A SINGLY LINKED LIST

/*
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;

*/




/* ++++++++++++++++++++++++++++++++++++++ */


// DOUBLY LINKED LIST (27 OCTOBER 2022)

/*
1. Add a new node at the front
    1. n.next = head;
    2. head.prev = n;
    3. head = n;


*/

/*
1. Add a new node at the middle of DLL
    1. n.next = curr.next
    2. n.prev = curr;
    3. curr.next.prev = n;
    4. curr.next = n;

*/

/*
1. Add a new node at the end of a DLL
    1. while(curr.next != null)
        n.prev = curr;
        curr.next = n;

*/

/*
1. Delete head node from the front of a DLL
    head = head.next;
    head.prev = null;
    
*/

/*
Delete a node from the middle of a DLL
    curr.next = p;
    p.prev = curr;

*/

/*
Delete the last node from a DLL
    while(curr.next.next !== null){
        curr = curr.next;
        curr.next = null;
    }

*/


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/* 
Prob: CREATE A LINKEDLIST and APPEND A NODE IN IT
let LinkedList = {
     head: {
         value: 10,
//         next: {
//             value: 16,
//             next: {
//                 value: 20,
//                 next: null
//             }
//         }
//     }
// };

*/

// class LinkedList{
//     constructor(data){
//         this.head = {
//             value: data,
//             next: null
//         }
//         this.tail = this.head;
//         this.length = 1;
//     }

//     append(data){
//         const newNode = {
//             value: data,
//             next: null
//         }
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//     }

//     prepend(data){
//         const newNode = {
//             value: data,
//             next: null
//         }
//         newNode.next = this.head;
//         this.head = newNode;
//     }
// }

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(16);
// myLinkedList.append(20);
// myLinkedList.prepend(2);
// console.log(myLinkedList);





/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/* 
Prob: How to insert a node at a given position in a LL
*/
class LinkedList{
    constructor(data){
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(data){
        const newNode = {
            value: data,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(data){
        const newNode = {
            value: data,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    traversing(requiredIndex){
        let counter = 0;
        let currNode = this.head;

        while(counter !== requiredIndex){
            counter++;
            currNode = currNode.next;
        }
        return currNode;
    }

    insert(index, data){
        const newNode = {
            value: data,
            next: null
        }
        const leaderNode = this.traversing(index-1);
        const nextNode = leaderNode.next;
        leaderNode.next = newNode;
        newNode.next = nextNode;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(16);
myLinkedList.append(20);
myLinkedList.prepend(2);
myLinkedList.insert(1,4);
console.log(myLinkedList);


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: REVERSE A LINKEDLIST
*/

// Iterative Method:
var head;

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

// Function to reverse a LL
function reverse(node) {
    var prev = null;
    var curr = node;
    var next = null;

    while (curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    node = prev;
    return node;
}

// Prints function to print LL
function printList(node) {
    let res = [];
    while (node != null) {
        res.push(node.data);
        node = node.next;
    }
    return res.join(' ');
}

// Driver function
head = new Node(5);
head.next = new Node(10);
head.next.next = new Node(15);
head.next.next.next = new Node(20);
console.log("Original LinkedList:", printList(head));
head = reverse(head);
console.log("Reversed LinkedList:", printList(head));


// RECURSIVE METHOD:
var head;
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function revLL(head) {
    if (head == null || head.next == null) {
        return head;
    }

    var rest = revLL(head.next);
    head.next.next = head;
    head.next = null;
    return rest;
}

function print() {
    var temp = head;
    var res = [];
    while (temp != null) {
        res.push(temp.data);
        temp = temp.next;
    }
    return res;
}

function pushLL(data) {
    var temp = new Node(data);
    temp.next = head;
    head = temp;
}

pushLL(20);
pushLL(4);
pushLL(15);
pushLL(9);
console.log("Original LL:", print(head));
head = revLL(head);
console.log("Reversed LL:", print(head));


// Method 3 (Using Stack)
class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}

var head = null;
function revList() {
    var stack = [];
    var temp = head;
    while (temp.next != null) {
        stack.push(temp);
        temp = temp.next;
    }
    head = temp;
    while (stack.length != 0) {
        temp.next = stack.pop();
        temp = temp.next;
    }
    temp.next = null;
}

function displayList(temp) {
    let res = [];
    while (temp != null) {
        res.push(temp.data);
        temp = temp.next;
    }
    return res;
}

function insertBack (val) {
    var temp = new Node();
    temp.data = val;
    temp.next = null;

    if(head == null) {
        head = temp;
        return;
    } else {
        var lastNode = head;
        while (lastNode.next != null) {
            lastNode = lastNode.next;
        }
        lastNode.next = temp;
        return;
    }
}

insertBack(1);
insertBack(2);
insertBack(3);
insertBack(4);
insertBack(5);
console.log("Original LL:", displayList(head));
revList();
console.log("Reversed LL:", displayList(head));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

