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
// const firstName = 'Morvid';
// const lastName = 'Angel';
// const age = '190';
// const str = 'Hello there my name is Morvid';
// const tags = 'web design, web Development, programming, game design';
// let val;

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
// val = str.split(' ');
// val = tags.split(',');

// *replace()
// val = str.replace('Morvid', 'Rick James bitch!');

// * includes()
// val = str.includes('foo');

// console.log(val);

// !Template Literals
// const name = 'Elmo';
// const age = 230;
// const job = 'Teacher';
// const city = 'New York City';
// let html;

// function hello() {
//     return 'hello';
// }

// * without template strings (es5) old fasion that we wont use
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + ' </li></ul>';

// html = '<ul>' +
//     '<li>Name: ' + name + '</li>' +
//     '<li>Age: ' + age + '</li>' +
//     '<li>Job: ' + job + '</li>' +
//     '<li>City: ' + city + '</li>' +
//     '</ul>';

// *with template strings (es6)
// html = `
//     <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//     <li>${2 + 2}</li>
//     <li>${hello()}</li>
//     <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//     </ul>
//     `;

// document.body.innerHTML = html;

// !Arrays and Array Methods
// types of arrays
// const numbers = [39, 10, 4, 66, 420, 28, 123, 344, 6, 20, 80, 306];
// const numbers2 = new Array(32, 53.97, 60, 134, 55, 17,);
// const fruit = ['apple', 'bannana', 'pineapple', 'orange', 'watermelon'];
// const mixed = [22, 'hello', true, undefined, null, { a: 1, b: 1 }, new Date()];
// let val;

// get array lenght
// val = numbers.length;

// check its an array
// val = Array.isArray(numbers);

// fint what item is in array location
// val = numbers[3]; //this will show what item is in the forth spot in the array
// val = numbers[0]; //this will show what item is in the first spot of the array

// inserting a item in the array
// numbers[2] = 100; //the 4 has changed into 100 in the array

// find the value of the index
// val = numbers.indexOf(344); // this shows you what spot is the number located on in the array

// *Mutating arrays
// add an index to the end of the array
// numbers.push(250);

// add an index to the front of the array
// numbers.unshift(120);

// take an index off from the end
// numbers.pop();

// take an index off from the front
// numbers.shift();

// splice values choose a start and end of indexs you want to remove
// numbers.splice(4, 6);

// reverse the array
// numbers.reverse();

// conatinating arrays
// val = numbers.concat(numbers2);

// sort your array
// val = fruit.sort();
// val = numbers.sort();

//* sorting numbers
// least to highest
// val = numbers.sort(function (x, y) {
//     return x - y;
// });

// highest to lowest
// val = numbers.sort(function (x, y) {
//     return y - x;
// });

// find and index
// function over50(num) {
//     return num > 50;
// }

// val = numbers.find(over50);

// console.log(numbers);
// console.log(val);

// !object literals
// object is like a preofile of a thing
// const person = {
//     firstName: 'Rick',
//     lastName: 'Sanchez',
//     age: 48,
//     email: 'wabadubdub@aol.com',
//     hobbies: ['music', 'sports', 'science'],
//     address: {
//         city: 'New York City',
//         state: 'NY'
//     },
//     getBirthYear: function () {
//         return 2022 - this.age;
//     }
// }

// let val;
// seting up the object
// val = person;
// get a spacific value from the object
// val = person.firstName;
// val = person['lastName'];
// val = person.age;
// val = person.hobbies[2];
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();

// console.log(val);

// const people = [
//     { name: 'Chris', age: 26 },
//     { name: 'Jill', age: 54 },
//     { name: 'Sam', age: 19 },
//     { name: 'Tim', age: 55 },
//     { name: 'Sally', age: 22 },
// ];

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].name);
// }

// !dates and time
// let val;

// const today = new Date();
// let birthday = new Date('9-10-1981 11:25:01');
// birthday = new Date('September 10 1981');
// birthday = new Date('9/10/1981');

// val = today;
// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(4);
// birthday.setDate(12);
// birthday.setFullYear(1898);
// birthday.setHours(6);
// birthday.setMinutes(45);
// birthday.setSeconds(30);

// console.log(birthday);

// !if statments and comparison operators
//* syntax
// if (somthing){
//     do somthing
// } else {
//     do something else
// }

// const id = 100;

//* equal to
// if (id == 100) {
//     console.log('correct');
// } else {
//     console.log('incorrect');
// }

// *not equal to
// if (id != 101) {
//     console.log('correct');
// } else {
//     console.log('incorrect');
// }

// *equal to value type (advised to mostly use)
// if (id === 100) {
//     console.log('correct');
// } else {
//     console.log('incorrect');
// }

// *equal to value and type (advised to mostly use)
// if (id !== 100) {
//     console.log('correct');
// } else {
//     console.log('incorrect');
// }

// *test if undefined
// if (typeof id !== 'undefined') {
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('no id');
// }

// *greater or less than
// if (id <= 100) {
//     console.log('correct');
// } else {
//     console.log('incorrect');
// }

//* if else
// const color = 'yellow';

// if (color === 'red') {
//     console.log('color is red');
// } else if (color === 'blue') {
//     console.log('color is blue');
// } else {
//     console.log('color is not red or blue');
// }

// *logical operators
// const name = 'Steve';
// const age = 4;

//and = &&

// if (age > 0 && age < 12) {
//     console.log(`${name} is a child`);
// } else if (age >= 13 && age <= 19) {
//     console.log(`${name} is a teenager`);
// } else {
//     console.log(`${name} is an adult`);
// }

// or = ||

// if (age < 16 || age > 65) {
//     console.log(`${name} can not run in race`);
// } else {
//     console.log(`${name} is registered for the race`);
// }

// *ternary operator (easier way to right an if statement)
// console.log(id === 100 ? 'correct' : 'incorrect');

// !switches

// const color = 'yellow';

// switch (color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not red or blue');
//         break;
// }

// let day;

// switch (new Date().getDay()) {
//     case 0:
//         day = 'sunday';
//         break;
//     case 1:
//         day = 'monday';
//         break;
//     case 2:
//         day = 'teusday';
//         break;
//     case 3:
//         day = 'wednesday';
//         break;
//     case 4:
//         day = 'thursday';
//         break;
//     case 5:
//         day = 'friday';
//         break;
//     case 6:
//         day = 'saturday';
//         break;
// }

// console.log(`Today is ${day}`);

// !function declaratioins and expressions

// !general loops

// !a look at the window object

// !block scope with let and const