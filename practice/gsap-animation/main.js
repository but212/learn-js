/* global gsap GSDevTools */

// {
//   // Web Animations API
//   function playground() {
//     const boxElements = document.querySelectorAll(".box");
//     const keyframes = [{ translate: "0 0" }, { translate: "80vw 0" }];
//     const options = {
//       duration: 1000,
//       fill: "forwards",
//     };
//     boxElements.forEach((element) => {
//       const animation = element.animate(keyframes, options);
//       animation.pause();
//       // animation.play()
//     });
//   }
//   /* global gsap */
//   // GSAP API
//   function playgroundGSAP() {
//     // gsap.to(".box", { x: "80vw" });
//     // gsap.to(".box", { x: 500 /* px */ });
//     // gsap.from(".box", { y: -200 });
//     // gsap.fromTo(".box", { x: 400, y: -400 }, { x: 10, y: 50 });
//     // gsap.set(".box", { x: 400, y: -200 });
//     // // SVG 요소
//     // gsap.to(".svgBox", {
//     //   attr: {
//     //     rx: 40,
//     //     fill: "red",
//     //   },
//     // });
//     // JavaScript 객체
//     const o = {
//       num: 0,
//       color: "yellow",
//     };
//     const output = document.querySelector("output");
//     const renderCount = () => {
//       output.value = Math.round(o.num);
//     };
//     gsap.to(o, {
//       num: 100,
//       color: "orange",
//       duration: 5,
//       repeat: -1,
//       onUpdate: renderCount,
//       ease: "power1",
//       onComplete: () => {
//         // console.log('finished gsap animation')
//         gsap.set(output, { opacity: 0 });
//       },
//     });
//     // // delay
//     // // repeatDelay
//     // gsap.to(".box:first-of-type", {
//     //   rotation: 360,
//     //   duration: 1,
//     //   repeat: 1,
//     //   repeatDelay: 1,
//     // });
//     // gsap.to(".box.yellow", { rotation: 360, duration: 1, delay: 1 });
//     // Canvas Animation
//     const canvasElement = document.querySelector(".canvas");
//     const canvas = canvasElement.getContext("2d");
//     canvas.fillStyle = "#d0d0d0";
//     const position = { x: 0, y: 0 };
//     function draw() {
//       canvas.clearRect(0, 0, 400, 400);
//       canvas.fillRect(position.x, position.y, 100, 100);
//     }
//     gsap.to(position, {
//       x: 300,
//       y: 300,
//       duration: 4,
//       onUpdate: draw,
//     });
//   }
//   setTimeout(() => {
//     playgroundGSAP();
//     playground();
//   }, 500);
// }

// // gsap 스태거 예제
// {
//   function animate() {
//     // gsap.from(".blue", { y: 100, opacity: 1 });
//     // gsap.from(".yellow", { y: 100, opacity: 2 });
//     // gsap.from(".green", { y: 100, opacity: 3 });
//     const main = document.querySelector("main");
//     main.addEventListener("click", (e) => {
//       const target = e.target;
//       if (!target.classList.contains("box")) {
//         return;
//       }
//       gsap.to(".box", {
//         y: -100,
//         opacity: 0,
//         stagger: (index, target, list) => {
//           if (target.classList.contains("green")) {
//             return 1;
//           } else {
//             return index * 0.2;
//           }
//         },
//         ease: "power4.out",
//       });
//     });
//     gsap.from(".box", { y: 100, stagger: 0.1, opacity: 0 });
//   }
//   setTimeout(animate, 800);
// }

