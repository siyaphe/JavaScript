//DATATYPE
// String, Numbers, Boolean, null, undefined

// const name = 'Henri';
// const age = 25;

//concatenation
// console.log('My name is name and I am age')
// console.log('My name is ' + name + ' and I am '+ age);
//Template String
// // console.log(`My name is ${name} and I am ${age}`);
// const hello = console.log(`My name is ${name} and I am ${age}`);
// console.log(hello);

//length properties
// const s = 'Hello Malia!';
// // console.log(s.length);
// // console.log(s.toUpperCase());
// // onsole.log(s.toLowerCase());
// // console.log(s.substring(0, 5).toUpperCase());

// console.log(s.split(''));

// const it = 'technology, computers, it, code';
// console.log(it.split(', '));

//Arrays - variable that hold multiple values

// const numbers = new Array(1,2,3,4,5,6,7,8);
// console.log(numbers);

const fruits = ['apple', 'banana', 'orange', 10, true];

// console.log(fruits[3]);
fruits[3] = 'paneapple'
// console.log(fruits[3]);
// console.log(fruits);

//PUSH -----if not knowing how many values in your Array---push method
fruits.push('mangoes');
//UNSHIFT---------add to the beginning -- unshift
fruits.unshift('Strawberry');
//pop ------to take the last one off
fruits.pop();
//check what is in Array
console.log(Array.isArray(fruits));
// to get the index of a certain values
console.log(fruits.indexOf('orange'));


console.log(fruits);









