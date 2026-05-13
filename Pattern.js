/*module.exports = require('./Pttern.js');
for(var key in module.exports) {
    for(var i=0;i<key.length;i++) {
        console.log(key[i]);
    }
}*/


/*let n =5;
for(let i =n; i>=1; i--){
    for(let j =1; j<=i; j++){
        process.stdout.write(" * ");
    }
    process.stdout.write("\n");
}*/
// right angled triangle
/*let n = 5;
for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write(j+"");
    }
    process.stdout.write("\n");
}*/

//pyramid pattern
/*let n =5;
for(let i=1; i<=n; i++){
    for(let j=1; j<=n-i; j++){
        process.stdout.write(" ");
    }
    for(let k=1; k<=2*i-1; k++){
        process.stdout.write("*");
    }
    process.stdout.write("\n");

}*/
/*let n = 5;
for(let i=1; i<=n; i++){
    let row = "  ";
    for(let j=1; j<=n; j++){
        row += " * ";
    }
    console.log(row);
}*/


/*for(let i=1; i<=4; i++){
    process.stdout.write(" ");
    for( let j =1; j<=4; j++){
        process.stdout.write(" * ");
    }
    process.stdout.write("\n");

}*/


// RIGHT ANGLED TRIANGLE
/*for(let i =1; i<=5; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write("* ");
    }
    process.stdout.write("\n");
}*/
// INVERTED TRAINGLE.............................
for(let i = 5; i>=1; i--){
    for(let j=1; j<=i; j++){
        process.stdout.write("* ");
    }
    process.stdout.write("\n");
}
 


