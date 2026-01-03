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
Object.seal(obj)
obj.mobno=123456789 //add new entry  not possible 
console.log(obj)
delete obj.user_name //delete existing entry  not possible
console.log(obj)
obj.user_name="PQRS" //possible only the updating the entries
console.log(obj)