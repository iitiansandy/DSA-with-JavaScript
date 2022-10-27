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

