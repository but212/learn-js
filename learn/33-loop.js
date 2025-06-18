// ----------------------------------------
// 배열 메서드(Array Method)
// ----------------------------------------

function drawIter(iteration) {
  let laps = 0;
  while (laps < iteration) {
    console.log("도화지에 그림을 그리다");
    laps++;
    console.log(laps, "번 그림을 그렸습니다.");
  }
}

drawIter(20);

// const numbers = [100, 99, 98, 97]
