
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
// let arr1 = [1,3,5,7,11,12,13];
// let arr2 = [2,4,6,8,9,10];
// console.log(mergeTwoSortedArrays(arr1, arr2));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* PROB: Find the max wealth customer.
You are given an n x n integer grid accounts where accounts[i][j] is the amount of the money the ith customer has in the jth bank.
Return the wealth that the richest customer has.
Input: accounts = [[1,2,3,],[3,4,5]]
Output: 12
*/

function calculateTotalAmount(banks){
    let totalAmount=0;
    for(let balance of banks){
        totalAmount += balance;
    }
    return totalAmount;
}

function calculateMaxWealth(accounts){
    let maxAmount = -Infinity;
    for(let customer of accounts){
        maxAmount = Math.max(calculateTotalAmount(customer), maxAmount);
    }
    return maxAmount;
}

// console.log(calculateMaxWealth([[1,2,3,],[3,4,5],[7,8,9]]));

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// PROB - There is an arr

function animalCount(animals){
    let animalCount = {};
    for(let animal of animals){
        if(animalCount[animal]){
            animalCount[animal] += 1;
        } else {
            animalCount[animal] = 1;
        }
    }
    // console.log(animalCount);
}
// animalCount(['cat', 'dog', 'goat', 'lion', 'goat', 'cat', 'dog']);

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// Convert an array of number to array of string in such a way that if number was 1,2,3,4 then strings would have values like in
// 1: a in 2: ab in 3: abc e.g [2, 5, 3] => ["ab", "abcde", "abc"]

// function to generate string
function generateString(num){
    let alphabet = 'abcdefghijklmnopqustuvwxyz';

    let finalStr = '', currIndex = 0;

    while(currIndex < num){
        finalStr += alphabet[currIndex % 26]; // if we enter 27 then it will return a , for 28 --- > ab, 29 --> abc, and so on.
        currIndex++;
    }
    return finalStr;
}


// Brute force approach
function encodeNumWithChar(arr){
    for(let i=0; i<arr.length; i++){
        arr[i] = generateString(arr[i]);
    }
}

// const arr = [2, 5, 3, 4, 5, 6];
// encodeNumWithCharOptimal(arr);
// console.log(arr);

// Optimal approach
function encodeNumWithCharOptimal(arr){
    let maxNumber = Math.max(...arr);
    let encodeArray = [''];

    for(let i=1; i<=maxNumber; i++){
        encodeArray.push(generateString(i))
    }

    for(let i=0; i<arr.length; i++){
        arr[i] = encodeArray[arr[i]];
    }
}

// const arr1 = [2, 5, 3, 4, 5, 6];
// encodeNumWithCharOptimal(arr1);
// console.log(arr1);


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB: Find the Duplicate Number
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
There is only one repeated number in nums, return this repeated number.
You must solve the problem without modifying the array nums and uses only constant extra space.
Example:
Input: nums = [1,3,4,2,2]
Output: 2
*/

var findDuplicate = function(nums) {
    let freq = {};
    
    for(let ele of nums){
        if(ele in freq){
            return ele;
        } else {
            freq[ele] = 1;
        }
    }
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB: H-Index
Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return compute the researcher's h-index.
According to the definition of h-index on Wikipedia: A scientist has an index h if h of their n papers have at least h citations each, and the other n − h papers have no 
more than h citations each.
If there are several possible values for h, the maximum one is taken as the h-index.
Example:
Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
*/

var hIndex = function(citations) {
    let i=0, j=citations.length-1;
    citations.sort((a,b)=>b-a);
    
    while(i <= j){
        let mid = i + Math.floor((j-i)/2);
        if(citations[mid] > mid)
            i = mid+1;
        else
            j = mid-1;
    }
    return i;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB: H-Index II
Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper and citations is sorted in an ascending order, 
return compute the researcher's h-index.
According to the definition of h-index on Wikipedia: A scientist has an index h if h of their n papers have at least h citations each, and the other n − h papers have no 
more than h citations each.
If there are several possible values for h, the maximum one is taken as the h-index.
You must write an algorithm that runs in logarithmic time.
Example:
Input: citations = [0,1,3,5,6]
Output: 3
Explanation: [0,1,3,5,6] means the researcher has 5 papers in total and each of them had received 0, 1, 3, 5, 6 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
*/

var hIndex = function(citations) {
    const n = citations.length;
    let left = 0, right = n-1;
    
    while (left <= right){
        let mid = Math.floor((left+right)/2);
        if(citations[mid] > n-mid){
            right = mid-1;
            continue;
        }
        if(citations[mid] < n-mid){
            left = mid+1;
            continue;
        }
        return citations[mid];
    }
    return n-left;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB: QUICK SORT (PARTITION EXCHANGE SORT)
If we have a single element or no element in the arr then it is already sorted.
Pick an element to serve as a pivot
Split the arr into two parts. Condition will be --> all elements on left side of pivot have less values as compared to the pivot
and all elements on right side have the greater values as compared to pivot.
Recursively repeate the algorithm.
*/

// BRUTE FORCE APPROACH
function getCurrPositionOfPivot(arr, left, right){
    // taking right most element as a pivot
    let pivot = arr[right];
    let correctPositionOfPivotSoFar = left-1;

    for(let curr=left; curr <= right-1; curr++){
        if(pivot > arr[curr]){
            correctPositionOfPivotSoFar++;
            [arr[correctPositionOfPivotSoFar], arr[curr]] = [arr[curr], arr[correctPositionOfPivotSoFar]];
        }
    }

    [arr[correctPositionOfPivotSoFar+1], arr[right]] = [arr[right], arr[correctPositionOfPivotSoFar+1]];

    return correctPositionOfPivotSoFar+1;
}

// MAIN FUNCTION
function quickSort(arr, left, right){
    if(left >= right) return;

    let corrPositionOfPivot = getCurrPositionOfPivot2(arr, left, right);
    
    // left side of the pivot
    quickSort(arr, left, corrPositionOfPivot-1);

    // right side of the pivot
    quickSort(arr, corrPositionOfPivot+1, right);
}
const arr = [6,3,4,6,1,7,3,9,2,8];
quickSort(arr,0,arr.length-1);
console.log(arr);

// OPTIMIZED APPROACH
function getCurrPositionOfPivot2(arr, low, high){
    let left=low;
    let right=high;
    let pivot=arr[high];

    while(left < right){

        // this condition failed on 2 cases
        // 1--> left <= right
        // 2--> arr[left] > pivot (we need to send this right position)
        while( left < right && arr[left] < pivot){
            left++;
        }

        // this condition failed on 2 cases
        // 1--> left >= right
        // 2--> arr[right] > pivot (we need to send this left position)
        while( left < right && arr[right] >= pivot){
            right--;
        }

        if(left < right){
            [arr[left], arr[right]] = [arr[right], arr[left]];
        }
    }
    [arr[left], arr[high]]=[arr[high], arr[left]];
    return left;
}
const arr1 = [6,3,4,6,1,7,3,9,2,8];
quickSort(arr1,0,arr1.length-1);
console.log(arr1);




