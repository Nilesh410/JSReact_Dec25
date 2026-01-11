const promisefive=new Promise((resolve, reject)=>{
    //Asynchronous task
    console.log("Enter in promise 5")
    setTimeout(()=>{
        console.log("Async Task 5")
        let error=true
        if(!error)
        {
            console.log("Async task completed")
            resolve({userName:"Itview",email:"itview@gmail.com"})
        }
        else
        {
            reject('Error:Something is wrong with this task')
        }
      
    },5000)
})

//cosume the promise
promisefive.then((user)=>{
    console.log("Promise 5 Resolved ")
    console.log(user)
    return user.userName
}).then((userData)=>
 {
   console.log(userData)
   console.log("2nd then completed")
 }).catch((error)=>{
    console.log(error)
 })
