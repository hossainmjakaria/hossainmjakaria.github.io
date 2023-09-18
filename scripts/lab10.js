// Question 1
// Write the necessary Node script to make this code work for all arrays: [1, 2, 3, 4, 5, 6, 7, 8].even(); //
// [2, 4, 6, 8][1, 2, 3, 4, 5, 6, 7, 8].odd(); // [1,3,5,7] Test your code in Node.JS CLI
// Solution 1
Array.prototype.even = function () {
    return this.filter((element) => element % 2 === 0);
};

Array.prototype.odd = function () {
    return this.filter((element) => element % 2 !== 0);
};

const testArray = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(testArray.even()); // [2, 4, 6, 8]
console.log(testArray.odd()); // [1, 3, 5, 7]


// Question 2
// 1. Explain why do we want sometimes to use setImmediate instead of using setTimeout?
// setTimeout runs in Timer phase, setImmediate runs in check phase. For example: If
// there's a case needs to run just before close phase, we can use setImmediate.

//Answer
var fs = require('fs');
var path = require('path');

fs.readFile(path.join(__dirname, 'greet.txt'), 'utf8', function (err, data) {
    setImmediate(() => {
        console.log("This will execute immediately.");
    });
    setTimeout(() => {
        console.log("This may not execute immediately.");
    }, 0);
    process.nextTick(() => console.log('nexttick'));
});

// 2. Explain the difference between process.nextTick and setImmediate?
// Answer

// process.nextTick()

// Callback: Gets executed multiple times in one iteration with highest priority.
//     Usage: Don't use while true loop on process.nextTick(), will block event loop.
// setImmediate()

// Callback: Gets executed once in one iteration.
//     Usage: Certain, the remaining for next iteration / tick.
// Callbacks Executed in One Iteration

// process.nextTick() - All of the callbacks in the nextTick queue, drained out.

// 3. Does Node.js has window object ?
// Answer: No