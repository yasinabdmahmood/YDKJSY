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