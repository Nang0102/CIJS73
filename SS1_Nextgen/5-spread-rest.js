const arr =[1,2,3]
console.log(arr)

console.log(...arr); //trải phẳng obj thành dữ liệu riêng biệt


const arr2=[0, ...arr,4]; // arr2 gồm toàn bộ ptư của arr cũ
console.log(arr2);

const concatedArr =[...arr, ...arr2];
console.log("concatedArr", concatedArr);


const obj ={ name: "Mindx"};
const objCloned={
    ...obj,
    address: "Hanoi", 
    name:"CI_73,"
}
console.log(objCloned);


const x=1;
const y=2
const z=3
 Math.max(x,y,z)

// const sum=(arr)=>{}
const sum(a,b, .....numbers)=>{
    let total =0;
    for( let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    return total;
}
 console.log(sum(1,2,3,4,5,6));
