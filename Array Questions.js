
// SORT 0s, 1s and 2s.

sort012(arr, N)
{
    //your code here
    let i=0, j=0, k=N-1;
    
    while (j <= k) {
        if(arr[j]==0) {
            [arr[j], arr[i]] = [arr[i], arr[j]];
            j++;
            i++;
        } else if(arr[j] == 1) {
            j++;
        } else if(arr[j] == 2) {
            [arr[j], arr[k]] = [arr[k], arr[j]];
            k--;
        }
    }
    return arr;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/*
Prob: Permutation Sequence
The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Example:

Input: n = 3, k = 3
Output: "213"
*/

var getPermutation = function(n, k) {
    var ns = [], res = [], pos = k-1;
    for (var i=1; i<=n; ++i) {
        ns.push(i);
    }
    var nfac = ns.reduce((prev, curr) => prev*curr);
    if (k<1 || k>nfac) { return "error";}
    for (var j=n; j>=1; --j){
        nfac /= j;
        res.push(ns.splice(parseInt(pos/nfac), 1)[0]);
        pos %= nfac;
    }
    return res.join("");
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Length of Last Word
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
*/

// Method 1
var lengthOfLastWord = function(s) {
    let len = 0;
    let hasStarted = false;
    for (let i=s.length-1; i>=0; i--) {
        if (s[i] != ' ') hasStarted = true;
        if (hasStarted) {
            if (s[i] === ' ') break;
            len++;
        }
    }
    return len;
};


// Method 2
var lengthOfLastWord = function(s) {
    const arr = s.trim().split(" ");
    return arr[arr.length-1].length;
};


// Method 3
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */







