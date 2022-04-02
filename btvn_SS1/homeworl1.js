// Bai 1:
 
//  const input = ["a, b,c,d"];
//  const output =["d,c,b,a"];

// arr=[...output, ...input]
// console.log(arr)
// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];

// arr1 = [...arr2, ...arr1];

let arr = ["a","b","c","d"];

arr.reverse();
console.log(arr)


// bài 2: Viết một function xoá các phần từ trùng lặp trong một mảng các số:
// Input: [1, 2, 3, 5, 4, 2, 6, 4]
// Output: [1, 2, 3, 5, 4, 6]
//  indexOf: là trả về vịtrí đầu tiên nó tìm thấy của phần tử được cung cấp từ mảng
const Input = [1, 2, 3, 5, 4, 2, 6, 4]

const newArr= Input.filter((item, index) => {
   return Input.indexOf(item)===index;

})
console.log(newArr)


//Bài 3: Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng:\
// Input: [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]
// Output: {value: 3, count: 3}
 const input = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]


const newArr1= input.filter((item, index) =>{
    return input.indexOf(item) !== index
}); 
console.log(newArr1)