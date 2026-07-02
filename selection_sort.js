/*let arr = [64, 25, 12, 22, 11];
function selectionsort(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i]= arr[j];
                arr[j]= temp;
            }
        }
    }
    return arr;
}
console.log(selectionsort(arr))*/

let arr =[ 2,4,3,5,9,1]
function selectionsort(arr){
    for(let i=0; i<arr.length;i++){
        
        for(let j=i+1; j<arr.length; j++){
            let min = i;
            if(arr[j]<arr[min]){
                min =j;
            }
        }
        // Swap the found minimum element with the first element
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}