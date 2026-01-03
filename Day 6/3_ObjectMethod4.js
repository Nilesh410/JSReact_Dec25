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
Object.defineProperty(obj,"user_id",{writable:false,configurable:false})
obj.user_id=12345
obj.user_name="PQRS"
delete obj.user_id
delete obj.user_name
console.log(obj)
