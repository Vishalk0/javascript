const object={
    userName:"Vishal Kushwaha",
    price:999,
    welcome:function(){
        console.log(`${this.userName} ,Welcome to my plateform.`)
    }
}
object.welcome()
object.userName="AntMan"
object.welcome()



//Arrow function structure
value=()=>{

}
//some examples of arrow functions
const maan=(num,num2)=>{
return num+num2
}
console.log(maan(10.70));
//another
const maan2=(num1,num2)=>(num1+num2)