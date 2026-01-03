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
Object.freeze(obj)
obj.mobno=123456789 //add new entry
console.log(obj)
delete obj.user_name //delete existing entry
console.log(obj)
obj.user_name="PQRS"
console.log(obj)