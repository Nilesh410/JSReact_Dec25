async function alluserData(){
      try {
            const response=await fetch('https://jsonplaceholder.typicode.com/users')
            //console.log(response)
            const usersData=await response.json()
            console.log(usersData[0])
      } catch (error) {
        console.log(error)
      }
}
alluserData()