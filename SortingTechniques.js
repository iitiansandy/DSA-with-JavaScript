
/*
PROB - SELECTION SORT METHOD
*/

var selectionSort = function (arr){
    for(let i=0; i<arr.length - 1; i++){
        let min = arr[i];
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++){
            if(arr[j] < min){
                min = arr[j];
                minIndex = j;
            }
        }
        if(minIndex != i){
            arr[minIndex] = arr[i];
            arr[i] = min;
        }
    }
    return arr;
}

// console.log(selectionSort([2,6,9,1,5]))


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/*
PROB - BUBBLE SORT METHOD
*/

var bubbleSort = function(arr){
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// console.log(bubbleSort([8,2,6,1,5]));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/*
PROB - INSERTION SORT METHOD
*/

var insertionSort = function(arr){
    for(let i=1; i<arr.length; i++){
        let j = i-1;
        let temp = arr[i];

        while(j >= 0 && arr[j]>temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1]=temp;
    }
    return arr;
}
// console.log(insertionSort([6,4,3,5,2]));



/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/*
PROB - MERGE TWO SORTED ARRAYS
*/

var mergeSort = function(arr1, arr2){
    let i=0, j=0, k=0;
    let ans = [];

    while (i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            ans[k] = arr1[i];
            k++;
            i++;
        } else {
            ans[k] = arr2[j];
            k++;
            j++;
        }
    }
    while(i < arr1.length){
        ans[k] = arr1[i];
        k++;
        i++;
    }
    while(j < arr2.length){
        ans[k] = arr2[j];
        k++;
        j++;
    }
    return ans;
}
console.log(mergeSort([1,3,5,7], [2,4,6]));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB - Merge Sort Algorithm

*/

function mergeSort(arr){
    if(arr.length <= 1) return;

    let mid = parseInt(arr.length/2);
    let part1 = [];
    let part2 = [];

    for(let i=0; i<mid; i++){
        part1[i]=arr[i];
    }

    //let k=0;
    for(let i=mid; i<arr.length; i++){
        part2[i-mid]=arr[i];
        //k++;
    }
    mergeSort(part1);
    mergeSort(part2);
    merge(part1, part2, arr);
}

function merge(arr1, arr2, output){
    let i=0, j=0, k=0;
    
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            output[k] = arr1[i];
            k++;
            i++;
        }
        else{
            output[k]=arr2[j];
            j++;
            k++;
        }
    }

    while(i < arr1.length){
        output[k] = arr1[i];
        k++;
        i++;
    }

    while(j < arr2.length){
        output[k]=arr2[j];
        j++;
        k++;
    }
    return output;
}

// let arr = [9,8,7,1,5,6,4,2,3];
// mergeSort(arr);
// console.log(arr);


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB - Quick Sort
Given an array of integers. Sort the array using quick sort algorithm in ascending order.
*/

function quickSort(arr){
    if(arr.length <= 1) return arr;
    else {
        var left = [], right = [], newArr = [], pivot = arr.pop(), length = arr.length;
        for(var i=0; i<length; i++){
            if(arr[i] <= pivot){
                left.push(arr[i]);
            }
            else {
                right.push(arr[i]);
            }
        }
        return newArr.concat(quickSort(left), pivot, quickSort(right));
    }
}

let arr = [9,8,7,1,5,6,4,2,3];
console.log(quickSort(arr));



