const arr=[10,20,35,40]
// for(let i=0;i<arr.length;i++)
// {
//    console.log(arr[i])
// }

for (const ele of arr) {
    if(ele%2!=0)
        return ele
    else
        continue;
}
// let sum=0
// const result=arr.map((ele)=>ele*ele).filter((ele)=>ele%2==0).reduce((sum,ele)=>sum=sum+ele)
// console.log(result)