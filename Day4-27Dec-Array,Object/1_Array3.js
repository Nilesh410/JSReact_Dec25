const arr=[12,34,7,45,78,39]

//Que: Print the array element individual those who has even no 
let result=arr.forEach((element) => {
    if(element%2==0)
        //return (element)  //we cant return from forEach
        console.log(element)
        
});
console.log(result)
console.log(arr)