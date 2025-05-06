// screening for thermo fisher scientific

// Q1. there are n number of list items how you will implement only 3 items in a row
//Ans. he was expecting flex/grid css property which will display only 3 items in a row
/*
.flex-3items {
    display: flex;
    flex-wrap: wrap;
  }
  
  .flex-3items div {
    flex-basis: 33.33%; eqvalent to flex-grow: 0; flex-shrink: 0; flex-basis: 33.33%;
  }
*/

//Q2. find output of below code
/*
for(let i=0; i<5; i++) {
    setTimeout(() => {
    console.log(i);
    }, 100)
}

Ans // 

0
1
2
3
4

for(var i=0; i<5; i++) {
setTimeout(() => {
console.log(i);
}, 100)
}
Ans // As var is function scope then by that time for loop will refer to the same var i = 5
5
5
5
5
5

and

for(let i=0; i<5; i++) {
setInterval(() => {
console.log(i);
}, 100)
}

Ans //

it will print infintly (0 to 4) after each 100 milli seconds

0
1
2
3
4
...

for(var i=0; i<5; i++) {
setInterval(() => {
console.log(i);
}, 100)
}

Ans //

it will print infintly(5) after each 100 milli seconds

5
5
5
5
5
...
*/

//Q3. show me how you implement redux in react application reducers, actions and store and config do all these basic coding setup
//Q4. how you will access or update state without using mapStateToProps and mapDispachToProps method of connect HOC.
//Ans using useDispacher and useSelector hooks of react-redux package
