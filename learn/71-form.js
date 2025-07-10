{
  const form = document.querySelector("form");
  const input = form.querySelector("input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(input.value);
  });
}
