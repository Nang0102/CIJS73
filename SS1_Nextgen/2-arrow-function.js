console.log("Arrow function")
// function exphresion, hoisting support
function sum(a,b){
    console.log("adding2 number")
    return a+b;
}
// anoumoú function, no hoisting support
const multi =function(a,b){
    console.log("multi")
    return a * b;
}
 
// arrow function, no hóiting support
function sub(a,b){
    console.log("subtractting 2 number")
    return a-b;
}


const devideBy = (a,b) => a/b;
const getAddress=() => ({city: "Hanoi"})

