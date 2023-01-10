// **`문제 설명`**
// input1, input2에는 boolean 타입인 true, false가 입력됩니다.
// 둘 중에 하나라도 true라면 "true"
// 두 개 모두 false면 "false"라는 문구를 띄워주세요.

// **`입력 인자`**
// - input1 - boolean 타입인 true / false
// - input2 - boolean 타입인 true / false

// **`주의 사항`**
// - || (OR) 연산자 또는 &&(AND) 연산자를 이용해 보세요.

// **`예상 결과`**
// boolean(true, false) // "true"
// boolean(false, true) // "true"
// boolean(false, false) // "false"

function boolean(input1, input2) {
	input1 === false && input2 === false ? console.log(false) : 
  input1 === true && input2 === true ? console.log(true) : 
  input1 === true || input2 === true ? console.log(true) : console.log(false)}

boolean(false, false) // "false"
boolean(true, true) // "true"
boolean(true, false) // "true"
boolean(false, true) // "true"