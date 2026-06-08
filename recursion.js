/*function temp(n){
    if(n==10){
        return;
    }
    console.log(n);
    temp(n+1);
}
temp(0);*/

/*function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }

}
console.log(factorial(5));*/

/*function fibonacci(n){
    if(n <= 1){
        return n;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
console.log(fibonacci(6));*/

function sumofarray (arr, n){
    if(n==0){
        return 0;
    }
    else{
        return arr[n-1] + sumofarray(arr, n-1);
    }
    }
let arr = [1, 2, 3, 4, 5];
let n = arr.length;
console.log(sumofarray(arr, n));