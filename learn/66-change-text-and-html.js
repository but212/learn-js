{
  /* global gsap */
  const h1Elem = document.querySelector("h1");
  h1Elem.textContent = "자바스크립트";
  //   h1Elem.innerHTML = /* html */ `
  //     <span>자</span>
  //     <span>바</span>
  //     <span>스</span>
  //     <span>크</span>
  //     <span>립</span>
  //     <span>트</span>
  //     `.trim();
  //   h1Elem.innerHTML += `<em>!</em>`;
  //   // 마운트 요소 내부에 목록 동적 추가
  //   document.querySelector(".mount").innerHTML = /* html */ `
  //     <ul class="italian-menu">
  //       <li>피자</li>
  //       <li>파스타</li>
  //       <li>리조또</li>
  //     </ul>
  //   `;

  h1Elem.innerHTML = h1Elem.textContent.split("").reduce((acc, current) => {
    return acc + `<span>${current}</span>`;
  }, "");

  gsap.from("h1 span", {
    y: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 1.4,
    ease: "back.inOut(7)",
  });
}
