const data={
    user_name:"Nilesh",
    user_age:36,
    user_profile:'Software Engineer'
}
console.log(data.user_age)
data.user_degree="Engineer"
console.log(data)
data.user_name="Abc"
console.log(data)
delete data.user_name
console.log(data)
Object.seal(data)
data.user_age=34
console.log(data)

const {user_age,...userinfo}=data
console.log(user_age)
console.log(userinfo)
