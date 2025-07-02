/* global gsap */

// {
//   const body = document.body
//   const modal_open_button = document.querySelector('main .modal-open-button')
//   const modal_overlay = document.querySelector('.modal-overlay')
//   const modal_close_button = modal_overlay.querySelector('.modal-close-button')
//   modal_open_button.addEventListener('click', () => {
//     body.classList.add('modal-is-open')
//   })
//   modal_close_button.addEventListener('click', closeModalDialog)
//   function closeModalDialog() {
//     body.classList.remove('modal-is-open')
//   }
// }

// 아래는 모달 다이얼로그가 닫혀야 하는 상황입니다.
// - 모달 다이얼로그의 닫기 버튼을 클릭할 때
// - 모달 오버레이(Modal Overlay) 영역을 마우스로 클릭할 때
// - 닫기 버튼에 초점 이동 후, `Space` 또는 `Enter` 키를 눌렀을 때
{
  const body = document.body;
  const modal_open_button = document.querySelector("main .modal-open-button");
  const modal_overlay = document.querySelector(".modal-overlay");
  const modal_close_button = modal_overlay.querySelector(".modal-close-button");
  const waveHand = modal_overlay.querySelector(".wave-hand");

  animatePointHand();
  modal_open_button.addEventListener("click", () => {
    body.classList.add("modal-is-open");
    animateWaveHand();
  });
  modal_close_button.addEventListener("click", closeModalDialog);
  function closeModalDialog() {
    body.classList.remove("modal-is-open");
  }
  modal_overlay.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) {
      return;
    } else {
      body.classList.remove("modal-is-open");
    }
  });

  function animatePointHand() {
    gsap.from(".point-hand", {
      y: 50,
      opacity: 0,
      duration: 1.25,
      ease: "back.inOut(4)",
    });
  }

  function animateWaveHand() {
    const tl = gsap.timeline();

    tl.from(waveHand, {
      scale: 0.25,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.5)",
    })
      .set(waveHand, { transformOrigin: "center bottom" })
      .to(waveHand, { rotation: 10, duration: 0.15 })
      .to(waveHand, { rotation: -10, duration: 0.15 })
      .to(waveHand, { rotation: 10, duration: 0.15 })
      .to(waveHand, { rotation: -10, duration: 0.15 })
      .to(waveHand, { rotation: 0, duration: 0.15 });
  }
}
