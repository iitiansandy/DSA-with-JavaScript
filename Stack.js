/* 
STACK DATA STRUCTURE
STACK IMPLEMENTATION
*/

class Stack {
    constructor(){
        this.array = [];
    }

    append(data){
        this.array.push(data);
    }

    peek(){
        console.log(this.array[this.array.length-1])
    }

    remove(){
        this.array.pop();
    }

    display(){
        console.log(this.array)
    }
}
const myStack = new Stack();
myStack.append(5);
myStack.append(9);
myStack.append(2);
myStack.append(6);
myStack.remove();
myStack.peek();
myStack.display();


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Implement Queue using Stacks
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue 
(push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.

Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
*/

MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while(this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
    }
    var pop = this.stack2.pop();

    while(this.stack2.length !== 0) {
        this.stack1.push(this.stack2.pop());
    }
    return pop;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while(this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
    }
    var pop = this.stack2.pop();
    this.stack2.push(pop);
    while(this.stack2.length !== 0) {
        this.stack1.push(this.stack2.pop());
    }
    return pop;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0 ? true : false;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



