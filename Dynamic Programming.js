
/*
Prob: Trapping Rain Water
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
Example: Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water 
(blue section) are being trapped.
*/

// Method 1 (Dynamic Programming) 
// TC --> O(n);  SC --> O(n);

var trap = function(height) {
    if(height == null || height.length === 0) return 0;

    let res = 0;
    let l = height.length;
    let lMax = {};
    let rMax = {};

    lMax[0] = height[0];
    for (let i=1; i<l; i++) {
        lMax[i] = Math.max(height[i], lMax[i-1]);
    }
    rMax[l-1] = height[l-1];
    for (let i=l-2; i>=0; i--) {
        rMax[i] = Math.max(height[i], rMax[i+1]);
    }
    for (let i=0; i<height.length; i++) {
        res += Math.min(lMax[i], rMax[i]) - height[i];
    }
    return res;
};


// Method 2 (Stack)
// TC --> O(n);  SC --> O(n);
var trap = function(height) {
    let res = 0;
    let i = 0;
    const st = [];

    while (i<height.length) {
        while (st.length !== 0 && height[i] > height[st[st.length-1]]) {
            const top = st[st.length-1];
            st.pop();
            if (st.length === 0) break;
            const dist = i - st[st.length-1] - 1;
            const h = Math.min(height[i], height[st[st.length-1]]) - height[top];
            res += dist * h;
        }
        st.push(i);
        i++;
    }
    return res;
};


// Method 3 (Two Pointer)
// TC --> O(n);  SC --> O(n);
var trap = function(height) {
    if (height == null || height.length === 0) return 0;
    let l = 0;
    let r = height.length-1;
    let lMax = 0;
    let rMax = 0;
    let res = 0;
    while (l < r) {
        lMax = Math.max(lMax, height[l]);
        if (height[l] < lMax) {
            res += lMax - height[l];
        }
        rMax = Math.max(rMax, height[r]);
        if (height[r] < rMax) {
            res += rMax - height[r];
        }
        height[l] < height[r] ? l++ : r--;
    }
    return res;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */




