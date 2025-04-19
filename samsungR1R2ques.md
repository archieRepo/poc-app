// // create a promise promise will have a number, if number is 10 then it will resolve and return 10 otherwise it will reject in case an error "the number is not 10"
```js
// let find10 = new Promise((resolve, reject) => {
//     let number = 10;
//     if(number === 10){
//         resolve(10);
//     }else{
//         reject("the number is not 10");
//     }
// })

// let find11 = new Promise((resolve, reject) => {
//     let number = 11;
//     if(number === 10){
//         resolve(10);
//     }else{
//         reject("the number is not 10");
//     }
// })

// Promise.all(find10, find11).then((values) => {
//     console.log(values) // [10, 10]
// }).catch((error) => {
//     console.log(error) // "the number is not 10"
// })

// Promise.any()

//Get data function and fetch any api then print the return data in next function 


const getData = async () => {
    let url = "https://catfact.ninja/fact"
    let data = await fetch(url);
    return data;

}

const printData = () => {
    let printableData = getData();
    console.log(printableData);
}
```

```jsx
import React from 'react';

// we have to create a timer when we click on button the text will start increasing text and with pause button it will pause;

import React, {useState, useEffect} from 'react';

export function App(props) {

  // we have to create a timer when we click on button the text will start increasing text and with pause button it will pause;
  const [timer, setTimer] = useState(0);

  useEffect(() => {

  }, []);

  const handleClick = () => {
      setTimer((prev)=> prev+1);
      console.log();
  }
  return (
    <div className='App'>
      <h1>{timer}</h1>
      <button onClick={() => setInterval(handleClick, 1000)}>Start a timer</button>
      <button onClick={() => setTimer(0)}>Stop a timer</button>
    </div>
  );
}
```

// Log to console
console.log('Hello console')

```jsx

import React, { useState, useEffect } from 'react'
import List from './list.jsx';

import './style.css'

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    //console.log('hi');
    let url = 'https://mocki.io/v1/273a5af6-8050-4c96-8a9a-a5635a8882fa';
    const countryList = fetch(url).then((res) => res.json()).then((data)=> {
      
      setCountries(data.countries)
      resolve(data.countries);
    });
    console.log(countryList);
    // setCountries(countryList);
  }, []);
  
  return (
    <div className='App'>
      <h1>{'hi'}</h1>
      <ul>
        {countries.map(country => <List country={country} />)}
      </ul>
      
    </div>
  )
}


export default App

```
other ques:
use of promise, promise.all, promise.race.
async await syntax
How javascript run. 
API fetch based scenario
do you know typescript

```
R2
```

Q1. Design a dynamic form builder using React.
Requirements:
Implement a React component that allows users to dynamically add, edit, and remove form fields of different types (e.g., text input, dropdown, checkbox).
The structure of the form should be defined by a configuration object, such as:
const formConfig = [
       { id: 'name', label: 'Name', type: 'text', required: true },
       { id: 'age', label: 'Age', type: 'number', required: false },
       { id: 'gender', label: 'Gender', type: 'dropdown', options: ['Male', 'Female'], required: true },
       { id: 'subscribe', label: 'Subscribe to newsletter', type: 'checkbox', required: false },
   ];
Implement form validation based on the `required` property.
Allow submission of the form, and log the form data in the console.

Q2. Write a JavaScript function to deeply compare two objects and determine if they are identical in structure and values. The function should handle:
Primitive values.
Arrays (including nested arrays).
Objects (including nested objects).
Circular references.
 
const obj1 = { a: 1, b: { c: 2, d: [3, 4] } };
const obj2 = { a: 1, b: { c: 2, d: [3, 4] } };
const obj3 = { a: 1, b: { c: 2, d: [3, 5] } };deepEqual(obj1, obj2); // true
deepEqual(obj1, obj3); // false
has context menu

const circular1 = {};
const circular2 = {};
circular1.self = circular1;
circular2.self = circular2;
console.log(deepEqual(circular1, circular2)); // true

my try
```js
const deepEqual = (obj1, obj2) => {
    const keyOfObj1 = Object.keys(obj1);
    const keyOfObj2 = Object.keys(obj2);
    const valuesOfObj1 = Object.values(obj1);
    const valuesOfObj2 = Object.values(obj2);

    if(keyOfObj1.length !== keyOfObj2.length){
        return "objects are not equal"
    }else {
        const isEqual = keyOfObj2.map((key) => {
            if(obj1.key === obj2.key){
                return true;
            }
        })
    }
}
```

```js

console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 2");
});

process.nextTick(() => {
  console.log("Next Tick");
});

queueMicrotask(() => {
  console.log("Microtask");
});

console.log("End");

```

// in this question she wanted to understand how javascript runs and how async code runs. if promise 1 is printing before settime out then why it is printing. learn about queue and stack in js.
Start
End// wrong it will never go to console.log("End") because at process.nextTick line it will throw reference error
Promise 1
Promise 2
Timeout 1
TimeOut 2

what is debouncing and can you implement in react using debaouncing hooks. in which scenario you will use debounce and why you will use