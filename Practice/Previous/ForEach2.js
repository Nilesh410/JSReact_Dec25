let arr=[23,34,56,67]

console.log(arr)

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

const result=arr.forEach((element,index) => {
              arr[index]=element+5
     });

console.log(result)
console.log(arr)

for (const element of arr) {
    if(element==61)
        element+5;
    else
        console.log(element)
}
console.log(arr)
