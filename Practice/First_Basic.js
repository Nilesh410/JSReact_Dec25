const a=[1,2,3,4]
const b=[2,3,4,5]
const c=[...a,...b]

console.log(c)

c.forEach((ele,index)=>{
    console.log(ele,index)
})
