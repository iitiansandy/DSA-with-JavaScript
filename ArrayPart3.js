
/*
PROB 1 - Count Equal and Divisible Pairs in an Array (Leetcode 2176)
Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, 
such that nums[i] == nums[j] and (i * j) is divisible by k.
Example:
Input: nums = [3,1,2,2,2,1,3], k = 2
Output: 4
Explanation:
There are 4 pairs that meet all the requirements:
- nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
- nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
- nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
- nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.
*/

var countPairs = function(nums, k) {
    let count = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] === nums[j] && (i * j) % k === 0){
                count++;
            }
        }
    }
    return count;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
Prob. Flipping an Image (Leetcode 832)
Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.
To flip an image horizontally means that each row of the image is reversed.
For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.
For example, inverting [0,1,1] results in [1,0,0].

Example:
Input: image = [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
*/

// Method 1
var flipAndInvertImage = function(image) {
    return image.map(row => row.reverse().map(x => !x));
};


// Method 2
var flipAndInvertImage = function(image) {
    const m = image.length;
    const n = image[0].length - 1;
    let res = [...Array(m)].map(e => new Int8Array(n+1));
    for(let i=0; i<m; i++){
        for(let j=0; j<=n; j++){
            res[i][j] = image[i][n-j]^1
        }
    }
    return res;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
Prob. Matrix Diagonal Sum (Leetcode 1572)
Given a square matrix mat, return the sum of the matrix diagonals.
Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.
*/

// Method 1
var diagonalSum = function(mat) {
    let diagSum = 0;
    const n = mat.length;
    for(let i=0; i<n; i++){
        const j = n-1-i;
        diagSum += mat[i][j];
        
        if(i !== j)
            diagSum += mat[i][i];
    }
    return diagSum;
};


// Method 2
var diagonalSum = function(mat) {
    let n = mat.length;
    let sum = 0;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if((i === n-1 && j === 0) || (j === n-1 && i === 0) || (i === j) || (i+j === n-1)){
                sum += mat[i][j];
            }
        }
    }
    return sum;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
Prob. Minimum Time Visiting All Points (Leetcode 1266)
On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in the order given by points.
You can move according to these rules:
In 1 second, you can either:
move vertically by one unit,
move horizontally by one unit, or
move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
You have to visit the points in the same order as they appear in the array.
You are allowed to pass through points that appear later in the order, but these do not count as visits.

Input: points = [[1,1],[3,4],[-1,0]]
Output: 7
Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
Time from [1,1] to [3,4] = 3 seconds 
Time from [3,4] to [-1,0] = 4 seconds
Total time = 7 seconds
*/

// Method 1
var minTimeToVisitAllPoints = function(points) {
    let sum = 0;
    for(let i=1; i<points.length; i++){
        sum += Math.max(Math.abs(points[i][0] - points[i-1][0]) , Math.abs(points[i][1] - points[i-1][1]));
    }
    return sum;
};


// Method 2
var minTimeToVisitAllPoints = function(points) {
    let sum = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const diffSecPoint = points[i + 1][1] - points[i][1];
    const diffFirPoint = points[i + 1][0] - points[i][0];

    if (Math.abs(diffSecPoint) > Math.abs(diffFirPoint)) {
      sum = sum + Math.abs(diffSecPoint);
    } else {
      sum = sum + Math.abs(diffFirPoint);
    }
  }

  return sum;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
Prob. Find the Highest Altitude (Leetcode 1732)
There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with 
altitude equal 0.
You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return 
the highest altitude of a point.

Example:

Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
*/

// Method 1
var largestAltitude = function(gain) {
    let result = [0];
    for (let i = 0; i < gain.length; i++) {
        if (i === 0) {
            result.push(gain[i])
        } else {
            let calc = result[i] + gain[i];
            result.push(calc); 
        }
    }

    result = Math.max(...result)
    return result;
};


// Method 2
var largestAltitude = function(gain) {
    const altitudeArray = [0];
    for (let i = 0; i < gain.length; i++) {
    altitudeArray[i + 1] = gain[i] + altitudeArray[i];
    }
    return altitudeArray.sort((a, b) => a - b)[altitudeArray.length - 1];
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
Prob: Number Of Rectangles That Can Form The Largest Square (Leetcode 1725)
You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.
You can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi. For example, if you have a rectangle [4,6], 
you can cut it to get a square with a side length of at most 4.
Let maxLen be the side length of the largest square you can obtain from any of the given rectangles.
Return the number of rectangles that can make a square with a side length of maxLen.
Example :
Input: rectangles = [[5,8],[3,9],[5,12],[16,5]]
Output: 3
Explanation: The largest squares you can get from each rectangle are of lengths [5,3,5,5].
The largest possible square is of length 5, and you can get it out of 3 rectangles.
 */

// Method 1
var countGoodRectangles = function (rectangles) {
    let map = new Map()

    rectangles.forEach(x => {
        if (x[0] < x[1]) map.set(x[0], map.get(x[0]) + 1 || 1)
        else map.set(x[1], map.get(x[1]) + 1 || 1)

    })

    return map.get(Math.max(...map.keys()))
};


// Method 2
var countGoodRectangles = function (rectangles) {
    let count = 0;
    let max = 0;

    for (let i of rectangles) {

        let side = Math.min(i[0], i[1]);

        if (side > max) {
            max = side;
            count = 1;
        } else if (side == max) {
            count++;
        }
    }
    return count;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
 Prob - Find First Palindromic String in the Array
 Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".
A string is palindromic if it reads the same forward and backward.
Example:

Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.
*/

// VERSION 1 : TWO POINTER
var firstPalindrome = function (words) {
    for (w of words) {
        start = 0
        end = w.length - 1;
        while (start < end && w[start] == w[end]) {
            start++;
            end--;
        }
        if (w[start] == w[end]) {
            return w;
        }
    }
    return ""
};

// VERSION 2: USING BUILT-IN METHODS

var firstPalindrome = function (words) {
    for (w of words) {
        if (w == w.split('').reverse().join(''))
            return w
    }
    return ""
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* Prob - Cells with Odd Values in a Matrix
There is an m x n matrix that is initialized to all 0's. There is also a 2D array indices where each indices[i] = [ri, ci] represents a 0-indexed 
location to perform some increment operations on the matrix.
For each location indices[i], do both of the following:
Increment all the cells on row ri.
Increment all the cells on column ci.
Given m, n, and indices, return the number of odd-valued cells in the matrix after applying the increment to all locations in indices.
Input: m = 2, n = 3, indices = [[0,1],[1,1]]
Output: 6
Explanation: Initial matrix = [[0,0,0],[0,0,0]].
After applying first increment it becomes [[1,2,1],[0,1,0]].
The final matrix is [[1,3,1],[1,3,1]], which contains 6 odd numbers.
*/

var oddCells = function(m, n, indices) {
    const matrix = Array.from(Array(m), () => Array(n).fill(0));
    
    let res = 0;
    for (const [r, c] of indices) {
        for (let i = 0; i < n; i++) {
            matrix[r][i] ^= 1;
            if (matrix[r][i]) res++; else res--;
        }
        for (let i = 0; i < m; i++) {
            matrix[i][c] ^= 1;
            if (matrix[i][c]) res++; else res--;
        }
    }
    return res;
};



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* Prob - Find N Unique Integers Sum up to Zero
Given an integer n, return any array containing n unique integers such that they add up to 0.
Example:
Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
*/

var sumZero = function(n) {
    let res = new Array(n);
    for(let i=0; i<n; i++){
        res[i] = i*2 - n + 1;
    }
    return res;
};


// Method 2
var sumZero = function(n) {
    let arr = [];
    for(let i = 0 - Math.floor(n / 2) ; arr.length < n; i++){
       if(i === 0 && n %2 === 0) continue;
        arr.push(i)
    }
    return arr;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* Prob - Find Target Indices After Sorting Array
You are given a 0-indexed integer array nums and a target element target.
A target index is an index i such that nums[i] == target.
Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list.
The returned list must be sorted in increasing order.
Example:
Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.
*/

var targetIndices = function(nums, target) {
    nums = nums.sort((a, b) => a - b);
    let ans = []
    for(let i = 0; i < nums.length; i++)
        if(nums[i] == target)
            ans.push(i)
    return ans;
};




/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* 
Prob - Counting Words With a Given Prefix
You are given an array of strings words and a string pref.
Return the number of strings in words that contain pref as a prefix.
A prefix of a string s is any leading contiguous substring of s.
Example:
Input: words = ["pay","attention","practice","attend"], pref = "at"
Output: 2
Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
*/

// Method 1
var prefixCount = function(words, pref) {
    let count = 0;
    for(let i=0; i<words.length; i++){
        if(words[i].length >= pref.length){
            if(words[i].slice(0, pref.length) == pref){
                count++;
            }
        }
    }
    return count;
};


// Method 2
var prefixCount = function(words, pref) {
    return words.filter((i) => i.startsWith(pref)).length;
};


// Method 3
var prefixCount = function(words, pref) {
    let count = 0;
    
    words.forEach(word => {
        if(word.startsWith(pref)) count++;
    })
    
    return count;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* 
Prob - Maximum Number of Pairs in Array
You are given a 0-indexed integer array nums. In one operation, you may do the following:
Choose two integers in nums that are equal.
Remove both integers from nums, forming a pair.
The operation is done on nums as many times as possible.
Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of 
leftover integers in nums after 
doing the operation as many times as possible.

Example:
Input: nums = [1,3,2,1,3,2,2]
Output: [3,1]
Explanation:
Form a pair with nums[0] and nums[3] and remove them from nums. Now, nums = [3,2,3,2,2].
Form a pair with nums[0] and nums[2] and remove them from nums. Now, nums = [2,2,2].
Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [2].
No more pairs can be formed. A total of 3 pairs have been formed, and there is 1 number leftover in nums.
*/

// Method 1
var numberOfPairs = function(nums) {
    let counts = {};
    let pairs = 0;
    for(let num of nums){
        if(num in counts){
            delete counts[num];
            pairs++;
        } else {
            counts[num] = 0;
            counts[num] += 1;
        }
    }
    return [pairs, Object.values(counts).length];
};


// Method 2
var numberOfPairs = function(nums) {
    let left= 0
    let count = 0
    let i = 0
    let temp = nums.sort((a,b) => a-b)
    while(i<nums.length-1) {
        if (nums[i] === nums[i+1]) {
            count++
            nums.shift()
            nums.shift()
        }else {
            i++
        }
    }
    left = nums.length
    return [count, left]    
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* 
Prob - Find Greatest Common Divisor of Array
Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.
The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.
Example:
Input: nums = [2,5,6,9,10]
Output: 2
Explanation:
The smallest number in nums is 2.
The largest number in nums is 10.
The greatest common divisor of 2 and 10 is 2.
*/

// Method 2
function sorting(arr) {
    let temp;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function getDivisors(n) {
    let map = new Map();

    for (let i = 1; i <= n; i++) {
        if ((n % i) == 0) {
            map.set(i, 1);
        }
    }
    return map;
}

var findGCD = function (nums) {
    let arr = sorting(nums);
    let small = arr[0];
    let large = arr[arr.length - 1];
    let map1 = getDivisors(small);
    let map2 = getDivisors(large);
    let itr, val, max = 0;

    itr = map1.keys();
    for (let i = 0; i < map1.size; i++) {
        val = itr.next().value;

        if (map1.has(val) && map2.has(val)) {
            if (max < val) {
                max = val;
            }
        }
    }
    return max;

};


// Method 2
var findGCD = function(nums) {
    let min = Math.min(...nums), max = Math.max(...nums), mcd;
  
    for (let i = 1; i <= max; i++) {
      min % i === 0 && max % i === 0 ? mcd = i : null
    }
  
    return mcd
  };


  // Method 3
  var findGCD = function(nums) {
  
    let smallItem = Math.min(...nums);
    let largeItem = Math.max(...nums)
    let result = 1;
    let i = 2;
  
    while (smallItem >= 2 && i <= largeItem) {
      if (smallItem % i === 0 && largeItem % i === 0) {
        result = i;
      }
      i++;
    }
    return result;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* 
Prob - Find Numbers with Even Number of Digits
Given an array nums of integers, return how many of them contain an even number of digits.
Example:
Input: nums = [12,345,2,6,7896]
Output: 2
*/

// Method 2
var findNumbers = function(nums) {
    let count = 0;
    for(let i=0; i<nums.length; i++){
        nums[i] = nums[i].toString();
        if(nums[i].length % 2 === 0){
            count++;
        }
    }
    return count;
};


// Method 2
var findNumbers = function(nums) {
    let count = 0;
    for (const num of nums) String(num).length % 2 === 0 && count++;
    return count;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* 
Prob - Number of Students Doing Homework at a Given Time
Given two integer arrays startTime and endTime and given an integer queryTime.
The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].
Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval 
[startTime[i], endTime[i]] inclusive.

Example 1:
Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
Output: 1
Explanation: We have 3 students where:
The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.
*/

// Method 1
var busyStudent = function(startTime, endTime, queryTime) {
    return startTime.filter((val,i)=> queryTime>=val && queryTime<=endTime[i]).length;
};


// Method 2
var busyStudent = function(startTime, endTime, queryTime) {
    let countStudent= 0
     for(let i = 0; i < startTime.length; i++ )(startTime[i] <= queryTime && endTime[i] >= queryTime) ? countStudent++ : "";
     return countStudent;
 };


 // Method 3
 var busyStudent = function(startTime, endTime, queryTime) {
    let count = 0;
    var ans=0;
    while(count != startTime.length){
        startTime[count] <= queryTime && endTime[count] >= queryTime ? ans++:""
        count++
    }
    return ans;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB - N-Repeated Element in Size 2N Array
You are given an integer array nums with the following properties:
nums.length == 2 * n.
nums contains n + 1 unique elements.
Exactly one element of nums is repeated n times.
Return the element that is repeated n times.

Example:
Input: nums = [1,2,3,3]
Output: 3
*/

// Method 1
const repeatedNTimes = nums =>
    nums.find((n, i) => nums.indexOf(n) !== i);


// Method 2
var repeatedEle = function(nums){
    const set = new Set();
    for(let item of nums){
        if(set.has(item)){
            return item;
        }
        set.add(item);
    } 
}


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB - Sort Array By Parity
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
Return any array that satisfies this condition.

Example:
Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
*/

var sortArrayByParity = function(nums) {
    let k = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] % 2 == 0){
            let temp = nums[k];
            nums[k] = nums[i];
            nums[i] = temp;
            k++;
        }
    }
    return nums;
};



/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB - Sum of Unique Elements
You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
Return the sum of all the unique elements of nums.

Example:
Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.
*/

var sumOfUnique = function(nums) {
    let obj = {};
    let sum = 0;
    for(let num of nums){
        if(obj[num] === undefined){
            sum += num;
            obj[num] = 1;
        } else if(obj[num] === 1){
            sum -= num;
            obj[num] = -1;
        }
    }
    return sum;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB - Count Negative Numbers in a Sorted Matrix
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.
Example:
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
*/

// Method 1
var countNegatives = function(grid) {
    let i = grid.length;
    let n = grid[0].length;
    let res = 0;
    while(--i >= 0){
        let j=n;
        while(--j >= 0){
            if(grid[i][j] >= 0){
                break;
            }
        }
        res += n-j;
    }
    return res - grid.length;
};

// Method 2
var countNegatives = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let left = 0, right = n-1, count = 0;
    
    while (left < m && right >= 0){
        if(grid[left][right] < 0){
            count += m-left;
            right--;
        } else {
            left++;
        }
    }
    return count;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB - Merge Similar Items
You are given two 2D integer arrays, items1 and items2, representing two sets of items. Each array items has the following properties:
items[i] = [valuei, weighti] where valuei represents the value and weighti represents the weight of the ith item.
The value of each item in items is unique.
Return a 2D integer array ret where ret[i] = [valuei, weighti], with weighti being the sum of weights of all items with value valuei.
Note: ret should be returned in ascending order by value.

Example 1:
Input: items1 = [[1,1],[4,5],[3,8]], items2 = [[3,1],[1,5]]
Output: [[1,6],[3,9],[4,5]]
Explanation: 
The item with value = 1 occurs in items1 with weight = 1 and in items2 with weight = 5, total weight = 1 + 5 = 6.
The item with value = 3 occurs in items1 with weight = 8 and in items2 with weight = 1, total weight = 8 + 1 = 9.
The item with value = 4 occurs in items1 with weight = 5, total weight = 5.  
Therefore, we return [[1,6],[3,9],[4,5]].
*/

// Method 1
var mergeSimilarItems = function(items1, items2) {
    const obj = {};
    const arr = items1.concat(items2);
    for(let i=0; i < arr.length; i++){
        if(!obj[arr[i][0]]){
            obj[arr[i][0]] = arr[i][1];
        } else {
            obj[arr[i][0]] += +arr[i][1];
        }
    }
    return Object.entries(obj);
};


// Method 2
var mergeSimilarItems = function(items1, items2) {
    let map = {};
     const items = [...items1, ...items2];
     for(let [val, weight] of items){
         if(map[val]){
             map[val] += weight;
         } else {
             map[val] = weight;
         }
     }
     return Object.entries(map);
 };


 
