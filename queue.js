/* 
QUEUE DATA STRUCTURE
QUEUE IMPLEMENTATION
*/

class Queue {
    constructor(){
        this.items = [];
    }

    // Add an element to the queue
    enqueue(element){
        return this.items.push(element);
    }

    // Remove element from the queue
    dequeue(element){
        if(this.items.length > 0){
            return this.items.shift();
        }
    }

    // View the front element
    peek(){
        return this.items[this.items.length - 1];
    }

    // Check if the queue is empty
    isEmpty(){
        return this.items.length === 0;
    }

    // Size of the queue
    size(){
        return this.items.length;
    }

    // Empty the queue
    clear(){
        this.items = [];
    }
}

// let queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// console.log(queue.items);

// queue.dequeue();
// console.log(queue.items);

// console.log(queue.peek());
// console.log(queue.isEmpty());
// console.log(queue.size());

// queue.clear();
// console.log(queue.items);
// console.log(queue.isEmpty());


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


// QUEUE IMPLEMENTATION

let queue = [];
let curSize = queue.length;
let maxSize = 5;

function enqueue(newVal) {
    if(curSize >= maxSize) {
        console.log("Queue is already full");
    } else {
        queue[curSize] = newVal;
        curSize++;
    }
}

function dequeue (newVal) {
    if(curSize > 0) {
        for(let i=0; i<queue.length; i++) {
            queue[i] = queue[i+1];
        }
        curSize--;
        queue.length = curSize;
    } else {
        console.log("Queue is already empty");
    }
}

function display() {
    console.log(queue);
}

// enqueue(5);
// enqueue(10);
// enqueue(15);
// enqueue(20);
// enqueue(25);
// display();

// dequeue();
// display();
// dequeue();
// display();
// dequeue();
// display();
// dequeue();
// dequeue();
// dequeue();
// display();

