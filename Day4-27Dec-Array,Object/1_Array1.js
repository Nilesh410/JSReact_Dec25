const arr = [
  10,
  10.3,
  "Itview",
  true,
  undefined,
  null,
  [10, 20, 30],
  { name: "Itview" },
  () => {
    console.log("hello");
  },
];
console.log(arr);
console.log(arr[3])

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}