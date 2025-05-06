/*
Problem :- Check if the array is balanced array or not. 
Description:- A balanced array is defined to be an array where for every value n in the array, -n is also in the array.

 

Example 1:- {-2, 3, 2, -3} is a balanced array.

Example 2:- {1,1,-1,-1} is a balanced array.

Example 3:- {1,1,-1} is a NOT balanced array.

Example 4:- {-2, 3, 2, -3, 0, 5,-5} is a balanced array.

Example 5:- {1, 2, -3} is NOT a balanced array.

Example 6:- {-3,-2, -3, -2, 4, 1, 4, 1 , 3, 2, -4, -1} is NOT a balanced array

 

Note:-

 

1. Zeroes can be ignored.

2. There can be duplicates in the array. Every duplicate n needs to have -n
*/



let arra = [-2, 3, 2, -3];
//let arr = [-2, 3, 2, -3, 1, -11];

const checkBalancedArr = (arr) => {
    let arr1 = arr.filter((item) => item < 0).sort();
    let arr2 = arr.filter(item => item > 0).sort();
    let balanced = 'false';
    if(arr1.length === arr2.length) {
        for(let i =0; i<arr1.length; i++){
            let negVal = Math.abs(arr1[i]);
            if(!!arr2.indexOf(negVal)){
                arr2[arr2.indexOf(negVal)] = 0;
                balanced = 'true';
            }else {
                balanced = 'false';
            }
        }
    }
    return balanced;
}
// let v1 = arr.filter((item) => item > 0);
// let v2 = arr.filter((item) => item < 0);
// v1.filter(value => v2.filter(val => includes (value)))
//console.log(checkBalancedArr(arra));

const arr = [1,1,-1,-1,-2, 3, 2, -3]
const checkBalancedArray = (arr) => {
    let arr1 = arr.filter(item => item < 0).map(item => Math.abs(item)).sort();
    let arr2 = arr.filter(item => item > 0).sort();
    if(arr1.length === arr2.length) {
        
        for(let i=0; i<arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                console.log(i);
                return 'false'
            }
                console.log('elsePart:', i);
        }
        return 'true'
    }else {
        return 'false';
    }
}
console.log(checkBalancedArray(arr));

// const higherOrdFunc = (func) => {

//     const addVal = 5;

//     return func(5);

// }

/*
wrire one simple higher order function.
What is event loop?
What is useMemo and useCallback
How you manage state in react component
What is key in react and why we give.
*/