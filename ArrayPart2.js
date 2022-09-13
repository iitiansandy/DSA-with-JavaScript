
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
// console.log(arr.indexOf(ele));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 4 - FUNCTIONAL PROGRAMMING
Given an array of radii, calculate its area, circumference and diameter using functional programming.
*/

const area = function(radius){
    return Math.PI * radius * radius;
};

const circumference = function(radius){
    return 2*Math.PI * radius;
};

const diameter = function(radius){
    return 2*radius;
};

const calculate = function(radius, logic){
    const output = [];
    for(let i=0; i<radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
};
const radius = [3, 1, 2, 4];
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// Merge two array manually
// Method 1
function mergeTwoArr(arr1, arr2){
    let arr = [];
    for(let i=0; i<arr1.length; i++){
        arr[i] = arr1[i];
    }
    for(let i=0; i<arr2.length; i++){
        arr[arr1.length + i] = arr2[i];
    }
    return arr;
}
// let arr1 = [2,3,4,5,6];
// let arr2 = [7,8,9,10];
// console.log(mergeTwoArr(arr1, arr2));


// Method 2

function mergeArrays(arr1, arr2){
    let arr = [...arr1, ...arr2];
    return arr;
}
// let arr1 = [2,3,4,5,6];
// let arr2 = [7,8,9,10];
// console.log(mergeTwoArr(arr1, arr2));


// Merge two sorted arrays

function mergeTwoSortedArrays(arr1, arr2){
    let arr = [];
    let i=0, j=0, k=0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            arr[k] = arr1[i];
            i++;
            k++;
        } else {
            arr[k] = arr2[j];
            j++;
            k++;
        }
    }

    while(i < arr1.length){
        arr[k] = arr1[i];
        k++;
        i++;
    }

    while(j < arr2.length){
        arr[k] = arr2[j];
        k++;
        j++;
    }
    return arr;
}
let arr1 = [1,3,5,7,11,12,13];
let arr2 = [2,4,6,8,9,10];
console.log(mergeTwoSortedArrays(arr1, arr2));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

