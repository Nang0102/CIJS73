// let tạo biến cục bộ. Dùng xong xóa, k tốn bộ nhớ
// var tạo biến toàn cục. Dùng xong vẫn giữ lại, tốn rất nhiều bộ nhớ
// const cho phép chứa gtrị gán



// let let_variable=[1,2,3]
// let_variable =1

// const const_variable= [1,2,3]
// const_variable=1 //lỗi k thay đc  [1,2,3] = 1

// let x=1
// console.log("x: ",x);
//  x=2
// console.log("x: ",x)


// const g=9.8;
// const pi=3.14;
// console.log("g,pi:", g, pi)
// // g=10
// // console.log(g)

// console.log("foo: ", foo);
// var foo="foo";


// const arr = []
// arr.push(1)
// console.log("arr:", arr)
 
// const c=1
// console.log("c:", c)
//  const obj = {foo: 1}
//  obj.bar=2

const speed = 'quick'
console.log(`The ${speed} brown fox jumps over the lazy dog`)

sum()
function sum(a,b){
    console.log("adding 2 number")
    return a+b}

const multi = function(a,b){
    console.log("multi:");
    return a*b;
}
multi()

const sub = (a,b) => {
    console.log("subtracting 2 numbers");
    return a-b;
};
const d=sub(4,2);
console.log(d)
sub() // k có binding this va supper

const devideBy = (a,b) => a/b
const e= devideBy(6,3)
console.log(e)
devideBy()


function add(x, y){
    const  sum = x + y;
    return sum;
  }
  const z = add(1, 2);
console.log(z);

const getAdress = () => ({city: "Hanoi"})
console.log(getAdress)
getAdress()

const myName= "Hello!"
console.log("My name is Năng"  +  myName  +  "Happy\nHi!")

console.log(`Hello, myname is Nắng
 ${myName}`)

//  const sum = (a,b) =>{
//     return a+b;
// }
// export {sum}
// sum()

// function mystery(...params) {
    
// 	return params
// }
// // let a = mystery(1, 23, 4);
// mystery()

// let a = 12, b = 3;
// [a, b] = [b, a];
// const obj = {
// 	name: "MindX"
// }
// const sayHello = (x) => {
// 	let {name} = x
//   name = "Code Intensive"
// }
// console.log(sayHello(obj))
// sayHello(obj)
// const arr = [1, 2, 3, 4, 5]
// const total = arr.filter(item => item % 2 === 0)
// 								 .reduce((value, item) => value + item , 10)

// const input ={string:"abcde"}
// const output ={string:"edcba"}

// console.log(input)

// const sum = (a,b) =>{ a+b
// console.log(sum)}
// sum()


// 1. Viết các function sum , sub , mul ,div trong file cal.js 
// -Tạo 1 file index.js viết 1 chương trình đơn giản , nhập 2 số a và b 
// và nhập phép tính của người dùng
// -In kết quả ra bằng console.log

// 2. Cho 1 array:
//  arr = [1 ,2 , 3 , 5 , 8 , 13 , 21]

// a,Lọc ra các số chẵn?
// b,Tìm các số chia hết cho 5?
// c,Tìm xem trong mãng này có các số lớn hơn 4 hay ko?
// d, Tính tổng các số?