//ye sigleton object hai 
const tinder=new Object()
tinder.id="4321",
tinder.name="Vishal Kushwaha",
tinder.age=22,
console.log(tinder);
//nested object 
const nestedObject={
    fullName:{
        userFullName:{
            firstName:("Vishal"),
            secondName:("Kushwaha")
        }
    }
}
console.log(nestedObject.fullName.userFullName);
//collection of oject are commbine in one object. 
const obj1={1:"a",2:"b",3:"c"}
 const obj2={4:"d",5:"e",6:"f"}
 const obj3={7:"g",8:"h",9:"i"}
 const obj4={...obj1,...obj2,...obj3}
console.log(obj4);
//key find karana objet me
console.log(Object.keys(tinder));
console.log(tinder.hasOwnProperty('age'))

/*
    de-structure of object ...
*/
