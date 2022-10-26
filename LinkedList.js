// LINKED LIST CLASS

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

