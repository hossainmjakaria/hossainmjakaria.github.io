//Exercise 1: What’s the output in the console?

// function b() {
//     const y = 30;
//     a();

//     function a() {
//         console.log(x, y);
//     }
//     var x = 10;
//     console.log(x, y);
// }
// const x = 20;
// var y = 40;
// b();


// output:
// undefined 30
// 10 30





//Exercise 2: What’s the output in the console?
// function foo(x) {
//     let m;
//     console.log(x, y);
//     if (x > 5) {
//         var y = 5;
//         m = x + y;
//     } else {
//         let z = 10;
//         m = z;
//     }
//     x = m;
//     console.log(x, y);
// }
// var x = 10;
// foo(3);
// console.log(x);


// Output

// 3, undefined
// 10, undefined
// 10





// Exercise 3: Write a function printNumbers(from, to) that outputs a number every second,
// starting from from and ending with to.


// function printNumbers(from, to) {
//     let current = from;
//     let timerId = setInterval(() => {
//         console.log(current);
//         if (current === to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000);
// }
// printNumbers(1, 5);