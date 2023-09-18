// let a = 10;

// function f() {
//     var b = 30;

//     function g() {
//         console.log(b);
//         var c = a + b;
//         a = 50;
//         return c;
//     }

//     b = 20;
//     console.log(a);

//     return g;

// }

// let myFunc = f();
// let x = myFunc();
// console.log(x);
// console.log(a);


// let arr = [100, 200, 300];

// console.log(arr.reduce((acc, curr, index, aa) => {
//     console.log(curr / aa.length);
//     //console.log(aa);
//     return acc + curr / aa.length;
// }, 0));


// const students = [
//     { name: 'Quincy', grades: [99, 88], courses: ['cs301', 'cs303'] },
//     { name: 'Jason', grades: [29, 38], courses: ['cs201', 'cs203'] },
//     { name: 'Alexis', grades: [79, 78], courses: ['cs105', 'cs211'] },
//     { name: 'Sam', grades: [91, 82], courses: ['cs445', 'cs303'] },
//     { name: 'Katie', grades: [66, 77], courses: ['cs303', 'cs477'] }
// ];
// console.log(students.filter(stu => stu.courses.includes('cs303'))
//     .reduce((accu, stu) => {
//         let average = stu.grades.reduce((avg, g, index, array) => avg + g / array.length, 0);
//         accu[stu.name] = average;
//         return accu;
//     }, {}));


// class Car {
//     constructor(price, speed) {
//         this.price = price,
//             this.speed = speed;
//     }

//     accelerate(speed) {
//         this.speed += speed;
//     }

//     static compare(car1, car2) {
//         car1.price - car2.price;
//     }
// }

// const car1 = new Car(1000, 90);
// console.log(car1);

// function sum(...rest) {
//     return rest.reduce((sum, current) => sum + current, 0);
// }

// function sum(num1, num2) {
//     return num1 + num2;
// }

// console.log(sum(1, 2, 3, 4, 5));


// let obj = { x: 1, y: 2 };

// obj = Object.create({ x: 5, y: 10 });
// console.log(obj.x + obj.y);

// var sum = function (num1, num2) {
//     return num1 + num2;
// }

// console.log(sum(10, 20));

// function sum(num1, num2) {
//     return num1 + num2;
// }


//Question 16::
// function User(firstname, lastname) {
//     this.fname = firstname;
//     this.lname = lastname;
//     this.getFullName = function () {
//         return `${this.fname} ${this.lname}`
//     }

// }


// User.prototype.setFirstName = function (firstname) {
//     this.firstname = firstname;
// }
// const user = new User('John', 'Smith');
// user.setFirstName("Edward")
// let tom = Object.create(user);
// user.setLastname = function (lastname) {
//     this.lastname = lastname;
// }

// tom.firstname = "Tom";
// tom.setLastname("Jark");

// console.log(user);
// console.log(tom);
// console.log(tom.fname);

// User.prototype.getAge = function () {
//     return new Date().getFullYear() - this.birthDate.getFullYear();
// }


//Question 15::
// const person = {
//     firstname: 'Edward',
//     printName: function (greeting) {
//         console.log(`${greeting} ${this.firstname}`);
//     }
// }

// function foo() {
//     // const printNameFromPerson = person.printName.bind(person);
//     // printNameFromPerson("Hi");
//     // person.printName.call(person, "Hi");
//     // person.printName.apply(person, ["Hi"]);
//     person.printName.bind(person, "Hi")();
//     //g();
//     // printNameFromPerson("Hi");
// }

// foo();


// const students = [
//     {
//         id: 1,
//         name: "John Smith",
//         major: "MCSE",
//         transcript: [{ course: 203, grade: 90 }]
//     },
//     {
//         id: 2,
//         name: "Alice Johnson",
//         major: "Computer Science",
//         transcript: [{ course: 201, grade: 95 }, { course: 205, grade: 88 }]
//     },
//     {
//         id: 3,
//         name: "Michael Brown",
//         major: "Computer Science",
//         transcript: [{ course: 201, grade: 87 }, { course: 303, grade: 91 }]
//     },
//     {
//         id: 4,
//         name: "Emily Davis",
//         major: "Biology",
//         transcript: [{ course: 101, grade: 78 }, { course: 105, grade: 82 }]
//     },
//     {
//         id: 5,
//         name: "Daniel Wilson",
//         major: "Mathematics",
//         transcript: [{ course: 401, grade: 96 }, { course: 403, grade: 89 }]
//     }
// ];

// console.log(
//     students.filter(s => s.major == "Computer Science" && s.transcript.some(t => t.course == 201))
//         .reduce((avg, stu, i, arr) => {
//             let average = stu.transcript.reduce((a, c, i, arr) => a + c.grade / arr.length, 0);
//             avg.push({ name: stu.name, average: average });
//             return avg;
//         }, [])

// );

// function computeAverage(students, major, course) {
//     return students
//         .filter(s => s.major === major && s.transcript.some(c => c.course === course))
//         .map(s => {
//             let avg = s.transcript.reduce((acc, curr, index, arr) => acc + curr.grade / arr.length, 0);
//             return { name: s.name, average: avg };
//         });
// }

// console.log(computeAverage(students, "Computer Science", 201));

// const computerScience201Students = students.filter((student) => {
//     return student.major === "Computer Science" && student.transcript.some((course) => course.course === 201);
// });

// const studentAverages = computerScience201Students.map((student) => {
//     const totalGrades = student.transcript.reduce((sum, course) => sum + course.grade, 0);
//     const averageGrade = totalGrades / student.transcript.length;
//     return { name: student.name, average: averageGrade };
// });

// console.log(studentAverages);


// // console.log(students);

// // console.log(students.filter(stu => stu.courses.includes('cs303'))
// //     .reduce((accu, stu) => {
// //         let average = stu.grades.reduce((avg, g, index, array) => avg + g / array.length, 0);
// //         accu[stu.name] = average;
// //         return accu;
// //     }, {}));


//14
var c = 5;
let b = 7;
let a = function () {
    console.log(100);
}

function f(a, b) {
    b = 20;
    console.log(c);
    console.log(b)
    g(a, 9, 10);
    var c = 0;
    console.log(c)
}

function g() {
    b = a;
    console.log(b);
    b = c;
}

f(1, 2, 3);
console.log(b);
console.log(c);