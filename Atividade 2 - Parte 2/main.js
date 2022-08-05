//Properties list
const user = {
    username: 'João',
    age: 21,
    address: {
        street: 'Little Village',
        city: 'Chicago'
    }
}

//---------------------------------------------------//

//Rest
const {age, ...rest} = user;
console.log(age);
console.log(rest);

//Destructuring and rest
const array2 = [1, 2, 3, 4];
const [a, b, ...c] = array2;
console.log(a, b);
console.log(c);

//Example using concept of rest in a sum function
const sumTest4 = (a, b, c, d) => a + b + c + d;
console.log(sumTest4(1, 2, 3, 4));

//Example using concept of rest in a sum function and using reduce 
//in "parameters" variable to sum all the numbers in this list
const sumTest5 = (...parameters) => parameters.reduce((total, next) => total + next);
console.log(sumTest5(1, 2, 3, 4, 5, 6, 7));

const user2 = {
    username: 'Lucas',
    age: 38,
    company: 'UESB'
}

//---------------------------------------------------//

//Spread
//Copying data and editing the "username" variable of the property list (user2)
const user3 = {...user2, username: 'Lucas S. Oliveira'};
console.log(user2);
console.log(user3);

const usernameTemp2 = 'Lucas';
const ageTemp2 = 38;

//---------------------------------------------------//

//Example showing simple syntax
console.log('Hey. My name is ' + usernameTemp2 + 'and my age is ' + ageTemp2 + ' years old');

//Example using template syntax
console.log(`Hey. My name is ${usernameTemp2} and my age is ${ageTemp2} years old`);

//---------------------------------------------------//

//Example showing a simple property list
const user_short1 = {
    usernameTemp2: 'Lucas',
    ageTemp2: 38,
    company: 'UESB'
}

//Example using the concept of object short syntax
const user_short2 = {
    usernameTemp2,
    ageTemp2,
    company: 'UESB'
}
 
console.log(user_short1);
console.log(user_short2);