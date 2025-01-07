//Object and Array's

let names = ['ajith','akhilesh','athulya','latha'];

names.push('arun');

// names.push(5); //Argument of type 'number' is not assignable to parameter of type 'string'

// names[0] = 25; //Type 'number' is not assignable to type 'string'

// names = true; //Type 'boolean' is not assignable to type 'string[]'.

let numbers = [10,20,30,40,50]

numbers.push(25);

// numbers.push('akhil'); //Argument of type 'string' is not assignable to parameter of type 'number'.

// numbers[0] = 'avinash'; // Type 'string' is not assignable to type 'number'

// numbers = false; // Type 'boolean' is not assignable to type 'number[]'


// if we make a array with only one type eg: numbers,strings we can't change the values from the type we selected earlier

//if the values are numbers, we can change into numbers . if the values are strings we can change into strings . we can't mix things up after initialisation of the array

//mix array

let mixed = [10,'ajith',25,45,'arun'];

mixed.push(10);

mixed.push('akhilesh');

// mixed.push(false); //Argument of type 'boolean' is not assignable to parameter of type 'string | number

//if we initialise the array with mixed value we can change the values into , the types we given in that array
//no problems will occure 



//object

let user = {
  name:'ajith',
  age:25,
  skills:'coder'
};

// user = false; //Type 'boolean' is not assignable to type '{ name: string; age: number; skills: string; }'.

// user.email = 'ajith@gmail.com' //Property 'email' does not exist on type '{ name: string; age: number; skills: string; }'.

// user = {
//   name:'akhilesh',
//   age :25,
//   skills:'webdev',
//   master:'bcom'
// }                //Object literal may only specify known properties, and 'master' does not exist in type '{                    name:string; age: number; skills: string; }'.

// user = {
//   name:'arun',
//   age:25,
//   skills:25
// }              //Type 'number' is not assignable to type 'string'.The expected type comes from property 'skills'  which is declared here on type '{ name: string; age: number; skills: string; }'

//only we can do follow the order what we initialised maintain the structure and maintain the type like below

user = {
  name:'arjun',
  age:25,
  skills:'swim'
}


//there will be no probelm for this
