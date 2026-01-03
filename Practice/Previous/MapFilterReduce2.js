const arr1=[10,20,30,50]

const result=arr1.map(ele=>ele*2).filter(ele=>ele>50).reduce((sum,ele)=>{ return sum=sum+ele},0)
console.log(result)