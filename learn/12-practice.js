const ten = () => 10;

const logger = (logMsg) => "로그메시지: " + logMsg;

console.log(logger("화살표 함수 표현식은 매우 유용합니다!"));

const px2rem = (px) => px / 16 + "rem";
console.log(px2rem(82));

const percentage = (from, to) => (from / to) * 100 + "%";
console.log(percentage(360, 1280));
