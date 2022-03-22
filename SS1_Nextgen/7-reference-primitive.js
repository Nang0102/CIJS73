//string
// Number
// Boolean
// null
// undefined
// Symbol
// => kieeur DL tham chieu
// Object

// primitive Data type
let x=1
let y=x
console.log(x===y); //true

let z=1
console.log(x===z);//true

x=2;
console.log(x===y) //fall
// reference data type
let foo ={}; 
let bar=foo // k coppy, trỏ cùng vào 1 ô nhớ
 console.log(foo===bar);

 foo.name= "Mindx"
 console.log(bar)

 foo={};
 bar={};
 console.log(foo===bar) // fall do foo và bar  nằm trên 2 ô nhớ khác nhau
 // khi truyền dl vào 1 function với kiểu tham trị thì gtri k thay đổi
 // với tham chiếu khi chạy function bị thay đổi
