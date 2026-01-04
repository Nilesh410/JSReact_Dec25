const promise1=new Promise(function (resolve,reject){
    setTimeout(()=>{
        console.log("Async 1 task completed");
        let error=true
        if(!error)
            resolve({username:"nilesh",password:"1234"})
        else
            reject(error)


    })
})
promise1.then(function(user){
    console.log("promise resolved")
    console.log(user)
    return user.username;
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("The promise is either resolved or reject")
})