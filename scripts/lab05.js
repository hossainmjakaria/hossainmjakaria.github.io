// 1. Create a function using function declaration named sum with one parameter of Array type, 
//the returned result is the sum of all elements which are greater than 20. 
let items = [5, 10, 35, 15, 20, 25];
let sum = items
    .filter(e => e > 20)
    .reduce((accumulator, current) => accumulator + current);
console.log(sum);


// 2. Create a function using function expression named getNewArray with one parameter of String Array, 
//return a new array which contains all string, length is greater than and equal to 5, and contains letter ‘a’.
let arr = ['apple', 'banana', 'cherry', 'date', 'apricot', 'blueberry'];
let result = arr
    .filter(name => name.includes('a') && name.length >= 5);
console.log(result);

