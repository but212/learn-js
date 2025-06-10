/* 원시타입(Primitive Type)
 * 1. String    - 문자열
 * 2. Number    - 숫자
 * 3. Boolean   - 불 타입
 * 4. undefined - 정의되지 않은 값
 * 5. null      - 의도적으로 비어있는 값
 * 6. Symbol    - 유일무이한 값
 * 7. BigInt    - 큰 숫자
 */

// ----------------
// String
// ----------------

'작은 따옴표로 묶인 문자값'
"큰 따옴표로 묶인 텍스트 데이터"

console.log("나의 100m 달리기 최고 기록은 12'26\"이야.");
console.log('나의 100m 달리기 최고 기록은 12\'26"이야.');
console.log("나의 100m 달리기" + " " + "최고 기록은 12'26\"이야.");

// ----------------
// Number
// ----------------

// 산술 연산
// 덧셈 (add):       +
// 뺄셈 (subtract):  -
// 곱셈 (multiply):  *
// 나눗셈 (divide):   /
// 나머지 (modulus):  %

console.log(1000000 + 399382);
console.log(1000000 - 399382);
console.log(1000000 * 399382);
console.log(1000000 / 399382);
console.log(1000000 % 6);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// ----------------
// Boolean
// ----------------

true
"true"
false
"false"
console.log(true)
console.log("true")
console.log(false)
console.log("false")


// ----------------
// undefined
// ----------------

undefined
console.log(undefined)
