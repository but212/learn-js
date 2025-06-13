// --------------------------------------------------------------------------
// ✅ 컬러 포멧 변경 함수 작성
// --------------------------------------------------------------------------
// - [ ] setHexColor(red, green, blue) : #hexcode 반환
// - [ ] setRgbColor(red, green, blue) : rgb() 문자열 반환
// --------------------------------------------------------------------------

// 예) setHexColor(255, 255, 255) // 결과값: '#ffffff'

// 예) setRgbColor('ff', 'ff', 'ff') // 결과값: 'rgb(255, 255, 255)'

function setHexColor(red, green, blue) {
  const r = red.toString(16);
  const g = blue.toString(16);
  const b = green.toString(16);
  return "#" + r + g + b;
}

function setRgbColor(red, green, blue) {
  const r = parseInt(red, 16);
  const g = parseInt(green, 16);
  const b = parseInt(blue, 16);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

console.log(setHexColor(255, 255, 255));
console.log(setRgbColor("ff", "ff", "ff"));
