let arr = [64, 34, 25, 12, 22, 11, 90];
let n = arr.length;
for(let i = 0; i < n-1; i++){
    let min_indx = i;
    for(let j = i+1; j<n; j++){
        if(arr[j]<arr[min_indx]){
            min_indx = j;
        }
    }
    if(min_indx != i){
        let temp = arr[min_indx];
        arr[min_indx] = arr[i];
        arr[i] = temp;
    }
}
console.log(arr);