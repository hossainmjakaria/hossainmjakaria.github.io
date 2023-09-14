// Question 1:
// Create an object student using object literal which has
// Properties: firstName: String, lastName: String, grades: Array
// Methods:
// inputNewGrade(newGrade): push newGrade to grades
// computeAverageGrade(): return average of grades
// Create an Array with multiple students which are created using Object.create();
// Then compute the average grade for all students in the array
// Solution 1:

const student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade: function (newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade() {
        return this.grades.reduce((sum, current, index, array) => sum + current / array.length, 0);
    }
}

const stu1 = Object.create(student);
stu1.firstName = 'A';
stu1.lastName = 'B';
stu1.inputNewGrade(87);
stu1.inputNewGrade(96);
stu1.inputNewGrade(86);
stu1.inputNewGrade(82);

const stu2 = Object.create(student);
stu2.firstName = 'D';
stu2.lastName = 'E';
stu2.inputNewGrade(89);
stu2.inputNewGrade(92);
stu2.inputNewGrade(80);
stu2.inputNewGrade(70);
const students = [stu1, stu2];
const result = students.reduce((average, stu, index, array) => average + stu.
    computeAverageGrade() / array.length, 0);
console.log(result);


// Question 2: Redo the Question 1 using Constructor Function
// Solution 2:
function Student(firstName, lastName, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
}
Student.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
}
Student.prototype.computeAverageGrade = function () {
    return this.grades.reduce((sum, current, index, array) => sum + current /
        array.length, 0);
}
const stu11 = new Student('AA', 'BB');
stu1.inputNewGrade(87);
stu1.inputNewGrade(96);
stu1.inputNewGrade(86);
stu1.inputNewGrade(82);
const stu12 = new Student('CC', 'DD');
stu2.inputNewGrade(89);
stu2.inputNewGrade(92);
stu2.inputNewGrade(80);
stu2.inputNewGrade(70);
const students2 = [stu11, stu12];
const result2 = students.reduce((average, stu, index, array) => average +
    stu.computeAverageGrade() / array.length, 0);
console.log(result);


// Question 3:
// Add a new method named sort() without parameters in built -in constructor function
// Array.It’ll sort all elements in the array in ascending order
// Solution 3:

Array.prototype.mysort = function () {
    let arr = this;
    let len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log([7, 5, 2, 4, 3, 9].mysort());


// Question 4:
// Use object literal and constructor function to implement a Singley LinkedList.
// Use case:
// let linkedlist = new LinkedList();
// linkedlist.add(1);
// linkedlist.add(2);
// linkedlist.add(3);
// linkedlist.print(); //Expected Result: LinkedList{1,2,3};
// linkedlist.remove(2);
// linkedlist.print(); //Expected Result: LinkedList{1,3};

let linkedList = {};
linkedList.add = function (element) {
    if (this.value === undefined) {
        this.value = element;
        this.next = null;
    } else {
        let current = this;
        while (current.next) {
            current = current.next;
        }
        current.next = { value: element, next: null };
    }
}
linkedList.remove = function (element) {
    var current = this;
    var prev = null;
    while (current) {
        if (current.value === element) {
            if (prev == null) {
                this.value = current.next.value;
                this.next = current.next.next;
            } else {
                prev.next = current.next;
            }
            return true;
        }
        prev = current;
        current = current.next;
    }
    return false;
}
linkedList.printHelper = function (list, result) {
    if (list.next == null) {
        result += list.value;
        return result;
    }
    result += list.value + ',';
    return this.printHelper(list.next, result);
}
linkedList.print = function () {
    let result = 'LinkedList{';
    result = this.printHelper(this, result);
    result += '}';
    console.log(result);
}

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.print(); // LinkedList{1,2,3}
linkedList.remove(3);
linkedList.print(); // LinkedList{1,3}