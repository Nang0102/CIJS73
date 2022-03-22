const obj ={name: "Mindx",
 age: 20,
 address: {
    city: "Hanoi",
    street: "Ba Dinh"
}
};
// const name= obj.name
// const age= obj.age

const{ name, age, address,dob}= obj;
console.log(name, age, address, dob)

const coordinate =[0,1,1];
const [x,y,z, alpha]=coordinate;
console.log(x,y,z, alpha )


let a=0;
let b=1;

// let temp=a
// a=b;

