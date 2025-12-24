// const arr1=[2,3,4]
// const arr2=[4,5,6]
// const arr3=[...arr1,...arr2]
// console.log(arr3)

// function add(a,b,c,d)
// {
//     console.log(a+b+c+d)
// }
// add(...arr3)

const obj={
    user_name:"Abc",
    user_age:36
}
function user_info(name,age)
{
    //console.log(name,age)
}
user_info({...obj})