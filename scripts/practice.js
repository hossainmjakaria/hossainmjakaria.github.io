let a = 10;

function f() {
    var b = 30;

    function g() {
        console.log(b);
        var c = a + b;
        a = 50;
        return c;
    }

    b = 20;
    console.log(a);

    return g;

}

let myFunc = f();
let x = myFunc();
console.log(x);
console.log(a);