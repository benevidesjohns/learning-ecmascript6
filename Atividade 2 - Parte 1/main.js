//Array
const array = [1, 2, 3, 4, 5, 8, 9];

//---------------------------------------------------//

//Example without arrow function
const newArray = array.map(
    function(item) {
        return item * 2;
    }
)

console.log(newArray);

//---------------------------------------------------//

//Example with arrow function
const sum = array.reduce((total, next) => total + next);

console.log(sum);

//---------------------------------------------------//

//Example without arrow function
const filter = array.filter(
    function(item){
        return item%2 === 0;
    }
)

console.log(filter);

//---------------------------------------------------//

//Example with arrow function
const find = array.find(item => item === 4)

console.log(find);

//---------------------------------------------------//

//Arrow function to declare a variable
const variable = () => [1, 2, 3];
console.log(variable());

//---------------------------------------------------//

//Correct way - Arrow function to make property list
const variableUndef = () => {return {name: 'João'}};
console.log(variableUndef());


//Incorrect way - Arrow function to do property list
/* const variableUndef = () => {name: 'João'};
console.log(variableUndef()); */

//---------------------------------------------------//

//Example showing a simple method summing two numbers
const sumTest = (x, y) => x + y;
console.log(sumTest(1, 2));

//Example showing a method containing default parameter
const sumTest2 = (x = 1, y = 2) => x + y;
console.log(sumTest2(1, ));

//Example showing NaN (Not a Number)
//sumTest3 = (x, y) => x + y;
//console.log(sumTest3(1, ));

//---------------------------------------------------//

//Properties list
const user = {
    username: 'João',
    age: 21,
    address: {
        street: 'Little Village',
        city: 'Chicago'
    }
}

//Example using concept of destructuring
const {username, address:{street}} = user;
console.log(username, street);

//Example without using the concept of destructuring
const usernameTemp = user.username;
const ageTemp = user.age;
console.log(usernameTemp);
console.log(ageTemp);

//Example using the concept of destructuring in a function
//containing the property list itself as a parameter
const showName1 = (user) => (console.log(user.username));

//Example using concept of destructuring in parameter argument
const showName2 = ({username}) => (console.log(username));

showName1(user);
showName2(user);