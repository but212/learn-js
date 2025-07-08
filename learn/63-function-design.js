{
  /**
   * 배열에서 조건에 따라 걸러서 반환하는 함수
   * @param {T[]} array 대상 배열
   * @param {Function} callback 조건을 실행하는 콜백함수
   * @returns {T[]} 조건으로 걸러진 배열
   */
  function filter(array, callback) {
    // 명령형 코드
    const filteredArray = [];

    for (let index = 0, l = array.length; index < l; index++) {
      const item = array[index];
      callback(item, index, array) ? filteredArray.push(item) : null;
      // console.log('참인 아이템 =', item)
    }

    return filteredArray;
  }
  /**
   * 배열에 대하여 매핑하는 함수
   * @param {Array} likeArray 대상 배열 변수
   * @param {Function} callback 각 아이템에 적용할 콜백함수
   * @returns {Array} 적용 후 결과 배열
   */
  function map(likeArray, callback) {
    let result = [];
    for (let index = 0; index < likeArray.length; index += 1) {
      result.push(callback(likeArray[index], index, likeArray));
    }
    return result;
  }

  console.log(filter([1, 2, 3, 4], (n) => n % 2 === 0));
}

// 실습 1
{
  const books = [
    { id: "book-isbn-3", title: "자바스크립트 입문", isBorrow: true },
    { id: "book-isbn-7", title: "리액트 마스터", isBorrow: false },
    { id: "book-isbn-12", title: "프론트엔드 개론", isBorrow: true },
  ];
  /**
   * 대출 가능한 도서를 반환하는 함수
   * @param {{id: string; title: string; isBorrow: boolean}[]} books 대상 책 배열
   * @returns {{id: string; title: string; isBorrow: boolean}[]} 현재 대출가능한 책 배열
   */
  function getCanBorrowBooks(books) {
    return books.filter(({ isBorrow }) => isBorrow);
  }
  console.log(getCanBorrowBooks(books));
}

// 실습 2
{
  const students = [
    { id: 1, name: "김지훈", email: "jihun.kim@example.com", isPresent: true },
    {
      id: 2,
      name: "박아름",
      email: "areum.park@example.com",
      isPresent: false,
    },
    { id: 3, name: "이민수", email: "minsu.lee@example.com", isPresent: true },
    { id: 4, name: "최수빈", email: "subin.choi@example.com", isPresent: true },
    {
      id: 5,
      name: "정하늘",
      email: "haneul.jung@example.com",
      isPresent: false,
    },
    {
      id: 6,
      name: "윤다현",
      email: "dahyun.yoon@example.com",
      isPresent: true,
    },
    { id: 7, name: "한지민", email: "jimin.han@example.com", isPresent: false },
    { id: 8, name: "오세영", email: "seyoung.oh@example.com", isPresent: true },
    { id: 9, name: "서윤호", email: "yunho.seo@example.com", isPresent: true },
    {
      id: 10,
      name: "배예진",
      email: "yejin.bae@example.com",
      isPresent: false,
    },
  ];

  /**
   * 사람 객체에서 email만 취합함
   * @param {{email: String}[]} personObjects 사람에 대한 정보를 가진 객체
   * @returns String[] personObjects중 email만 취합한 배열
   */
  function extractEmail(personObjects) {
    return personObjects.map((person) => person.email);
  }

  console.log(extractEmail(students));
}
