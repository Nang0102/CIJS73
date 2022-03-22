const sum =(a,b)=>{
    return a+b;
}

export const sub =(a,b)=>{
    return a-b;
}

export{  sum} //cách 2: hiển thị 
export const version ="1.0";

const math ={
    sum: sum;
    sub: sub;

}
export default math