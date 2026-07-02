//LEFT ROTATION OF AN ARRAY BY ONE POSITION
/*let arr = [1,2,3,4,5,6,7];

let copy = arr[0];

for(let i=0; i<=arr.length-1;i++){
    arr[i] = arr[i+1];

}
arr[arr.length-1] = copy;
console.log(arr);*/

//right rotation of an array by one position:

/*let arr = [1,2,3,4,5,6,7];
let copy = arr[arr.length-1];

for(let i = arr.length-1; i>0;i--){
    arr[i] = arr[i-1];

}
arr[0] = copy;
console.log(arr);*/


//MERGE TWO SORTED ARRAYS INTO A SINGLE SORTED ARRAY

/*let arr1 = [1,2,3,4];
let arr2 = [5,6,8];
let merge = new Array(arr1.length + arr2.length);
let i = j = k = 0;

while(i <arr1.length && j <arr2.length){
    if(arr1[i]<arr2[j]){
        merge[k++] = arr1[i++];
    }
    else{
        merge[k++] = arr2[j++];
       
    }
}
  while(j<arr2.length){
    merge[k++] = arr2[j++];
  }
  while(i<arr1.length){
    merge[k++] = arr1[i++];
  }
  console.log(merge);*/

 /* let arr1 =  [1,3,5,0,0,0,0];
  let arr2 = [2,4,6];
   let merge = new Array(arr1.length + arr2.length );
   let i = j=k=0;

   while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        merge[k++] = arr1[i++];
    }
    else{
        merge[k++] = arr2[j++];
    }
   }
   while(i<arr1.length){
    merge[k++] = arr1[i++];
   }
   while(j<arr2.length){
    merge[k++] = arr2[j++];
   }
   console.log(merge);*/

  // console.log(Math.PI);

 // console.log(Math.random());

 //let arr = [12,113,541,65];
 /*let max = arr[0];
 for(let i =1; i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
}
console.log(max);*/
//console.log(Math.min(...arr));


/*let arr = [12,113,541,65];
for(let i=0; i<arr.length;i++){
    for(let j=i+1; j<arr.length;j++){
        if(arr[i]>arr[j]){
            let temp = arr[i];
            arr[i]= arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr);*/

/*let arr = [12,113,541,65];
let largest = 0;
for(let i=0;i<=arr.length-1;i++){
    if(arr[i]>largest){
        largest = arr[i];
    }

}
console.log(largest);*/

/*let arr = [2,4,5,6,7,8,9,12];
let  count= 0 ;
for(let i=0; i<=arr.length-1;i++){
    if(arr[i]%2==0){
        count++;
    }
}
console.log("The number of even elements in the array is:"+count);*/
// reverse an array.......................................................................
/*let arr = [2,4,5,6,7,8,9,12];
let rev=[];
for(let i=arr.length-1; i>=0;i--){
    rev.push(arr[i]);

}
console.log(rev);*/

//sum of elements in an array....................................................
/*let arr = [2,4,5,6,7,8,9,12];
let sum = 0;
for(let i =0;i<=arr.length-1;i++){
    sum += arr[i];
}
console.log(sum);*/

//finding duplicate elements in an array..........................................
/*let arr = [2,4,5,6,7,8,9,12,4,5,2];
let duplicates = [];
for(let i =0; i<=arr.length-1;i++){
    duplicates.push(arr[i]);
    for(let j=i+1; j<=arr.length-1;j++){
        if(arr[i]==arr[j]){
            console.log("The duplicate elements in the array are:"+arr[j]);
        }
    }

}
console.log(duplicates);*/

// missing number in an array..................................................
/*const arr= [1,2,3,4,6,7];
const n = arr.length +1;
const total = (n*(n+1))/2;
let sum =0;
for(let i=0;i<=arr.length-1;i++){
    sum += arr[i];
}
const missingnumber = total - sum;
console.log("The missingnumber in the array is:"+missingnumber);*/

// finding maximumnumber in an array..................................................
/*let arr = [1,2,3,4,5];
let maximumnumber = arr[0];
while(arr.length>maximumnumber){
    for(let i=0; i<=arr.length-1;i++){
        if(arr[i]>maximumnumber){
            maximumnumber = arr[i];

        }
    }

}
console.log(maximumnumber);*/


// second largest number in an array..................................................
/*let arr = [1,2,3,4,5];
let largest = -Infinity;
let secondlargest = -Infinity;
for(let i=0; i<=arr.length-1;i++){
    if(arr[i]>largest){
        secondlargest = largest;
        largest = arr[i];

    }
    else if(arr[i]>secondlargest && arr[i]!=largest){
        secondlargest = arr[i];
    }
}
console.log("The second largest number in the array is:"+secondlargest);*/

 // duplicate elements in an array..................................................
/* let arr = [1,2,3,4,5,2,3];
 let duplicates = [];
 for(let i=0; i<=arr.length-1; i++){
    for(let j=i+1; j<=arr.length-1; j++){
        if(arr[i]==arr[j] && !duplicates.includes(arr[i])){
            duplicates.push(arr[i]);
            console.log("The duplicate elements in the array are:"+arr[i]);
        }
    }
 }*/

    //a number is even or odd.........................

/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (input) => {
  let num = parseInt(input);
  
  if(num%2==0){
    console.log('The num is even: '+num);
  }
  else {
    console.log('The number is odd: '+num);
  }
  
  console.log(num);
  rl.close();
});*/


// REVERSE OF ARRAY:------

/*let arr = [5,4,3,2,1];
let reversed = [];

for(i=arr.length-1; i>=0; i--){
    reversed.push(arr[i]);
}
console.log(reversed);*/

 /*let arr = [5,4,3,2,1];
 let max = [0];
 for(i=0;i<=arr.length-1;i++){
    if(arr[i]> max){
         max = arr[i];
    }
 }
 console.log(max);*/

 // REMOVE DUPLICATE

 let arr = [1,2,2,3,4,5,5];
 let original = [];
 for(i=0;i<arr.length-1;i++){
    if(!original.includes(arr[i])){
        original.push(arr[i]);
    }
      
 }
 console.log(original);
 console.log("The length of the array is:",arr.length);

 