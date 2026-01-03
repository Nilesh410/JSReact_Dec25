const arr=[10,20,30,40]
const obj={
    user_name:"Nilesh Shirude",
    user_id:1234,
    user_email:"shirudenileshs@gmail.com",
}
const result=arr.map(ele=>{
    return ele*10;
})
console.log(result)
const result1=Object.entries(obj).map(([key,value])=>{
    return `${key}:${value}`
})
console.log(result1)