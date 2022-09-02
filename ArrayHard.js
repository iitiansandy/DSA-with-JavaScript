
/*
PROB 1 - Sliding Window Maximum
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. 
You can only see the k numbers in the window. Each time the sliding window moves right by one position.
Return the max sliding window.
Example:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
*/

// BRUTE FORCE METHOD

var maxSlidingWindow = function(nums, k) {
    let n=nums.length
    let result=[]
    for(let i=0;i<n-k+1;i++){
        let max=nums[i]
        for(let j=i;j<i+k;j++){
            if(max<nums[j]){
                max=nums[j]
            }
            
        }
        result.push(max)
    }
   return result
}
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3));