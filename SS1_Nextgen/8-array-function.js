//map: biến đổi theo 

const mapArr = [1,2,3];

const mapArr2= mapArr.map((item)  => {
    return item *2;

});

console.log(mapArr, mapArr2)

//filter: hàm lọc

const filterArr = [1,2,3,4,5,6]
const filterArr2 = filterArr.filter((item)=>{
    return item% 2===0;
});
console.log(filterArr,filterArr2)

// reduce

const number=[1,2,3,4,5,6,7,8]
const total = number.reduce((total, item)=>{
    return total + item;
},0) //nhận vào 2 tham số thay vì chỉ 1, cả 2 tham số đều có ý nghĩa
console.log(total);