// // for vs reduce 누산 방식 차이
// // reduce
// {
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const total = numbers.reduce((prev, current) => {
//     return prev + current;
//   }, 0);
//   console.log(total);
// }

// // for
// {
//   const numbers = [2, 4, 6, 8, 10];
//   let totalForValue = sumFor(...numbers);
//   console.log(totalForValue);
//   let totalReduceValue = sumReduce(...numbers);
//   console.log(totalReduceValue);
//   function sumFor(...numbers) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       total += numbers[i];
//     }
//     return total;
//   }
//   function sumReduce(...numbers) {
//     return numbers.reduce((prev, current) => prev + current, 0);
//   }
// }

// {
//   const fruits = [
//     "바나나",
//     "애플",
//     "오렌지",
//     "애플",
//     "바나나",
//     "워터 멜론",
//     "오렌지",
//     "워터 멜론",
//     "바나나",
//     "참외",
//   ];
//   const fruitsCount = fruits.reduce((o, fruit) => {
//     o[fruit] = !o[fruit] ? 1 : o[fruit] + 1;
//     return o;
//   });
//   console.log(fruitsCount);
// }

// // flat
// {
//   const nestedArray = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//   ];
//   // const flatten = nestedArray.reduce((acc, current) => [...acc, ...current], []);
//   // 쉽게 flat을 쓸수 있다.
//   const flatten = nestedArray.flat();
//   console.log(flatten);
// }

{
  const list = [
    { content: "하나" },
    { content: "둘" },
    { content: "셋" },
    { content: "넷" },
    { content: "다섯" },
  ];
  //   // for로 구현
  //   let templateString = "";
  //   for (let i = 0, l = list.length; i < l; i++) {
  //     const { content } = list[i];
  //     templateString += `<li>${content}</li>`;
  //   }
  //   console.log(templateString);
  //   // map() 구현
  //   // .map().join() -> string
  //   {
  //     const templateString = list.map(({ content }) => `<li>${content}</li>`).join('')
  //     console.log(templateString)
  //   }
  const ElementString = list.reduce((result, { content }) => {
    return result + `<li>${content}</li>`;
  }, "");
  console.log(ElementString);
}

{
  const scores = [85, 92, 77, 94, 88];
  const avg = scores.reduce((result, current) => {
    return (result + current) / 2;
  });
  console.log(avg);

  const fourGuardianGods = ["동청룡", "서백호", "남주작", "북현무"];
  const direction = fourGuardianGods.reduce((result, current) => {
    return result + current.substring(0, 1);
  }, "");
  console.log(direction);

  const nested = [[1, 3], [5, 7, 9], [11]];
  const flatten = nested.reduce((result, current) => {
    return result.concat(current);
  }, []);
  console.log(flatten);
}
