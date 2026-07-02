/*for(i=10; i>=0; i--){
    console.log(i);
}*/
// SUM OF N NATURALS NUMBER;----------------------------------------------------------------------

/*let num = Number(prompt("Enter a Number:"));

if(isNaN(num)) console.log("invalid input");
else{
    if(num>=0) console.log("The number is Positive");
       
    
    else{
        console.log("The number should be Positive");
    }
}*/

// CONTINUE LOOP;
/*for(var i = 1; i < 100; i++){
    if(i===5){
        continue;
    }
    console.log(i);
}*/

//BREAK LOOP;
 /*for(let i=0; i<=100; i++){
    if(i===3){
        break;
    }
    console.log(i);
 }*/

    // WHILE LOOP;

    /*var name = prompt("Enter a Name:(Priyanshu for close) ");
    while(name!="Priyanshu"){
        console.log("Entered wrong name,please try again");
    }*/

       /* let n = 5;
        while(n>=1){
            console.log("*");
            n--;
        }*/
// PRINT NUMBERS FROM 1 TO 15;
         /*   for(let i = 1; i<=15; i++){
                console.log(i);
            }*/
// PRINT EVEN NUMBERS FROM 1 TO 20;
               /* for( let i = 2;i<=20 ; i+=2){
                    console.log(i);

                }*/

                   /* let i = 1;
                    while(i<=15){
                        console.log(i);
                        i++;
                    }*/

                        /*let num = Number(prompt("Enter a number:"));
                        while(num!=0){
                            console.log(num);
                            num = Number(prompt("Enter a number:"));    
                        }*/

                           /*let num = Number(prompt("Enter a number:"));
                            if(isNaN(num)) console.log("Invalid Input");
                            else{
                                if(num>=0) console.log("The number is positive");
                                else console.log("The number is negative");
                            }*/
   
          /*  let num = Number(prompt("Enter a number:"));
            if(num/2==0){
                console.log("The Number is Even");
            }
            else{
                console.log("The Number is odd");
            }*/
           // FOR LARGEST OF TWO NUMBERS
          /*let prompt = require('prompt-sync')(); ;
           let a = Number(prompt("Enter first number:"));
           let b = Number(prompt("Enter second number:"));
           if(a>b) console.log("Largest number is:"+a);
           else console.log("largest number is:"+b);*/

          /* let prompt = require('prompt-sync')();;
           let n = Number(prompt("Enter a number:"));
           let i;
              for(i=1; i<=n; i++){
            if(i%2==0){
                console.log("The Number is Even:"+i);
            }
            else{
                console.log("The Number is Odd:"+i);
            }

        }*/

            //sum of 1 to 100
         /*   let sum = 0;
            for(let i =1; i<=100; i++){
                sum = sum + i;

            }
            console.log("The sum is:",sum);*/

            // print of no.. 1 to 50 but skips no..divisible by 5;;;;;;;;

            /*for(let i=1; i<=50; i++){
                if(i%5==0){
                    i++;
                }
                console.log(i);
            }*/

                /*for(let i=1; i<=100; i++){
                    if(i%2==0){
                        console.log("Even Number is:"+i);
                    }
                }*/

                   /* for(let i=1; i<=10; i++){
                        if(i%2!==0){
                            console.log("odd number is:"+i);
                        }
                    }*/
/// REVERSE A STRING;
                 /*   let s = "Priyashu"
                    let rev = "";
                    for(let i = s.length-1; i>=0; i--){
                        rev += s[i];
                    }
                    console.log(rev);*/
// PRINT ELEMENTS OF AN ARRAY greater THAN OR EQUAL TO 10;
           /* let arr = [5,12,8,20,3,15];
            let count =0;
            for(let i =0; i<=arr.length;i++){
                if(arr[i]<=10){
                    i++;
                    console.log(arr[i]);
                }

            }    */
           
               /* for(let i =7; i<=70; i++){
                    if(i%7==0){
                        console.log(i);
                    }
                }*/

                 /* let sentemce = "Hello Priyanshu Thakur! Welcome to Java Script loops.";
                  let words = sentemce.split(" ");
                  let longestword = "";
                  for(let i=0; i<words.length; i++){
                    if(words[i].length>longestword.length){
                        longestword = words[i];
                    }
                  }
                  console.log("The longest word is:",longestword);*/

      /*  for(let i=1; i<=10; i++){
            console.log(i);
        }  */
       
          /*  for(let i=1; i<=100; i++){
                if(i%5==0){
                    console.log(i);
                }
            }*/


    ////do-while loop;..................................................

    /*let num = 1234;
    let sum =0;

    do{
        sum += num%10;
        num = Math.floor(num/10);
    } while(num>0);
    console.log("Sum of digits:", sum);*/

  /*  let num = 1020;
    let sum =0;
    do{
        sum += num%10;
        num = Math.floor(num/10);
    }while(num>0);
    console.log("Sum of digits:",sum);*/

    // factorial of a number;
   /* let num = 5;
    let facto = 1;
    do{
        facto *= num;
        num--;
    }
    while(num>=1);
    console.log("Factorial of 5 is:", facto);*/

    /*let i =2;
    do{
        if(i%2==0){
           
            i++;
        }
        
    }
    while(i<=20);
    console.log(i);*/

   /** *let i = 1;
    let sum = 0;

    do{
        sum += i;
        i++;

    }while(i<=20);
    console.log("The sum is:",sum);**/

    