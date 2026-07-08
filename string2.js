/*function reverseString(str){
    return str.split('').reverse().join('');
    
}
console.log(reverseString("Hello World"));
console.log(reverseString("Priyanshu"));*/

/*function reversestring(str){
    return str.split("").reverse("").join("")
}
console.log(reversestring("rahul"));*/

/*function reversestring(str){
    reversed = "";
    for(let i=str.length-1; i>=0; i--){

    reversed += str[i];
    }
    return reversed;
}
console.log(reversestring("raj"));*/

function ispallindrome(str){
    let reversed = str.split("").reverse("").join("");
    return reversed===str;
}
console.log(ispallindrome("hello"));