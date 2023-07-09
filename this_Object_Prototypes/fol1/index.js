// function foo() {
// console.log( this.a );
// }
// function bar() {
// "use strict";
// console.log( this.a );
// }
// var a = 2;
// foo(); // 2
// bar(); // TypeError: `this` is `undefined`

// const obj = {
//     a: 3,
//     foo: foo,
// }
// obj.foo()

// function fn(){
//     this.a = 5;
//     console.log(this)
// }
// const result = new fn

// const fn = () => {
//     this.a = 4;
//     console.log(this)
// }
// const result = new fn

// const btn  = document.getElementById('btn');
// btn.addEventListener('click',function(){console.log(this)})
// btn.addEventListener('click',()=>{console.log(this)})


// var obj = {
//     foo: ()=>{
//         btn.addEventListener('click',function(){console.log(this)})
//     },
//     boo: function(){
//         btn.addEventListener('click',()=>{console.log(this)})
//     },
//     doo: ()=>{
//         btn.addEventListener('click',()=>{console.log(this)})
//     },
//     coo: function(){
//         btn.addEventListener('click',function(){console.log(this)})
//     },
// }
// obj.coo()

//*************//
function foo(){
    
    console.log(this)
}

const obj = {
    a: "custom object"
}

console.log(obj)

const bar = foo.bind(obj)
bar()
new bar



