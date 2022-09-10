
/*
PROB 1 - INSERT ELEMENT IN AN ARRAY
*/

// Method 1
function insertEle(arr, ele, pos){
    for(let i = arr.length-1; i>=0; i--){
        if(i >= pos){
            arr[i+1]=arr[i];
            if(i==pos){
                arr[i] = ele;
            }
        }
    }
    return arr;
}
// let arr = [4, 5, 7, 8, 9];
// let ele = 6;
// let pos = 2;
// console.log(insertEle(arr, ele, pos));



/* Method 2 
(It will not delete the last element of array)
arr.splice(index, 0, item); will insert item into arr at the specified index (deleting 0 items first, that is, it's just an insert).
In this example we will create an array and add an element to it into index 2:  */

var arr = [];
arr[0] = "Jani";
arr[1] = "Hege";
arr[2] = "Stale";
arr[3] = "Kai Jim";
arr[4] = "Borge";

console.log(arr.join()); // Jani,Hege,Stale,Kai Jim,Borge
arr.splice(2, 0, "Lene");
console.log(arr.join()); // Jani,Hege,Lene,Stale,Kai Jim,Borge



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 2 - INSERT ELEMENT IN AN ARRAY
*/

function delEle(arr, pos){
    for(let i=pos; i<arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr.length = arr.length - 1;
    return arr;
}
// let arr = [4, 5, 7, 8, 9];
// let pos = 2;
// console.log(delEle(arr, pos));


/* Method 2 
arr.splice(index, 1); will delete 1 item at the specified index.
In this example we will create an array and delete an element to it into index 2:  */

var arr = [];
arr[0] = "Jani";
arr[1] = "Hege";
arr[2] = "Stale";
arr[3] = "Kai Jim";
arr[4] = "Borge";

console.log(arr.join()); // Jani,Hege,Stale,Kai Jim,Borge
arr.splice(2, 1);
console.log(arr.join()); // Jani,Hege,Lene,Stale,Kai Jim,Borge



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
PROB 3 - SEARCH ELEMENT IN AN ARRAY ()
*/

function linSearch(arr, ele){
    let index = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === ele){
            index = i;
            break;
        }
    }
    //return index;
    console.log("Element", ele, "is at", index,"position");
}
// let arr = [4, 5, 7, 8, 9];
// let ele = 8;
// linSearch(arr, ele);


// Method 2 (inbuilt method)
let arr = [4, 5, 7, 8, 9];
let ele = 8;
console.log(arr.indexOf(ele));

