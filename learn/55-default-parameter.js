// // 기본 파라미터 활용 유틸
// {
//   function query(selector, element = document) {
//     return element.querySelector(selector);
//   }
//   function queryAll(selector, element = document) {
//     return element.querySelectorAll(selector);
//   }
//   const body = query("body");
//   const h1 = query("h1");
//   const buttons = queryAll("button");
//   console.log(body);
//   console.log(h1);
//   console.log(buttons);
// }

// // 선택적 매개변수 설정
// {
//   // function createUser(
//   //   name, age, job, location, email, password
//   // ) {
//   //   const user = {}
//   //   user.name = name
//   //   user.age = age
//   //   user.job = job
//   //   user.location = location
//   //   user.email = email
//   //   user.password = password
//   //   return user
//   // }
//   // 함수에 전달할 인수의 순서를 정확히 기억해야!
//   // let lee = createUser('이현준', 21, '대학생', '서울', 'leehj@edu.io', 'lee@21seoul')
//   function createUser(name, age, etcInfo = {}) {
//     // 매개변수 구조 분해 할당
//     const { bio, friends } = etcInfo;
//     const user = {};
//     user.name = name;
//     user.age = age;
//     user.bio = bio;
//     user.friends = friends;
//     return user;
//   }
//   // 객체 타입을 함수에 전달할 인수로 설정하면 객체의 속성을 모두 기억할 필요가 없다.
//   const lee = createUser("이재홍", 21, {
//     friends: ["박현준", "김재수"],
//     bio: "지역에서 착하기로 소문난 농사꾼",
//   });
//   console.log(lee);
//   const park = createUser("박선홍", 19);
//   console.log(park);
// }

// // 선택적 매개변수 설정 (구조 분해 할당 + 기본 매개변수)
// {
//   function createUser(name, age, { bio = "", friends = [] } = {}) {
//     const user = {};
//     user.name = name;
//     user.age = age;
//     user.bio = bio;
//     user.friends = friends;
//     return user;
//   }
//   const park = createUser("박선홍", 19);
//   console.log(park);
// }

// {
//   const aLink = document.querySelector("h1 > a");
//   // 매개변수를 함수안에서 분해
//   const handleClick1 = (e) => {
//     e.preventDefault();
//     const { currentTarget: aElement } = e;
//     const relValue = aElement.getAttribute("rel");
//     console.log(relValue);
//     aElement.removeAttribute("rel");
//     aElement.setAttribute("lang", "ko");
//     aElement.textContent = "자바스크립트";
//   };
//   // 매개변수 분해 할당 - 대신 event관련 속성 및 메서드는 못씀
//   const handleClick2 = ({ currentTarget: aElement }) => {
//     const relValue = aElement.getAttribute("rel");
//     console.log(relValue);
//     aElement.removeAttribute("rel");
//     aElement.setAttribute("lang", "ko");
//     aElement.textContent = "자바스크립트";
//   };
//   aLink.addEventListener("click", handleClick1);
// }

{
  /* global gsap */

  // GSAP API
  // gsap.to(target(s), x, y, duration, rotation, opacity, delay, repeat, yoyo, repeatDelay, ...)
  gsap.set("h1", { opacity: 0 });

  setTimeout(() => {
    gsap.fromTo(
      "h1",
      /* vars options */
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 100,
      }
    );
  }, 500);
}
