// LIVE CODING MENTOR: VISHAL


/*
PROB: FIND THE DUPLICATE IN A GIVEN ARRAY.
let arr = nums = [1,3,4,2,2]
*/

function findDuplicate(arr) {
    if (!arr.length) {
        return false;
    }
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    //let res = [];
    for (let pairs of map) {
        if (pairs[1] > 1) {
            return pairs[0];
        };

        return -1;
    }
    //return res;
}

// let arr = [];
// console.log(findDuplicate(arr));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


// MERGE TWO SORTED ARRAYS
// const arr1 = [1, 3, 4, 5]
// const arr2 = [2, 4, 6,8]


function mergeTwoArrays(arr1, arr2) {
    let i = 0, j = 0, k = 0;
    let output = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            output[k] = arr1[i];
            k++;
            i++;
        } else {
            output[k] = arr2[j];
            k++;
            j++;
        }
    }

    while (i < arr1.length) {
        output[k] = arr1[i];
        k++;
        i++;
    }

    while (j < arr2.length) {
        output[k] = arr2[j];
        k++;
        j++;
    }
    return output;
}

const arr1 = [1, 3, 4, 5]
const arr2 = [2, 4, 6, 8]

// let res = mergeTwoArrays(arr1, arr2);
// console.log(res);


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


// PROB: Print triplets with sum less than k
//const arr = [5, 1, 3, 4, 7], sum = 12;
// Brute Force
function findTriplet(arr,sum){
    for(let i=0; i<arr.length-2; i++){
        for(let j=i+1; j<arr.length-1; j++){
            for(let k=j+1; k<arr.length; k++){
                if(arr[i] + arr[j] + arr[k] <sum){
                    console.log(arr[i], arr[j], arr[k])
                }
            }    
        }
    }
}
// const arr = [5, 1, 3, 4, 7], sum = 12;
// findTriplet(arr,sum);


// Method 2 (Optimized)

function getTriplet(arr, sum){
    arr.sort((a,b)=>a-b);

    // Every iteration of loop
    // counts triplet with
    // first element as arr[i].
    for(let i=0; i<arr.length-2; i++){
        // Initialize other two elements
        // as corner elements of subarray
        // arr[j+1..k]
        let j = i+1, k = arr.length-1;

        // Use Meet in the
        // Middle concept
        while(j < k){
            // If sum of current triplet
            // is more or equal, move right
            // corner to look for smaller values
            if(arr[i] + arr[j] + arr[k] >= sum){
                k--;
            }
            // Else move left corner
            else {
                // This is important. For
                // current i and j, there
                // are total k-j third elements.
                for(let x = j+1; x <= k; x++){
                    console.log(arr[i], arr[j], arr[x]);
                }
                j++;
            }
        }
    }
}

// let arr = [ 5, 1, 3, 4, 7 ], sum = 12;
// getTriplet(arr, sum)



