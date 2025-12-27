const arr=[12,34,7,45,78,39]

//Que: Traverse inside the array and stop whenever 45 will be coming 
for (const element of arr) {
    if(element==45)
        // break
        continue
    else
        console.log(element)
}

console.log(arr)
//can we return from for Of or not  => for of never return anything
// let result=for (const element of arr) {
//     if(element==45)
//         return
//     else
//         console.log(element)
// }

