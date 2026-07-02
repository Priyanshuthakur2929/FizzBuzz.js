/*let arr = []
arr.push(100);
arr.push(101);
arr.push("Raj");
arr.push(102);
arr.push("Hello");
console.log(arr);
arr.splice(2,1);
console.log(arr);

console.log(arr.length);*/

// FINDING MAXIMUM  NUMBER IN AN ARRAY;
 /*let arr = [10,20,70 ,40,50];
      let max = arr[0];
      
           for(let i = 0; i<arr.length;i++){
                    if(arr[i]>max){
                              max = arr[i];
    }
}
                                console.log("Maximum value is:",max);*/

          // SWAPPING OF NUMBERS;
          
         /* let arr = [0,1,0,1,1,0,0,1,0];

          let i = 0,j =0;
          while(i<arr.length){
            if(arr[i]==0){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] =  temp;
                j++;

            }
            i++;

          }
     console.log(arr);*/

     // SORTING OF ARRAY;

     /*let arr = [1,1,0,1,0,1,0,0,1];
     let i =j =k =0;
     while(i<k){
      if(arr[i]==0){
        swap(arr,i,j);
        i++;
        j++;

      }
      else if(arr[i]==2){
        swap(arr,i,k);
        k--;
      }
      else{
        i++
      }
     }
     console.log(arr);*/

     /*const arr = [1, -1, 0, 2, -1, 1];
const totalSum = arr.reduce((acc, num) => acc + num, 0);
console.log(totalSum);*/

// KADANE'S ALGORITHM TO FIND MAXIMUM SUBARRAY SUM;

/*function kadane(arr) {
    let maxSoFar = arr[0];   // best sum found so far
    let currentSum = arr[0]; // sum of current subarray

    for (let i = 1; i < arr.length; i++) {
        // either extend the current subarray OR start new from arr[i]
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSoFar = Math.max(maxSoFar, currentSum);
    }

    return maxSoFar;
}

// Example usage:
console.log(kadane([1, -2, 3, 5, -1, 2])); // Output: 9 (subarray [3,5,-1,2])*/

//let fruits = ["apple", "banana", "mango", "orange"];
/*console.log(fruits);
fruits.push("grape");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.splice(3, 1);
console.log(fruits);
console.log("Length of array is:",fruits.length);*/
/*for(let i=0;i<=fruits.length-1;i++){
  console.log(fruits[i]);
}*/

/*fruits1 = ["kiwi", "pineapple"];
fruits2 = ['mango', 'papaya'];
let allfruits = (fruits1.concat(fruits2));
console.log(allfruits);*/

//FIND()---------------------------------------------------------------------------
/*let arr = [1,2,12, 0 ,7,5,6];
let result = arr.find(num => num > 5);
console.log(result);*/

//LARGEST NUMBER IN AN ARRAY-------------------------------------------------------
/*let arr = [12,113,541,65];
let maxarr = arr[0];
for(let i =1; i<arr.length;i++){
  if(arr[i]>maxarr){
    maxarr = arr[i];
  }  
}
console.log(maxarr);*/

//SECOND LARGEST NUMBER IN AN ARRAY------------------------------------------------
/*let arr = [12,113,541,65];
let first = -Infinity;
let second = -Infinity;
for(let i =0; i<arr.length;i++){
  if(arr[i]>first){
     second = first;
      first = arr[i];
  }
  else if(arr[i]>second && arr[i] != first){
   second = arr[i];
  }
}
console.log(second);*/

//REVERSE AN ARRAY----------------------------------------------------------------
/*let arr = [12,113,541,65];
let reversedArr = [];
for(let i=arr.length-1; i>=0; i--){
  reversedArr.push(arr[i]);
}
console.log(reversedArr);*/

/*let arr = [12,113,541,65];
let largest = arr[0];
for(let i=1; i<arr.length; i++){
  if(arr[i]>largest){
    largest = arr[i];
  }
}
console.log(largest);*/

/*let arr = [12,113,541,65];
let smallest = arr[0];
for(let i=1; i<arr.length; i++){
  if(arr[i]<smallest){
    smallest = arr[i];
  }
}
console.log("the smallest number of array is:",smallest);*/

/*let arr = [12,113,541,65];
let reverseArr = [];
for(let i=arr.length-1;i>=0;i--){
  reverseArr.push(arr[i]);

}
console.log(reverseArr);*/

/*let arr = [12,113,541,65];
let sum = 0;
for(let i=0; i<arr.length; i++){
  sum += arr[i];

}
console.log(sum);*/

/*let arr = [12,113,541,65];
let average = 0;
for(let i=0; i<arr.length;i++){
  average = average + arr[i];
}
average = average/arr.length;
console.log(average);*/

/*let arr = [12,113,541,65];
let evenarr = [];
for(let i=0; i<arr.length; i++){
  if(arr[i]%2==0){
    evenarr.push(arr[i]);
  }
}
console.log(evenarr);*/

/*let arr = [ 1,1,2,3,4,1,2,5,6,7,8];
let duplicates=[];
for(let i=0; i<arr.length;i++){
  for(let j=i+1; j<arr.length; j++){

    if(arr[i]==arr[j] && !duplicates.push(arr[i])){
      duplicates.push(arr[i]);
      console.log("The duplicate elements in the array are:",arr[i]);
    }
  }
}
console.log("All duplicate elements:", duplicates);*/


/*let arr = [ 1,2,3,4,5];
let reversed = [];
for(let i = arr.length-1; i>=0;i--){
  reversed.push(arr[i]);
}
console.log(reversed);*/

/*let arr = [ 1,2,3,4,5.9999,19900];
let max = arr[0];
for(let i =0; i<=arr.length-1; i++){
  if(arr[i]>max){
    max = arr[i];
  }
}
console.log("The largest number in the array is:", max);*/

/*let arr = [1,1,2,3,4,5,5,3,,4];
let unique = [];
for(let i =0; i<arr.length; i++){
  for(let j = i+1; j<arr.length; j++){
    if(arr[i]==arr[j] && !unique.includes(arr[i])){
      unique.push(arr[i]);
      console.log("The unique elements in the array are:",arr[i]);
    }
  }
    }*/


  
