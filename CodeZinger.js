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

// let str1 = "AB";
// let str2 = "CD";
// let str3 = "ABCD";
// console.log(interLeaving(str1, str2, str3));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
Prob. Find a string within a string

*/

function findSubstring(str1, str2) {
  let n = str1.length;
  let m = str2.length;
  for (let i = 0; i <= n - m; i++) {
      var j;
      for (j = 0; j < m; j++) {
          if (str1[i + j] != str2[j]) {
              break;
          }
      }
      if (j == m) {
          return i;
      }
  }

  return -1;
}

// let str1 = "Code Zinger University";
// let str2 = "Zinger";
// console.log(findSubstring(str1, str2));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
Prob. Array Balance
Given an unsorted array A, check whether the array is balanced. 
Display 1 if the array is balanced otherwise 0. 
Input: [1  1  1  2  1]
Output: 1 
*/

function arrBalance(arr) {
  for (let i = 1; i < arr.length; i++) {
      let leftSum = 0;
      for (let j = i - 1; j >= 0; j--) {
          leftSum += arr[j];
      }
      let rightSum = 0;
      for (let k = i; k < arr.length; k++) {
          rightSum += arr[k];
      }
      if (leftSum === rightSum) {
          return 1;
      }
  }
  return 0;
}

// let arr = [1, 1, 1, 2, 3];
// console.log(arrBalance(arr));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
Prob. Minimum changes required to make a given array an Arithmetic Progression
Given an array A of N integers and a number D, find the minimum number of change(s) required to make the given array an Arithmetic Progression with the 
common difference D. You can change any element of the array to any integer.
Example: Input: [1,2,4,6]
Output: 1
*/

function arithmaticProgression(a,arr,d){
  let maxFreq = -1;
  let map = new Map();
  for (let i = 0; i < a; i++) {
      let k0 = arr[i] - i * d;
      if (map.has(k0)) {
          map.set(k0, map.get(k0) + 1);
      } else {
          map.set(k0, 1);
      }
      if (map.get(k0) > maxFreq) {
          maxFreq = map.get(k0);
      }
  }
  return (a - maxFreq);
}
// let arr = [1,2,4,6];
// let a = arr.length;
// let d = 2;
// console.log(arithmaticProgression(a,arr,d));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* Prob - Missing characters to make a string Pangram
Given a string S, find all characters that are missing from the string S, i.e., the characters that can make the string a Pangram. Display output 
in alphabetic order.
Input: The quick brown fox jumps
where: First line represents string S.
Output: adglvyz
*/

function missingChar(str){
  let alphabetArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l","m", "n", "o","p","q","r","s","t","u","v","w","x","y","z"];
  let seen = [];
  let pangArr = [];
  for(let i=0; i<26; i++){
      seen.push(false);
  }
  let a = "a";
  for(let i=0; i<str.length; i++){
      for(let j=0; j<alphabetArr.length; j++){
          let ch = str[i];
          let x = str.charCodeAt(i) - a.charCodeAt(0);
          if(seen[x]){
              continue;
          }
          seen[x]=true;
      }
  }
  for(let i=0; i<26; i++){
      if(!seen[i]){
          pangArr.push(alphabetArr[i]);
      }
  }
  return pangArr.join('');
}

// let str = "The quick brown fox jumps over the";
// console.log(missingChar(str));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* Prob - Set difference of two sorted arrays
Given two sorted arrays of distinct elements, find those elements from both arrays that are not common. The output should be displayed in sorted order.
Example: Input: arr1 --> [10 20 30], arr2 = [20 25 30 40 50]
Output = [10 25 40 50]
*/

function uncommonElements(arr1, arr2){
  let i=0, j=0;
  let ans = [];
  while(i < arr1.length && j < arr2.length){
      if(arr1[i] < arr2[j]){
          ans.push(arr1[i]);
          i++;
      } else if(arr2[j] < arr1[i]){
          ans.push(arr2[j]);
          j++;
      } else {
          i++;
          j++;
      }
  }
  while(i < arr1.length){
      ans.push(arr1[i]);
      i++;
  }
  while(j < arr2.length){
      ans.push(arr2[j]);
      j++;
  }
  return ans;
}
// let arr1 = [10, 20, 30, 40];
// let arr2 = [20, 25, 30, 40, 50];
// console.log(uncommonElements(arr1, arr2));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
