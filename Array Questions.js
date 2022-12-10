
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








