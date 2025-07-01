// {
//   const ballElement = document.querySelector(".ball");
//   const CLASS_TRANSITION = "is-transition";
//   ballElement.addEventListener("click", (e) => {
//     const ball = e.currentTarget;
//     {
//       ball.style.setProperty("--fill", "#bc1f49");
//       ball.style.setProperty("--size", "100px");
//     }
//     // e.currentTarget.classList.toggle(CLASS_TRANSITION);
//   });
//   //   ballElement.addEventListener("mouseenter", (e) => {
//   //     e.currentTarget.classList.add(CLASS_TRANSITION);
//   //   });
//   //   ballElement.addEventListener("mouseleave", (e) => {
//   //     e.currentTarget.classList.remove(CLASS_TRANSITION);
//   //   });
// }

// 웹 애니메이션 API 활용
{
  // 웹 애니메이션 API를 적용해 볼을 클릭하면
  // 스케일 조정되도록 애니메이션이 "재생(play)"됩니다. (무한 반복: Infinity)
  // 다시 볼을 클릭하면 애니메이션이 "일시정지(pause)"됩니다.

  const ballElement = document.querySelector(".ball");

  const animation = ballElement.animate(
    [
      { scale: 1, offset: 0 },
      { scale: 1.5, offset: 0.5 },
      { scale: 1, offset: 1 },
    ],
    {
      duration: 2000,
      iterations: Infinity,
      easing: "ease-in-out",
    }
  );

  animation.pause();

  ballElement.addEventListener("click", () => {
    if (animation.playState === "paused") {
      animation.play();
    } else {
      animation.pause();
    }
  });
}
