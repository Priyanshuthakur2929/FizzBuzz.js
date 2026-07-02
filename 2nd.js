/*let ans = Number(prompt("Enter a Number:"))

if(isNaN(ans)){
    console.log("This is Wrong Input");
}
 if(ans>=18){
    console.log("You are Eligible for Vote");
}
else{
    console.log("You are not Eligible for Vote");
}*/


/*let amount = Number(prompt("Enter Total amount:"));

if(amount>0 && amount<=5000){
    console.log(amount-Math.floor((5*amount)/100));
}
else if(amount>5000 && amount<=10000){
    console.log(amount-Math.floor((10*amount)/100));
}
else if(amount>10000 && amount<=20000){
    console.log(amount-Math.floor((15*amount)/100));
}
else if(amount<=0){
    console.log("Invalid Amount");
}*/

/*let unit = Number(prompt("Enter unit consumed:"));//700

if(unit>400){
    amount = (unit-400)*13;
   unit = 400
}
if (unit>200 && unit<=400){
    amount += (unit-200)*8;
    unit =200
}
if(unit>100 && unit<=200){
    amount += unit(unit-100)*6
    unit = 100
}
amount += unit*4;
console.log("TOTAL AMOUNT:",amount);*/


/*let age = 18; // Ternary operator
let canVote = age>=18 ? "you can vote": "you cannot vote";
console.log(canVote);*/

// Switch Case

let day = prompt("Enter case ");
switch(day){
    case "raj": console.log("Priyansh");break;

    case "Kumar": console.log("Ankit");break;

    case "Singh": console.log("rahul");break;

    default: console.log("INVALID INPUT");
}