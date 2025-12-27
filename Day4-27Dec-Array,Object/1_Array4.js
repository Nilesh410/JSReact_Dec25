const arr=[12,34,7,45,78,39]

//Que: Traverse inside the array and stop whenever 50 will be coming 
arr.forEach((element) => {
    if(element==45)
        continue
    else
        console.log(element)
        
});

console.log(arr)