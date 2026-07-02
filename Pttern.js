/*const n = parseInt(process.argv[2], 10) || 6;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write('*');
    }
    process.stdout.write('\n');
}*/

/*let n = 4;
for(let i=1; i<=n; i++ ){
    let row = " ";
    for(let j=1; j<=n; j++)
        row += " * ";
    console.log(row);
}       */
//-----------------STAR PATTERN---------------//
   /* let n = 5;
    for(let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            process.stdout.write(" * ");
        }
        process.stdout.write("\n");
    }*/

            //INVERTED STAR PATTERN//I\
 /*let n = 5;
 for(let i = 5; i>=1; i--){
    for(let j = 1; j<=i; j++){
        process.stdout.write(" * ");
    }
    process.stdout.write("\n");
 }*/

//-----------------X PATTERN---------------//
let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a number "))

for(let i = 1; i<=n; i++){
    for(let j =1; j<=i+1; j++){
        process.stdout.write(" * ");
    }
    process.stdout.write("\n");
}

