const obj={
    user_name:"Nilesh Shirude",
    user_id:1234,
    user_email:"shirudenileshs@gmail.com",
    user_pass:"ABCD",
    user_info:{
        user_age:35,
        user_birthdata:"4th Oct 1989",
    },
    user_family:[{wife:"1",name:"XYZ"},{child:2,child1_name:"Sagar",child2:"Devendra"}]
}
console.log(obj)

for (const key in obj) {
    console.log(obj[key])
}

console.log(obj.user_family[1].child2)
// obj.forEach(element => {
//     console.log(element)
// });
// forEach cant apply on object

const {user_family,user_info}=obj
console.log(user_family)
const {
  user_info: { user_age } = {}
} = obj;
console.log(user_age)