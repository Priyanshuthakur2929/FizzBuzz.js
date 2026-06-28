function outer(){
    let outer = "i am outer function";

    function inner(){
        console.log(outer);
    }
    return inner;
}
     


