const arr=[10,20,30,40,50]
console.log(arr) ////[10,20,30,40,50]

//1.push : insert the ele at last 
arr.push(100)
console.log(arr) ////[10,20,30,40,50,100]

//2.pop: remove the last ele from array
const result=arr.pop()
console.log(result) //100
console.log(arr) //[1,20,30,40,50]

//3. shift(): remove the first ele of array
const removeele=arr.shift()
console.log(removeele) //10
console.log(arr)//[20,30,40,50]
//4.unshift(): add the element from starting
arr.unshift(27)
console.log(arr)//[5,20,30,40,50].

//concat : merge two array
const arr1=[3,6,9,12]
const arr3=arr.concat(arr1)
console.log(arr3)

//includes(): its check the given argument is present or not 
console.log(arr.includes(30))//true
console.log(arr.includes(35))//false

//indexof(): its return the index of argument element 
console.log(arr.indexOf(50)) //4
console.log(arr.indexOf(35)) //if it is not present then return -1


//sort(): sort the array element in ascending order
console.log(arr.sort())

//reverse(): reverse the array elements
console.log(arr.reverse()) //reverse function its modify the original array elements
console.log(arr)

//arr=[ 50, 40, 30, 27, 20 ]
console.log("slice result")
console.log(arr.slice())
console.log(arr)
console.log(arr.slice(0))
console.log(arr)
console.log(arr.slice(0,4))
console.log(arr)
console.log(arr.slice(2,4))
console.log(arr)
console.log(arr.slice(4,2))//invalid range
console.log(arr)
console.log(arr.slice(2,-1))
console.log(arr)
console.log(arr.slice(-3,-1))
console.log(arr)
console.log(arr.slice(-1,-3))//invalid range
console.log(arr)

//splice(startindex,deleteCount,newelementadd):remove no of element from startindex and replace with new elements if is mentioned
console.log("splice result")
console.log(arr.splice())
console.log(arr)
// console.log(arr.splice(0))
// console.log(arr)
console.log(arr.splice(0,3))
console.log(arr) //[30,27,20]
console.log(arr.splice(1,-2)) //no of ele to delete that value should be +ve integer
console.log(arr)
console.log(arr.splice(1,1,40))
console.log(arr)
arr.push(67)
arr.push(89)
arr.push(45)
console.log(arr)
console.log(arr.splice(2,1,100,145))
console.log(arr)