const userEmail ="vishal@gmail.com"
if(userEmail){
    console.log("Got a User");
    
}else{
    console.log("please Enter the email.");
    
}
//falsy value 
//false,0,-0,bigInt 0n,"",null,undifined,NaN

//tuthy value
//"0","false"," ",[],{},function(){}

//nullish coalisicing Operator(??):nullundefined
let value1;
value1=5??10,
value2=null??20
console.log(value1,value2);
