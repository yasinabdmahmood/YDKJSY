function foo() {
console.log( this.a );
}

function bar() {
"use strict";
console.log( this.a );
}

var a = 2;

foo(); // 2

bar(); // TypeError: `this` is `undefined`

const obj = {
    a: 3,
    foo: foo,
}

obj.foo()