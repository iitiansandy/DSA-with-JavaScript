/*
PROB 1: Rotate Array
Given an array, rotate the array to the right by k steps, where k is non-negative.
Example:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

// Method 1
var rotate = function(nums, k) {
    const actualRotations = k % nums.length;
    reverse(nums, 0, nums.length-1);
    reverse(nums, 0, actualRotations-1);
    reverse(nums, actualRotations, nums.length-1);
};

var reverse = function(nums, left, right){
    while(left < right){
        const temp = nums[left];
        nums[left++] = nums[right];
        nums[right--] = temp;
    }
}

// Method 2
const reverseArray = (nums,start,end) => {
    while (start < end){
        [nums[start],nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
};

const rotate = (nums,k) => {
    k %= nums.length;
    nums.reverse();
    reverseArray(nums,0, k -1);
    reverseArray(nums, k, nums.length -1);
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 2: Majority Element II
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
Example:
Input: nums = [3,2,3]
Output: [3]
*/

var majorityElement = function(nums) {
    let obj = {};
    let res = [];
    let count = Math.floor(nums.length/3);
    
    for(let i=0; i<nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
    }
    
    Object.entries(obj).forEach(e => {
        if(e[1] > count)
            res.push(e[0])
    })
    return res;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 3: Summary Ranges
ou are given a sorted unique integer array nums.
A range [a,b] is the set of all integers from a to b (inclusive).
Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one 
of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
Each range [a,b] in the list should be output as:
"a->b" if a != b
"a" if a == b

Example:
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
*/

var summaryRanges = function(nums) {
    let res = [];
    let j=0;
    for(let i=0; i<nums.length; i++){
        if(nums[i-1] !== nums[i]-1 && nums[i]+1 === nums[i+1])
            res[j] = nums[i].toString() + '->';
        if(nums[i]+1 !== nums[i+1]){
            res[j] ? res[j] += nums[i].toString() : res[j] = nums[i].toString();
            j++;
        }
    }
    return res;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 3: Product of Array Except Self
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
Example:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
*/

var productExceptSelf = function(nums) {
    let res = [];
    let product = 1;
    
    for(let i=0; i<nums.length; i++){
        res.push(product);
        product = product * nums[i];
    }
    
    product = 1;
    for(let i=nums.length-1; i>=0; i--){
        res[i] = res[i] * product;
        product = product * nums[i];
    }
    return res;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 3: Search a 2D Matrix II
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true
*/

var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    
    for(let i=0; i<rows; ++i){
        let left = 0, right=cols-1;
        while(left <= right){
            let mid = Math.floor(left+(right - left)/2);
            if(matrix[i][mid] === target) return true;
            if(matrix[i][mid] > target)
                right = mid-1;
            else
                left = mid+1;
        }
    }
    return false;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
PROB 3: Minimum Amount of Time to Collect Garbage
You are given a 0-indexed array of strings garbage where garbage[i] represents the assortment of garbage at the ith house. garbage[i] consists only of 
the characters 'M', 'P' and 'G' representing one unit of metal, paper and glass garbage respectively. Picking up one unit of any type of garbage takes 1 
minute.
You are also given a 0-indexed integer array travel where travel[i] is the number of minutes needed to go from house i to house i + 1.
There are three garbage trucks in the city, each responsible for picking up one type of garbage. Each garbage truck starts at house 0 and must visit 
each house in order; however, they do not need to visit every house.
Only one garbage truck may be used at any given moment. While one truck is driving or picking up garbage, the other two trucks cannot do anything.
Return the minimum number of minutes needed to pick up all the garbage.

Example 1:

Input: garbage = ["G","P","GP","GG"], travel = [2,4,3]
Output: 21
Explanation:
The paper garbage truck:
1. Travels from house 0 to house 1
2. Collects the paper garbage at house 1
3. Travels from house 1 to house 2
4. Collects the paper garbage at house 2
Altogether, it takes 8 minutes to pick up all the paper garbage.
The glass garbage truck:
1. Collects the glass garbage at house 0
2. Travels from house 0 to house 1
3. Travels from house 1 to house 2
4. Collects the glass garbage at house 2
5. Travels from house 2 to house 3
6. Collects the glass garbage at house 3
Altogether, it takes 13 minutes to pick up all the glass garbage.
Since there is no metal garbage, we do not need to consider the metal garbage truck.
Therefore, it takes a total of 8 + 13 = 21 minutes to collect all the garbage.
*/

const garbageCollection = (garbage, travel) => {
    let travelTime = 0
    garbage = garbage.reverse()
    
    for (const type of ['G', 'P', 'M']) {
      const lastHouseWithGarbage = garbage.findIndex(house => house.includes(type))
      
      if (lastHouseWithGarbage === -1) {
        continue
      }
  
      travelTime += travel.slice(0, garbage.length - lastHouseWithGarbage - 1).reduce((acc, num) => acc + num, 0)
    }
  
    return garbage.join('').length + travelTime
  };


  /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Partition Array According to Given Pivot
You are given a 0-indexed integer array nums and an integer pivot. Rearrange nums such that the following conditions are satisfied:

Every element less than pivot appears before every element greater than pivot.
Every element equal to pivot appears in between the elements less than and greater than pivot.
The relative order of the elements less than pivot and the elements greater than pivot is maintained.
More formally, consider every pi, pj where pi is the new position of the ith element and pj is the new position of the jth element. For elements less than pivot, if i < j and nums[i] < pivot and nums[j] < pivot, then pi < pj. Similarly for elements greater than pivot, if i < j and nums[i] > pivot and nums[j] > pivot, then pi < pj.
Return nums after the rearrangement.

Example:
Input: nums = [9,12,5,10,14,3,10], pivot = 10
Output: [9,5,3,10,10,12,14]
Explanation: 
The elements 9, 5, and 3 are less than the pivot so they are on the left side of the array.
The elements 12 and 14 are greater than the pivot so they are on the right side of the array.
The relative ordering of the elements less than and greater than pivot is also maintained. [9, 5, 3] and [12, 14] are the respective orderings.
*/

var pivotArray = function(nums, pivot) {
    let left = [];
    let right = [];
    let center = [];
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] < pivot){
            left.push(nums[i]);
        } else if(nums[i] > pivot){
            right.push(nums[i]);
        } else {
            center.push(nums[i]);
        }
    }
    return [...left, ...center, ...right];
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Minimum Number of Operations to Move All Balls to Each Box
You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.
In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there 
may be more than one ball in some boxes.
Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.
Each answer[i] is calculated considering the initial state of the boxes.

Example 1:

Input: boxes = "110"
Output: [1,1,3]
Explanation: The answer for each box is as follows:
1) First box: you will have to move one ball from the second box to the first box in one operation.
2) Second box: you will have to move one ball from the first box to the second box in one operation.
3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third 
box in one operation.
*/

