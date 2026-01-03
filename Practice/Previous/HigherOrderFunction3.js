function f1(a,b,f2)
{
    f2(a,b)
}

f1(2,3,(a,b)=>{
    console.log("hello Programmer")
    console.log("values of a and b:",a,b)
})