const obj={
    user_name:"ABCD",
    user_id:1234,
    user_add:{
        city:"Pune",
        area:"Wakad",
        pincode:411045
    }
}
console.log(obj)
//const obj1=structuredClone(obj)
const obj1=JSON.parse(JSON.stringify(obj)) //deep copy 
console.log(obj1)
obj1.user_id=1235
obj1.user_add.city="Nashik"
console.log(obj)
console.log(obj1)