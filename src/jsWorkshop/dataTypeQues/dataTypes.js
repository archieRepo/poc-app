// what will be logged in first example and in second example?
//

let var1;
console.log(var1);  //undefined
console.log(typeof var1); // undefined

let var2 = null;
console.log(var2); //null
console.log(typeof var2); //object


console.log(typeof NaN); // object

//actual result

/*

undefined
undefined

null 
object

number

*/

/*

undefined is something that we can not assign to a variable
but null we can assign to a variable
*/