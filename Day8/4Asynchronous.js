console.log("hello")
for(let i=0;i<10000000000;i++)
{
    if(i==1000000)
        console.log(i)
}
setTimeout(()=>{
    console.log("1st Timer")
},5000)

setTimeout(()=>{
    console.log("2nd Timer")
},0)

setTimeout(()=>{
    console.log("3rd Timer")
},5000)

console.log("End of program")