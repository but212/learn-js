// for vs reduce 누산 방식 차이
// reduce
{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const total = numbers.reduce((prev, current) => {
    return prev + current;
  }, 0);
  console.log(total);
}

// for
{
  const numbers = [2, 4, 6, 8, 10];
  let totalForValue = sumFor(...numbers);
  console.log(totalForValue);
  let totalReduceValue = sumReduce(...numbers);
  console.log(totalReduceValue);
  function sumFor(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }
  function sumReduce(...numbers) {
    return numbers.reduce((prev, current) => prev + current, 0);
  }
}
