const obj={
     user_name:"ABCD",
     user_id:1234,
     user_institute:"Itview",
     user_password:"1234",
     user_info:{
        mobileno:"9834223420",
        age:45,
        add:"Pune"
     },
     user_family:["pqr","lmn","qwe"],
     user_display:()=>{
        console.log(obj.user_name);
     }
}
// console.log(obj)

// for (const element of obj) {
//     console.log(element)
// }

//For and for of not applicable on object 

for (const key in obj) {
  
    // console.log(key)
    // console.log(obj[key])
    console.log(`${key}:${obj[key]}`)
}