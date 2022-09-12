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
PROB - Frequency of characters in a string
*/




/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* 
PROB 3 - Frequency of characters in a string
*/

