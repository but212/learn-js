{
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // 폼요소 순환
    // // 방법 1
    // for (const elem of form.elements) {
    //   console.log(elem);
    // }

    // // 방법 2
    // Array.from(form.elements).forEach((elem) => {
    //   console.log(elem);
    // });

    // console.log(form.elements);
    // console.log(form.elements[0]);
    // console.log(form.elements[1]);
    // console.log(form.elements[2]);
    // console.log(form.querySelector("button[type='submit']"));
    // console.log(form.elements[0].value);
    // console.log(form.elements[1].value);
    // console.log(form.elements[2].value);
    // console.log(form.querySelector("button[type='submit']").value);
  });
}
