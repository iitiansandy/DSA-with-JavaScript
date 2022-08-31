
/*
PROB 1 - Push Zeros to end
You have been given a random integer array/list(ARR) of size N. You have been required to push all the zeros 
that are present in the array/list to the end of it. Also, make sure to maintain the relative order of the 
non-zero elements.

Sample Input 1:
[2 0 0 1 3 0 0]
Sample Output 1:
[2 1 3 0 0 0 0]
*/

function pushZerosToEnd(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] != 0){
            arr[count++] = arr[i];
        }
    }
    while(count < arr.length){
        arr[count++] = 0;
    }
    return arr;
}

console.log(pushZerosToEnd([2, 0, 0, 1, 3, 0, 0]));


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 2 - Second Largest in array
You have been given a random integer array/list(ARR) of size N. You are required to find and return the 
second largest element present in the array/list.
If N <= 1 or all the elements are same in the array/list then return -2147483648 or -2 ^ 31(It is the smallest 
value for the range of Integer)
Sample Input 1: [2, 13, 4, 1, 3, 6, 28]
Sample Output 1: 13
*/

function secondLargest(arr){
    if(arr.length === 0) return Number.MIN_VALUE;
    let largest = arr[0];
    let secondLargest = Number.MIN_VALUE;
    for(let i=1; i<arr.length; i++){
        if(largest < arr[i]){
            secondLargest = largest;
            largest = arr[i];
        }
        else if(secondLargest < arr[i] && arr[i] != largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
console.log(secondLargest([2,13,14,1,3,6,28]));


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 3 - Check Array Rotation
You have been given an integer array/list(ARR) of size N. It has been sorted(in increasing order) and then rotated by 
some number 'K' in the right hand direction.
Your task is to write a function that returns the value of 'K', that means, the index from which the array/list has 
been rotated.

Sample Input 1: [5, 6, 1, 2, 3, 4]
Sample Output 1: 2
*/

function checkArrayRotation (arr){
    let ans = 0;
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] < arr[i+1]){
            continue;
        }
        else{
            ans += i+1;
        }
    }
    return ans;
}
console.log(checkArrayRotation([10, 20, 30, 40, 1]));



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 4 - Sort 0 1 2
You are given an integer array/list(ARR) of size N. It contains only 0s, 1s and 2s. Write a solution to 
sort this array/list in a 'single scan'.
'Single Scan' refers to iterating over the array/list just once or to put it in other words, you will be visiting 
each element in the array/list just once.

Sample Input 1: [0 1 2 0 2 0 1]
Sample Output 1: [0 1 2 0 2 0 1]
*/

function sort012(arr){
    let c0 = 0, c1 = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] === 0){
            c0++;
        }
        else if(arr[i] === 1){
            c1++;
        }
    }
    for(let i=0; i<c0; i++){
        arr[i]=0;
    }
    for(let i=c0; i<c0+c1; i++){
        arr[i]=1;
    }
    for(let i=c0+c1; i<arr.length; i++){
        arr[i]=2;
    }
    return arr;
}
console.log(sort012([0, 1, 2, 0, 2, 0, 1]));


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 5 - All Possible Substrings
For a given input string(str), write a function to print all the possible substrings.
Sample Input : abc
OUTPUT: a ab abc b bc c 
*/

function allPossibleSubstrings(str){
    let ans = "";
    let i=0;
    while(i<str.length){
        let j=i;
        while(j<str.length){
            ans += str.charAt(j);
            console.log(ans + " ");
            j++;
        }
        ans = "";
        i++;
    }
    return ans;
}
allPossibleSubstrings("abc");



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 6 - Reverse String Wordwise
Reverse the given string word wise. That is, the last word in given string should come at 1st place, last second 
word at 2nd place and so on. Individual words should remain as it is.
Sample Input : Welcome to Coding Ninjas
Sample Output : Ninjas Coding to Welcome
*/

function reverse(str, start, end){
    let temp;
    while(start<=end){
        temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        start++;
        end--;
    }
}

function reverseWords(s){
    s = s.split("");
    let start = 0;
    for(let end=0; end<s.length; end++){
        if(s[end] === ' '){
            reverse(s, start, end);
            start = end + 1;
        }
    }

    reverse(s, start, s.length-1);

    reverse(s, 0, s.length-1);

    return s.join("");
}

console.log(reverseWords("Welcome to Coding Ninjas "));

