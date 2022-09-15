/*
PROB 1 - ROTATE AN ARRAY TO RIGHT SIDE
*/

function rotateArr(arr, k){
    arr = arr.split(" ");
    
    for(let i=0; i<k; i++){
        let last = arr.pop();
        arr.unshift(last);
    }

    for(let i=0; i<arr.length; i++){
        arr[i];
    }
    let result = arr.join(' ');
    return result;
}

let arr = [3,4,5,6,7,8,9];
let k = 3;
console.log(rotateArr(arr,k));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* 
PROB 2 - Frequency of characters in a string
*/

function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
    return freq;
};
console.log(getFrequency("hello world"));


/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

// Method 2
let counter = str => {
    return str.split('').reduce((total, letter) => {
      total[letter] ? total[letter]++ : total[letter] = 1;
      return total;
    }, {});
  };
//   console.log(counter("hello world")); // => { a: 2, b: 1, s: 3, d: 1 }

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

// Method 3
function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }
//   console.log(count("hello world"));

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

// Method 4
const counter1 = s => [...s].reduce((a, c) => (a[c] = a[c] + 1 || 1) && a, {})

console.log(counter("hello")); // {h: 1, e: 1, l: 2, o: 1}


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
Prob - Check whether a given string is an interleaving of two other given strings
Given three strings S1, S2 and S3. Write a program that checks whether S3 is an interleaving of S1 and S2. 
S3 is said to be an interleaving of S1 and S2 if it contains all characters of S1 and S2 and order of all characters in individual 
strings is preserved.
Input:
    AB
    CD
    ACBD
    where:
First line represents input string S1
Second line represents input string S2
Third line represents input string S3

Output: Yes
*/

function interLeaving(str1, str2, str3){
  let i=0, j=0, k=0;
  while (k != str3.length){
    if(i < str1.length && str1[i] == str3[k]){
      i++;
    } else if(j < str2.length && str2[j] == str3[k]){
      j++;
    } else {
      return "No";
    }
    k++;
  }
  if(i < str1.length || j < str2.length){
    return "No";
  }
  return "Yes";
}

let str1 = "AB";
let str2 = "CD";
let str3 = "ABCD";
console.log(interLeaving(str1, str2, str3));
