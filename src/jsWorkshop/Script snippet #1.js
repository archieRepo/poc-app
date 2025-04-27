let find10 = new Promise((resolve, reject) => {
    let number = 10;
    if(number === 10){
        resolve(10);
    }else{
        reject("the number is not 10");
    }
})

let find11 = new Promise((resolve, reject) => {
    let number = 11;
    if(number === 10){
        resolve(10);
    }else{
        reject("the number is not 10");
    }
})

Promise.allSettled([find10, find11]).then((values) => {
    return console.log(values) // [10, 10]
}).catch((error) => {
    return console.log(error) // "the number is not 10"
})