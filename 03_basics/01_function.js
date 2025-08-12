//function ka matalb hai ki apane ek code ka package bana diya hai jisko kahi bhi used kar

function user(){
    // console.log("vishal");
   
}
user();

function addTwoNumbers(num1,num2){
let result=num1+num2;
return result;

}
const result= addTwoNumbers(30,40)
console.log(result);

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100,400,300));

//value jab kisi variable ke andar store kar dete hai to baaki ki value print hoti hai bas
function carPrice(va1,val2,...rate){
return rate;
}
console.log(carPrice(400,500,600,700));

//object handling through the help of function
const userDe={
    userName:"Vishal",
    age:22,
}
function handlingObject(anyObject){
    console.log(`My name is ${anyObject.userName} and I am ${anyObject.age} years Old`);
    
}
handlingObject(userDe)



