console.log("hello")
for(let i=0;i<10000000000;i++)
{
    if(i==1000000)
        console.log(i)
}
setTimeout(()=>{
    console.log("Time Consuming process")
},1000)
console.log("End of program")