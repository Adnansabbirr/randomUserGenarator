/* const item={
    firstName:'sabbir',
    lastName='adnan'
    
} */

const numbers=[10,20,30,40,50];
const destructuring={...numbers};

console.log(destructuring);

function calculate(x,y,z=7){
    const result=x+y+z;
    return result;
}
console.log(calculate(10,5));
    
const numArr = [1,4,3,6];
const [,,three]=numArr;
console.log(three);
const numArr = [1,4,3,6];
const three=numArr[2];
console.log(three);