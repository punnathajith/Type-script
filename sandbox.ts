//Type basics

let character = 'ajith';
let num = 75;
let isNum = false;

// character = 75; Type 'number' is not assignable to type 'string'
//but below is possible

character = 'abhiraj';

//num = 'fan'; Type 'string' is not assignable to type 'number'
//but below is possible
num = 85;

//isNum = 'yes'; Type 'string' is not assignable to type 'boolean'
//but below is possible
isNum = true;

//we can't change the type of the variable it will restrict that operation

// const multibyten = (num)=>{
//    return num*10;
// }

// console.log(multibyten('hello'));  //this way it cause to error but js will not show that we can prevent that by

const multibyten = (num : number)=>{
   return num*10;
}

console.log(multibyten(75));

//we explicitly giving the type of the parameter and avoid the error