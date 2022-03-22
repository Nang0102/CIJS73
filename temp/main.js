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
console.log("The ${speed} brown fox jumps over the lazy dog")

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
