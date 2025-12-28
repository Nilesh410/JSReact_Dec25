const obj={
    std1:68,
    std2:35,
    std3:41,
    std4:76
}
//How to access individual keys and values 
console.log(Object.keys(obj)) 
console.log(Object.values(obj))

Object.keys(obj).forEach((ele)=>{
    console.log(ele)
})
Object.values(obj).forEach((ele)=>{
    console.log(ele)
})
console.log(Object.entries(obj))
Object.entries(obj).forEach(([key,values])=>{
    console.log(`${key}:${values}`)
})