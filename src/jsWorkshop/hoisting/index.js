//what will be console.logged here
//
//Ques 1.

// console.log(foo1); //referenceError foo in not defined
// foo1 = 1;

//Ans

//Error referenceError foo in not defined

//Ques 2.
console.log(foo2); //2 becouse of variable hoisting X wrong answer
var foo2 = 2;

//Ans

//undefined

//Ques 3.

foo3 = 3;
console.log(foo3); // 3 because of var hoisting
var foo3;

//Ans

//3

// hoisting with function 
fit(); // this is totally fine as function declaration will be bubbling to the top because of hoisting

function fit() {};

// async function* fetchUsers() {
//     const urls = [
//       'https://jsonplaceholder.typicode.com/users/1',
//       'https://jsonplaceholder.typicode.com/users/2',
//       'https://jsonplaceholder.typicode.com/users/3',
//     ];
  
//     for (const url of urls) {
//       const response = await fetch(url);
//       const data = await response.json();
//       yield data;
//     }
//   }

//   const gen = async () => await fetchUsers();

//   console.log(gen);
//   console.table(gen.next());
  
//   (async () => {
//     //for await (const user of fetchUsers()) {
//       console.log(fetchUsers());
//     //}
//   })();