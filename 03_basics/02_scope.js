// let a =10
// let b=20
// let c=30
// //Gloable Scope jo kise function method ke bahar define ho
// if(true){
//     //block Scope
//     let a =30
// }else{
//     let b =20
// }

function vishal(){
    const userName="Vishal Kushwaha"
    function vishal2(){
        const userPhone=6205494330
        console.log(userName);
        
    }
    // console.log(userPhone);
    vishal2()
    
}
vishal()

if(true){
   const user="Vishal"
   if(user=="Vishal"){
    const website="Youtube"
    console.log(user+website);
    
   }
//    console.log(website);
}
// console.log(user);
value(5)
function value(num){
    return num+1
}

const val=function(num){
return num+2
}
