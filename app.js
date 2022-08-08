// ! log to console
// console.log(
//     'Hello World'
// );

// console.log(123);

// console.log(true);

// var greeting = 'Hello';
// console.log(greeting);

// console.log([1, 2, 3, 4]);

// console.log({ a: 1, b: 2 });

// console.table({ a: 1, b: 2 });

// console.error('This is some error');

// console.clear();

// console.warn('This is a warning');

// console.time('This is going to tell me how long hello world took');

// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');

// console.timeEnd('This is going to tell me how long hello world took');

//
// multiple
// line
// comments
//

// ! var, let, const

// * var
// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

//  inititiolizing a variable
// var greeting;
// console.log(greeting);
// greeting = 'Hello'
// console.log(greeting);

//  your variable cant start with numbers. it can consist with letters, numbers, _ , $

//  style of wrighting variables with multiple words
// var firstName = 'John'; // this is camel case
// var fisrt_name = 'Sara'; // underscore style
// var FirstName = 'Tom'; //pascal case style
// var firstname = 'Doodle'; // not recomended

// * let
// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// * const
// const name = 'John';
// console.log(name);
// const cannot be reassigned and must have a value

// const person = {
//     name: 'John',
//     age: 30
// }

// person.name = 'Sara';
// person.age = '60';

// console.log(person);

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);

// console.log(numbers);


// !Data Types
// ! primitive
//  * String
// const name = 'John Doe';
// * Number
// const age = 45;
// * Boolean
// const hasKids = true;
// *Null
// const car = null;
// *Undefined
// let test;
// *Symbol
// const sym = Symbol();

// !Reference types - objects
// *Array
// const hobbies = ['anime', 'gaming', 'movies', 'music'];
// *Object literal
// const address = {
//     city: 'Brooklyn',
//     state: 'NY'
// }
// *Date
// const today = new Date();

// console.log(today);
// console.log(typeof today);

// !Convertions
// let val;

// number to string
// val = String(555);
// val = String(4 + 4);
// bool to string
// val = String(true);
// date to string
// val = String(new Date());
// array to string
// val = String([1, 2, 3, 4]);

// toString
// val = (5).toString();
// val = (true).toString();

// string to number
// val = Number('5')
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello');
// val = Number([1, 2, 3]);

// val = parseInt('100.30');
// val = parseFloat('100.30');

// output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));

// !concatenations

// const val1 = String(5);
// const val2 = 6;
// const sum = Number(val1 + val2);

// console.log(sum);
// console.log(typeof sum);

// !Numbers & the math object
// const num1 = 100;
// const num2 = 50;
// let val;

// *simple math with number
// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 / num2;
// val = num1 % num2;

// *math object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(5, 2, 87, 5, 8, 1, 95, -3, 6, 34, 10, 36, 22);
// val = Math.max(5, 2, 87, 5, 8, 1, 95, -3, 6, 34, 10, 36, 22);
// val = Math.random();
// *use this for website
// val = Math.floor(Math.random() * 100 + 1);

// console.log(val);

// !string methods & concatenation
const firstName = 'Morvid';
const lastName = 'Angel';
const age = '190';
const str = 'Hello there my name is Morvid';
const tags = 'web design, web Development, programming, game design';
let val;

// val = firstName + lastName;

//* concatenation
// val = firstName + ' ' + lastName;

// *append, replacing and adding
// val = 'Rick';
// val += 'Sanchez';

// val = 'Hello, my name is ' + firstName + ' and i am ' + age;

// *escaping from the apostrafy
// val = 'That\'s awesome, I can\'t wait';

// *checking the lenght
// val = firstName.length;

// *concat()
// val = firstName.concat(' ', lastName);

// *change to lower or upper case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// *indexOf() finding what number place the letter is on
// val = firstName.indexOf('i');
// val = firstName.lastIndexOf('i');

// *charAt()
// val = firstName.charAt('2');
// val = firstName[2];

// *get last charecter
// val = firstName.charAt(firstName.length - 1);

// *substring()
// val = firstName.substring(0, 4);

// *slice()
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// *split()
val = str.split(' ');
val = tags.split(',');

// *replace()
val = str.replace('Morvid', 'Rick James bitch!');

// * includes()
val = str.includes('foo');

console.log(val);