var minOperations = function(boxes) {
    let output = [];
    // left to right
    let oneCount = 0, total = 0;
    for(let l=0; l<boxes.length; l++){
        output[l] = total;
        if(boxes[l] === '1'){
            oneCount++;
        }
        total += oneCount;
    }
    
    // right to left
    oneCount = 0, total = 0;
    for(let r=boxes.length - 1; r >= 0; r--){
        output[r] += total;
        if(boxes[r] === '1'){
            oneCount++;
        }
        total += oneCount;
    }
    return output;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Sort the Matrix Diagonally
A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction 
until reaching the matrix's end. For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], mat[3][1], 
and mat[4][2].
Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order and return the resulting matrix.
Example: Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]
*/

var sortDiag = function(i, j, mat){
    const temp = [];
    let i1 = i;
    let j1 = j;
    while(i1<mat.length && j1<mat[0].length){
        temp.push(mat[i1][j1]);
        i1++;
        j1++;
    }
    temp.sort((a,b) => a-b);
    i1=i;
    j1=j;
    let d = 0;
    while(i1<mat.length && j1<mat[0].length){
        mat[i1][j1] = temp[d];
        i1++;
        j1++;
        d++;
    }
};

var diagonalSort = function(mat) {
    let j=0;
    while(j<mat[0].length){
        sortDiag(0,j,mat);
        j++;
    }
    let i=1;
    while(i<mat.length){
        sortDiag(i,0,mat);
        i++;
    }
    return mat;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Number of Laser Beams in a Bank
Anti-theft security devices are activated inside a bank. You are given a 0-indexed binary string array bank representing the floor plan of the bank, 
which is an m x n 2D matrix. bank[i] represents the ith row, consisting of '0's and '1's. '0' means the cell is empty, while'1' means the cell has a 
security device.

There is one laser beam between any two security devices if both conditions are met:

The two devices are located on two different rows: r1 and r2, where r1 < r2.
For each row i where r1 < i < r2, there are no security devices in the ith row.
Laser beams are independent, i.e., one beam does not interfere nor join with another.

Return the total number of laser beams in the bank.

Example:
Input: bank = ["011001","000000","010100","001000"]
Output: 8
Explanation: Between each of the following device pairs, there is one beam. In total, there are 8 beams:
 * bank[0][1] -- bank[2][1]
 * bank[0][1] -- bank[2][3]
 * bank[0][2] -- bank[2][1]
 * bank[0][2] -- bank[2][3]
 * bank[0][5] -- bank[2][1]
 * bank[0][5] -- bank[2][3]
 * bank[2][1] -- bank[3][2]
 * bank[2][3] -- bank[3][2]
Note that there is no beam between any device on the 0th row with any on the 3rd row.
This is because the 2nd row contains security devices, which breaks the second condition.
*/

var numberOfBeams = function(bank) {
    let sum = [];
    let count, beams = 0;
    for(let row of bank){
        count = 0;
        for(let n of row){
            if(n === "1"){
                count++;
            }
        }
        if(count !== 0){
            sum.push(count);
        }
    }
    for(let n=0; n<sum.length-1; n++){
        beams = beams + (sum[n] * sum[n+1]);
    }
    return beams;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Finding the Users Active Minutes
You are given the logs for users' actions on LeetCode, and an integer k. The logs are represented by a 2D integer array logs where each logs[i] = [IDi, 
timei] indicates that the user with IDi performed an action at the minute timei.
Multiple users can perform actions simultaneously, and a single user can perform multiple actions in the same minute.
The user active minutes (UAM) for a given user is defined as the number of unique minutes in which the user performed an action on LeetCode. A minute can 
only be counted once, even if multiple actions occur during it.
You are to calculate a 1-indexed array answer of size k such that, for each j (1 <= j <= k), answer[j] is the number of users whose UAM equals j.
Return the array answer as described above.

Example:

Input: logs = [[0,5],[1,2],[0,2],[0,5],[1,3]], k = 5
Output: [0,2,0,0,0]
Explanation:
The user with ID=0 performed actions at minutes 5, 2, and 5 again. Hence, they have a UAM of 2 (minute 5 is only counted once).
The user with ID=1 performed actions at minutes 2 and 3. Hence, they have a UAM of 2.
Since both users have a UAM of 2, answer[2] is 2, and the remaining answer[j] values are 0.
*/

var findingUsersActiveMinutes = function(logs, k) {
    const uniqueMinByUserId = logs.reduce((map, [id, min]) => {
        if(!map.has(id)) map.set(id, new Set());
        map.get(id).add(min);
        return map;
    }, new Map());
    const ans = Array.from({length: k}, () => 0);
    for(const uniqueMinSet of uniqueMinByUserId.values()){
        ans[uniqueMinSet.size - 1]++;
    }
    return ans;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Minimize Maximum Pair Sum in Array
The pair sum of a pair (a,b) is equal to a + b. The maximum pair sum is the largest pair sum in a list of pairs.

For example, if we have pairs (1,5), (2,3), and (4,4), the maximum pair sum would be max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8.
Given an array nums of even length n, pair up the elements of nums into n / 2 pairs such that:

Each element of nums is in exactly one pair, and
The maximum pair sum is minimized.
Return the minimized maximum pair sum after optimally pairing up the elements.

Example:
Input: nums = [3,5,2,3]
Output: 7
Explanation: The elements can be paired up into pairs (3,3) and (5,2).
The maximum pair sum is max(3+3, 5+2) = max(6, 7) = 7.
*/

var minPairSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let max=0;
    let i=0;
    let j=nums.length-1;
    
    while(i<j){
        max = Math.max(max, nums[i++] + nums[j--]);
    }
    return max;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Watering Plants
ou want to water n plants in your garden with a watering can. The plants are arranged in a row and are labeled from 0 to n - 1 from left to right where the 
ith plant is located at x = i. There is a river at x = -1 that you can refill your watering can at.

Each plant needs a specific amount of water. You will water the plants in the following way:

Water the plants in order from left to right.
After watering the current plant, if you do not have enough water to completely water the next plant, return to the river to fully refill the watering can.
You cannot refill the watering can early.
You are initially at the river (i.e., x = -1). It takes one step to move one unit on the x-axis.

Given a 0-indexed integer array plants of n integers, where plants[i] is the amount of water the ith plant needs, and an integer capacity representing 
the watering can 
capacity, return the number of steps needed to water all the plants.

Example:

Input: plants = [2,2,3,3], capacity = 5
Output: 14
Explanation: Start at the river with a full watering can:
- Walk to plant 0 (1 step) and water it. Watering can has 3 units of water.
- Walk to plant 1 (1 step) and water it. Watering can has 1 unit of water.
- Since you cannot completely water plant 2, walk back to the river to refill (2 steps).
- Walk to plant 2 (3 steps) and water it. Watering can has 2 units of water.
- Since you cannot completely water plant 3, walk back to the river to refill (3 steps).
- Walk to plant 3 (4 steps) and water it.
Steps needed = 1 + 1 + 2 + 3 + 3 + 4 = 14.
*/

var wateringPlants = function(plants, capacity) {
    let ans=0     
     let tmp=capacity     
     for(let i=0;i<plants.length;i++){
         
           if(plants[i]>tmp){
               ans+=(2*i)
               
               tmp=capacity
           }
         ans+=1
         tmp-=plants[i]
     }
    return ans;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
 Prob - Arithmetic Subarrays
 A sequence of numbers is called arithmetic if it consists of at least two elements, and the difference between every two consecutive elements is the same. 
 More formally, a sequence s is arithmetic if and only if s[i+1] - s[i] == s[1] - s[0] for all valid i.

For example, these are arithmetic sequences:

1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9
The following sequence is not arithmetic:

1, 1, 2, 5, 7
You are given an array of n integers, nums, and two arrays of m integers each, l and r, representing the m range queries, where the ith query is the 
range [l[i], r[i]]. All the arrays are 0-indexed.

Return a list of boolean elements answer, where answer[i] is true if the subarray nums[l[i]], nums[l[i]+1], ... , nums[r[i]] can be rearranged to form 
an arithmetic sequence, and false otherwise.

Example:

Input: nums = [4,6,5,9,3,7], l = [0,0,2], r = [2,3,5]
Output: [true,false,true]
Explanation:
In the 0th query, the subarray is [4,6,5]. This can be rearranged as [6,5,4], which is an arithmetic sequence.
In the 1st query, the subarray is [4,6,5,9]. This cannot be rearranged as an arithmetic sequence.
In the 2nd query, the subarray is [5,9,3,7]. This can be rearranged as [3,5,7,9], which is an arithmetic sequence.
 */

var checkArithmeticSubarrays = function(nums, l, r) {
    let res = [];
    for(let i=0; i<l.length && i<r.length; i++){
        let left = l[i];
        let right = r[i];
        let range = nums.slice(left, right+1);
        
        res.push(isSequence(range));
    }
    return res;
};

var isSequence = function(nums){
    if(nums.length < 2){
        return false;
    }
    nums = nums.sort((a,b)=> a-b);
    let dist;
    
    for(let i=0; i<nums.length-1; i++){
        let prev = nums[i];
        let next = nums[i+1];
        let delta = next - prev;
        
        if(dist === undefined){
            dist = delta;
        } else if(dist !== delta){
            return false;
        }
    }
    return true;
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Find and Replace Pattern
Given a list of strings words and a string pattern, return a list of words[i] that match pattern. You may return the answer in any order.
A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.
Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.

Example 1:
Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
Output: ["mee","aqq"]
Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
"ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation, since a and b map to the same letter.
*/

var findAndReplacePattern = function(words, pattern) {
    let result = [];
    for(let i=0; i<words.length; i++) {
        if( isMatch(pattern, words[i]) ) {
            result.push(words[i]);
         }
    }
    return result;
};

let isMatch = (pattern, word) => {
    let hash = {};
	
    for(let i=0; i<pattern.length; i++) {
        let fromKey = pattern[i];
        let toKey = word[i];
        
        if( hash[fromKey] ) {
            if( hash[fromKey] != toKey) {
                return false;
            }
        } else {
            let _toKey = '_' + toKey;
            if( hash[_toKey] ) { 
                return false;
            }
            hash[fromKey] = toKey;
            hash[_toKey] = fromKey;
        }
    }    
    return true;
};


/*
Prob: Compare Version Numbers
Given two version numbers, version1 and version2, compare them.

Version numbers consist of one or more revisions joined by a dot '.'. Each revision consists of digits and may contain leading zeros. Every revision 
contains at least one character. Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, the next revision being revision 
1, and so on. For example 2.5.33 and 0.1 are valid version numbers.

To compare version numbers, compare their revisions in left-to-right order. Revisions are compared using their integer value ignoring any leading zeros. 
This means that revisions 1 and 001 are considered equal. If a version number does not specify a revision at an index, then treat the revision as 0. For 
example, version 1.0 is less than version 1.1 because their revision 0s are the same, but their revision 1s are 0 and 1 respectively, and 0 < 1.
Return the following:
If version1 < version2, return -1.
If version1 > version2, return 1.
Otherwise, return 0.

Example: Input: version1 = "1.01", version2 = "1.001"
Output: 0
Explanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".
*/

var compareVersion = function(version1, version2) {
    var v1 = version1.split('.'), v2 = version2.split('.');
    if(v1.length !== v2.length){
        var diff = Math.abs(v1.length - v2.length);
        var zeros = Array.apply(null, Array(diff)).map(Number.prototype.valueOf, 0);
        if(v1.length > v2.length){
            v2 = v2.concat(zeros);
        } else {
            v1 = v1.concat(zeros);
        }
    }
    for(var i=0; i<v1.length; i++){
        if(+v1[i] > +v2[i]) return 1;
        if(+v1[i] < +v2[i]) return -1;
    }
    return 0;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Best Time to Buy and Sell Stock
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/

// Method 1
var maxProfit = function(prices) {
    var min = Number.MAX_VALUE;
    var max = 0;

    for(var i=0; i<prices.length; i++){
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
};


// Method 2
var maxProfit = function(prices) {
    var len = prices.length;
    var curr = prices[0];
    var res = 0;
    
    for (var i=0; i< prices.length; i++){
      if (prices[i] > curr && (prices[i]-curr > res) ){
        res = prices[i] - curr;
      }
      if (prices[i] < curr){
        curr = prices[i];
      }
    }
    
    return res;
  };

  
  // Method 3
  const maxProfit = (prices) => {
    const pricesLen = prices.length;
    if (pricesLen === 0) return 0;

    let ans = 0, i = 0, j = 1, currentMin = prices[0];
    while(j < pricesLen) {
        ans = Math.max(prices[j] - currentMin, ans);
        currentMin = Math.min(prices[j], currentMin);
        ++j;
    }
    return ans;
};


// Method 4
var maxProfit = function(prices) {
    maxAmount = 0
    first = prices[0]
    for (let i=1; i<prices.length; i++) {
      let diff = prices[i] - first
      if (diff <= 0) {
        first = prices[i]
      }
      else if (diff > maxAmount) {
        maxAmount = diff
      }
      }
      return maxAmount
    };


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Construct Binary Tree from Inorder and Postorder Traversal
Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same 
tree, construct and return the binary tree.
Example:
Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]
*/

var buildTree = function(inorder, postorder) {
    if(inorder.length){
        let last = postorder.pop();
        let index = inorder.indexOf(last);
        let root = new TreeNode(last);
        root.right = buildTree(inorder.slice(index+1), postorder);
        root.left = buildTree(inorder.slice(0,index), postorder);
        return root;
    }
    return null;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Palindrome Partitioning
Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning 
of s.

Example:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
*/

// Method 1
const isPelindrome = str => (str === str.split('').reverse().join(''));

var dfs = function(s, partition, result) {
    if (s.length == 0) {
        result.push([...partition]);
        return;
    }

    for(let i=1; i<=s.length; i++) {
        let prefix = s.substring(0, i);
        let postfix = s.substring(i);

        if(isPelindrome(prefix)) {
            partition.push(prefix);
            dfs(postfix, partition, result);
            partition.pop();
        }
    }
    return;
}

var partition = function(s) {
    let partition = [];
    let result = [];
    dfs(s, partition, result);
    return result;
};


// Method 2
var partition = function(s) {
    function isPelin(str) {
        let left = 0, right = str.length-1;

        while(left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }
    const result = [];
    function permute(arr, str) {
        if (!str.length) result.push(arr);
        for (let i=1; i<=str.length; i++){
            const subStr = str.slice(0,i);
            if(isPelin(subStr)) {
                permute([...arr, subStr], str.slice(i));
            }
        }
    }
    permute([], s);
    return result;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Maximum Product Subarray
Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

Example:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
*/

// Method 1
var maxProduct = function(nums) {
    let prevMax = nums[0];
    let prevMin = nums[0];
    let result = nums[0];

    for (let i=1; i<nums.length; i++) {
        curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
        curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);
        prevMax = curMax;
        prevMin = curMin;
        result = Math.max(curMax, result);
    }
    return result;
};


// Method 2
var maxProduct = function(nums) {
    var res = Math.max(...nums);
    curMin = 1;
    curMax = 1;
    prevMax = 1;

    for (const num of nums) {
        prevMax = curMax * num;
        curMax = Math.max(prevMax, curMin*num, num);
        curMin = Math.min(prevMax, curMin*num, num);
        res = Math.max(res, curMax);
    }
    return res;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/* 
Prob: Happy Number
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Example:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/

var isHappy = function(n) {
    var seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = sumOfSquares(n);
    }
    return n === 1 ? true : false;
};

function sumOfSquares(numStr) {
    return numStr.toString().split('').reduce(function(sum, num){
        return sum + Math.pow(num, 2);
    }, 0);
}


// Method 2
var isHappy = function(n) {
    function getNext(n) {
        return (n+"").split("").reduce((a,c)=>Number(a)+Number(c*c),0);
    }

    let slow = n;
    let fast = getNext(n);
    while(fast != 1 && slow != fast) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast == 1;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Reverse Bits
Reverse bits of a given 32 bits unsigned integer.
Example 1:

Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 
which its binary representation is 00111001011110000010100101000000.
*/

// Method 1
var reverseBits = function(n) {
    var result = 0;
    var count = 32;

    while(count--) {
        result *= 2;
        result += n & 1;
        n = n >> 1;
    }
    return result;
};


// Method 2
var reverseBits = function(n) {
    return Number.parseInt(n.toString(2).split("").reverse().join("").padEnd(32, "0"), 2);
};


// Method 3
var reverseBits = function(n) {
    let res = 0, pow = 31;
    while (n > 0) {
        let rightMost = n & 1;
        res = res + (rightMost << pow);
        pow--;
        n = n >>> 1;
    }
    return res >>> 0;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



