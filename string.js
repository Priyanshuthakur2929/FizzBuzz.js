/*let s = "priyanshu";
/*let rev = "";
for(let i = s.length; i>=0; i--){
    rev = rev + s.charAt(i);
}
console.log(rev);
console.log(s.repeat(5)); 
console.log(s.split("").reverse().join("")); */

//const PromptSync = require("prompt-sync");

/// PALLINDROME CHECKING-------------------------------------------------------------------------------

/*let s = prompt("Enter a string");
let rev = " ";
for(let i = s.length - 1; i>=0; i--){
    rev = rev + s.charAt(i);
}
if(s == rev){
    console.log("It is a palindrome");
}
else{
    console.log("It is not a palindrome");
}*/

/*let s = "priyanshu";
let reverse = "";
for(let i = s.length-1; i>=0;i--){
    reverse = reverse + s.charAt(i);
}
console.log(reverse);
/*console.log(s.length);
console.log(s.charAt(4));
console.log(s.indexOf('a'));
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.includes("raj"));
console.log(s.includes("yan"));
console.log(s.startsWith("pri"));
console.log(s.startsWith("mdhsh"));*/
//console.log(s.reverse);

/*let s = "THAKUR"
let rev = "";
for(let i = s.length-1;i>=0; i--){
    rev = rev + s.charAt(i)
}
console.log(rev);*/

/*let s = "Hello World";
let r = s.replace(" ","")
console.log(r);*/

/*let s = "Hello World";
let count = 0;
for(let char of s){
    if(char === "o"){
        count++;
    }
}
console.log(count);*/
//pallindrome using built in function
/*let s = 'priyanshu';
let reversed = s.split('').reverse().join('');
console.log(s == reversed);*/

//non repeating character
/*let s = 'aabbcdd';
for(let i =0; i<s.length;i++){
    let isUnique = true;
    for(let j =0; j<s.length;j++){
        if(i != j && s[i] === s[j]){
            isUnique = false;
            break;
        }
    }
    if(isUnique){
        console.log(s[i]);
        break;
    }
}*/

// COUNT VOWELS IN A STRING;
/*let s = "priyanshu thakur";
let count = 0;
for(let char of s){
    if(char=="a" || char == "e" || char == "i" || char == "o" || char == "u"){
        count++;
    
    }

}
    console.log("Number of vowels are:",count);*/

// PATTERN PROGRAM;
let n = 5;                                                      
for(let i =1; i<=n; i++){
    for(let j =1; j<=i; j++){
        process.stdout.write("*")
    }
    console.log()
}