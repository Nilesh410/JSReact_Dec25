const arr = [2, 4, 3, 5, 6];

const result = arr
  .map((ele) => ele * ele)
  .filter((ele) => {
    if (ele % 2 == 0) return ele;
  })
  .reduce((sum, ele) => (sum = sum + ele), 0);
console.log(result);
