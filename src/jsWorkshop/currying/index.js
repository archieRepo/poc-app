// Write a function which helps to achieve multiply(a)(b) and returns product of a and b

const myMultiply = (a) => {
    return (b) => a*b;
}
console.log(myMultiply(5)(4));


const myNewMultiply = (a) => (b) => a*b; //same as above function but with arrow function syntax

console.log(myNewMultiply(5)(4));

const curry = () => {
    return 
}

var ccc = undefined;

console.log(typeof ccc)