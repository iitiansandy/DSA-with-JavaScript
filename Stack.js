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



