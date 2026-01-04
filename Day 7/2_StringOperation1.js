const str=" Hello Programmer, B Let's start the programming "
console.log(str)

//length()
console.log(str.length)
//toLowerCase() and toUpperCase()
console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str)

//trim(): delete the start and ending empty space
console.log(str.trim())
console.log(str)

//trimStart(): remove starting empty space 
console.log(str.trimStart())
console.log(str)

//trimEnd(): remove ending spaces 
console.log(str.trimEnd())
console.log(str)

//includes("substring/char")
console.log(str.includes("Programmer"))//true
console.log(str.includes("programmer"))//false

//indexOf("char/string")
console.log(str.indexOf('L'))
console.log(str.indexOf('b'))
console.log(str.indexOf("the")) //for string its return present staring index value

//replace(): replace only first occurence of char with given char 
console.log(str.replace('B','C'))
console.log(str)
//replaceAll() : replace all the char which is mention in the function from the string 
console.log(str.replaceAll('m','n'))
console.log(str)

//concat
console.log(str.concat("JS"))
console.log(str)

//padStart()
console.log(str.length)
console.log(str.padStart(54,"X"))
console.log(str)

const str1="1234567891"
console.log(str1.slice(-3).padStart(10,"x"))

//padEnd():add the padding elements at the end , first argument is no of result string length
console.log(str1.slice(0,3).padEnd(10,"x").padStart(11,'X'))

//charAt(): return the index of the given char in the string 
console.log(str.charAt(21))
console.log(str.charAt(-2))//no result  invalid value
//charCodeAt(): return the ascii code value for the given char from the string
console.log(str.charCodeAt(2)) //return ascii values of the char 

//split
console.log(str.split(""))
console.log(str)

//slice(startindex,endindex)
console.log(str.slice(2,10))
console.log(str)
//console.log(str.splice(2,3,'A')) //splice does not working on string


//subString()
console.log(str)
console.log(str.slice(7,17))
console.log(str.substring(7,17))
console.log(str)
console.log(str.slice(7,-1))
console.log(str.substring(7,-1))//Hello
console.log(str.substring(7,0))//Hello
console.log(str.substring(0,7))//Hello
console.log(str.substring(-1,7))//Hello