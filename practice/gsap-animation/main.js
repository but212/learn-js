/* global gsap */

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
        duration: 0.6,
        ease: "back.out",
      })
      .from(
        ".purple",
        {
          y: 200,
          opacity: 0,
          duration: 0.6,
          ease: "back.out",
        },
        "<"
      )
      .from(".pink", {
        y: -200,
        opacity: 0,
        duration: 0.6,
        ease: "back.out",
      })
      .from(
        ".green",
        {
          y: -200,
          opacity: 0,
          duration: 0.6,
          ease: "back.out",
        },
        "<"
      )
      .from(
        ".yellow",
        {
          y: 200,
          opacity: 0,
          duration: 0.6,
          ease: "back.out",
        },
        "-=0.3"
      );
  }
  setTimeout(animate, 500);
}
