
/* const personalDetails={
   name:'sabbir',
   age:19,color:'white'
}

let Wife='unknown';
const Wife2='valo-laga';
const templateString=`amar sombondhe bistarito bolar ekmatro 2mi e harami ${Wife} now declare a variable object ${personalDetails.name} ${personalDetails.color}`;
console.log(templateString);

const firstArrow=(num)=>num/5; */
// const value=firstArrow(20);
const secondArrow=(num1,num2)=>(num1+2)*(num2+2);
  

const value2=secondArrow(20,40);
console.log(value2);
const thirdArrow=(x,y,z)=>x*y*z;
const value3=thirdArrow(2,3,4);
console.log(value3);

const multiArrow=(num1,num2)=>{
   const value1=num1+2;
   const value2=num2+2;
   const valueResult=value1*value2;
   return valueResult;
};

const multiArrowValue=multiArrow(10,10);
console.log(multiArrowValue);

/* const numbers=[10,20,30,40,39,42,43,45,50];
const newArray=[];
const arrayFunction=numbers.map(x=>x*5);
// numbers.push(arrayFunction);
console.log(arrayFunction); */
const numbers=[10,20,30,40,39,42,43,45,50];

const arrayFunction=numbers.map(x=>x*5);
console.log(arrayFunction);

const numbers2=[13,15,17,20,40,45,49];
const oddNumber=numbers2.filter(n=>n%2);
console.log(oddNumber);