// gsap timeline
{
  function animate() {
    // const tween = gsap.to(".box:first-of-type", {});
    // console.log(tween);
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
    timeline
      .from(".blue", {
        y: 200,
        opacity: 0,
        duration: 0.4,
        ease: "back.out",
      })
      .from(
        ".purple",
        {
          y: 200,
          opacity: 0,
          duration: 0.4,
          ease: "back.out",
        },
        "<"
      )
      .from(".pink", {
        y: -200,
        opacity: 0,
        duration: 0.4,
        ease: "back.out",
      })
      .from(
        ".green",
        {
          y: -200,
          opacity: 0,
          duration: 0.4,
          ease: "back.out",
        },
        "<"
      )
      .from(
        ".yellow",
        {
          y: 200,
          opacity: 0,
          duration: 0.4,
          ease: "back.out",
        },
        "-=0.3"
      );
  }
}

// // gsap callbacks and controlls
// {
//   function animate() {
//     const tl = gsap
//       .timeline({
//         repeat: 1,
//         repeatDelay: 1,
//         // yoyo: true,
//         defaults: { opacity: 0, duration: 1, ease: "back.inOut(4)" },
//         // 타임라인 콜백 설정
//         onStart: () => {
//           console.log("start");
//         },
//         onUpdate: () => {
//           console.log("updating...");
//         },
//         onRepeat: () => {
//           console.log("repeat");
//         },
//         onComplete: () => {
//           console.log("completed");
//         },
//         onReverseComplete: () => {
//           console.log("reverse completed");
//           document.querySelector('[data-control="timeScale-0.5"]').click();
//           console.log("0.5배속 재생 시작!");
//         },
//       })
//       .from(".blue", { y: 200 }) // 0s
//       .from(".purple", { y: 200 }, "<")
//       .from(".yellow", { y: -200 }, "-=0.3")
//       .from(".pink", { y: -200 }, "<")
//       .from(".green", { y: 200 }, 0 + 0.3);
//     // 타임라인 인스턴스 제어
//     // pause()
//     tl.pause();
//     // 이벤트 위임
//     // 타임라인 컨트롤 (재생, 일시정지, 재개, 역재생, 재시작, 2배속, 0.5배속)
//     document.querySelector("header").addEventListener("click", (e) => {
//       const button = e.target.closest("button");
//       if (button.matches('[data-control="play"]')) {
//         tl.play();
//       }
//       if (button.matches('[data-control="pause"]')) {
//         tl.pause();
//       }
//       if (button.matches('[data-control="resume"]')) {
//         tl.resume();
//       }
//       if (button.matches('[data-control="reverse"]')) {
//         tl.reverse();
//       }
//       if (button.matches('[data-control="restart"]')) {
//         tl.restart();
//       }
//       if (button.matches('[data-control="timeScale-2"]')) {
//         tl.timeScale(2).play();
//       }
//       if (button.matches('[data-control="timeScale-0.5"]')) {
//         tl.timeScale(0.5).play();
//       }
//     });
//   }
//   function tweenAnimate() {
//     const greenTween = gsap.to(".green", {
//       scale: 1.3,
//       rotation: 270,
//       skewX: 30,
//       duration: 1.5,
//       ease: "back.inOut(2)",
//       repeat: 1,
//       yoyo: true,
//       repeatDelay: 1,
//       onStart: () => {
//         console.log("start tween");
//       },
//       onRepeat: () => {
//         console.log("2배속");
//         greenTween.timeScale(2).play();
//       },
//       onComplete: () => {
//         console.log("complete tween");
//       },
//     });
//     greenTween.pause();
//     document.querySelector(".purple").addEventListener("click", () => {
//       greenTween.timeScale(0.4).play();
//     });
//   }
//   setTimeout(() => {
//     animate();
//     // tweenAnimate()
//   }, 200);
// }

// gsap - animation debug with GSDevTools
{
  // 플러그인 등록
  gsap.registerPlugin(GSDevTools);

  const timeline = gsap.timeline({
    repeat: 1,
    yoyo: true,
    defaults: { x: -200, duration: 0.4, opacity: 0, rotation: 270 },
  });

  timeline
    .from(".blue")
    .from(".yellow")
    .from(".green")
    .from(".pink")
    .from(".purple");

  GSDevTools.create({ animation: timeline });
}
