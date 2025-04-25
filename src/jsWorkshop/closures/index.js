// create a counter function which has increament and getvalue functionlity

function myCounter() {
    var i = 0;
    return {
        increment: () => {i++},
        getValue: () => i
    }; 
}

const counter = myCounter();
counter.increment();
counter.increment();
console.log(counter.getValue());

console.dir(counter);

//here i is in closure scope and we are not expposing it publicly directly. 
//like this we can handle secaret which will reside inside function but with the help of closure pattern we will expose it publically
