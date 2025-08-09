//sigalton->define yaise hota hai 
//object.create() 
//object literals



const mySym=Symbol("key1")
const userJs= {
    userName:"Vishal",
    age:18,
    location:"gurugao",
    "full Name":"Vishal Kushwaha",
//symbole type define karane ka tarika
    [mySym]:"mykey2"
}

    console.log(userJs.userName);
    console.log(userJs["full Name"]);
    console.log(userJs[mySym]);

    //function create for practice.
    userJs.greeting=function(){
        console.log("Hello this is function");
        
    }
    console.log(userJs.greeting());
    
    
    
    Object.freeze(userJs)//ye object me koe bhi changes nahi hone deta hai 
