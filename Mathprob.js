let a = 20, b = 30;

while(a!=b){
    if(a>b) a = a-b;
    else b = b - a;
}
console.log("GCD is:", a);